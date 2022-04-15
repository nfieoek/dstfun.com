import 'antd/dist/antd.less'
import {useRoutes} from "react-router-dom";
import routes from './config/router'

export default function App() {
    const element = useRoutes(routes)
    return (
        <div className="App">
            {element}
        </div>
    );
}


//
// /*<Routes>*/
//
// /*    <Route path={"/login"} element={<Login/>}/>*/
//
/*    <Route path={'/!*'} element={<Admin/>}>*/

/*        /!*<Route path={'home'} element={<Home/>}> </Route>*!/!*!/

/*        /!*<Route path={'video'} element={<Video/>}> </Route>*!/!*!/

/*        /!*<Route path={'character'} element={<Character/>}> </Route>*!/!*!/

/*        /!*<Route path={'story'} element={<Story/>}> </Route>*!/!*!/

/*        /!*<Route path={'mod'} element={<Mod/>}> </Route>*!/!*!/

/*    </Route>*!/
//
// /*</Routes>*/
//
