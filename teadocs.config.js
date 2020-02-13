'use strict';
const path = require('path')

module.exports = {
    doc: {
        name: "", //文档名称
        description: "", //文档的描述
        version: "C:/01/docs/build", //文档的版本
        dir: "C:/01/docs/docs", //文档的目录
        outDir: "C:/01/docs/build", //文档编译成html时输出的目录
        staticDir: "" //文档所用到的静态文件的地址
    }, 
    theme: {
        dir: "", //主题的目录，可自定义主题
        title: "", //html的title标签
        headHtml: "", //html head 的代码
        footHtml: "", //html 底部 的代码
        isMinify: true, //是否为输出的html启用压缩
        rootPath: "C:/01/docs/build/" //表示根路径，如果部署在深目录下面，这个配置项必填，不然会出现找不到资源路径的错误。
    },
    nav: {
        tree: "./tree"
    }
}