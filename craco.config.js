const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#c79458',
                            '@success-color': "#19f500"  // 成功色
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};

/*
*





 // '@success-color': "#c1d3b8", // 成功色
 // "@warning-color": "#faad14", // 警告色
 // "@font-size-base": "14px", // 主字号
 // "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
 // " @text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
 // "@text - color - secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
 // "@disabled - color": "rgba(0, 0, 0, 0.25)", // 失效色
 // "@border - radius - base": "2px", // 组件/浮层圆角
 // "@border - color - base": "#d9d9d9", // 边框色
 // "@box-shadow-base":"0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)", // 浮层阴影



 */
