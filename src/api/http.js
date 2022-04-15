import axios from "axios";
import {message} from "antd";

const API_ = ""


export default function http(url, type = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        let promise;
        //执行异步请求
        if (type === "GET") {
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }

        promise.then(
            response => resolve(response.data)
        ).catch(error => message.error("请求出错", error.message))

    })
}

//登陆请求
export const reqLogin = (username, password) => http(`${API_}/login`, "POST", {username, password})

//获取一级/二级分类的列表
export const reqCategoryList = (parentId) => http(API_ + 'manage/category/list', "GET", {parentId})


//添加分类
export const reqAddCategory = (categoryName, parentId) => http(API_ + "manage/category/add", "POST", {
    categoryName,
    parentId
})

//更新分类
export const reqUpdateCategory = (categoryName, parentId) => http(API_ + '/manage/category/update', "POST", {
    categoryName,
    parentId
})

//获取一个分类
export const reqCategory = (categoryId) => http(API_ + '/manage/category/info', "GET", {categoryId})

//获取商品分页列表
export const reqProducts = (pageNum, pageSize) => http(API_ + '/manage/product/list', "GET", {pageNum, pageSize})

//更新商品的状态 (上架、下架)
export const reqUpdateStatus = (productId, status) => http(API_ + '/manage/product/updateStatus', {productId, status})


const STEAM_API = 'https://steamcommunity.com/workshop/browse/?appid=322330&searchtext='

export const modSearch = (param) => {
    http(`${STEAM_API + param}`, "GET")

}
