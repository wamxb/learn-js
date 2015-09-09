#r.js

## optimize css
`node r.js -o cssIn=css/main.css out=css/built.css`
> 还可以使用optimizeCss参数设置来配置是否压缩及压缩选项。
* none  不压缩，仅合并
* standard  标准压缩 去换行、空格、注释
* standard.keepLines  除标准压缩外，保留换行
* standard.keepComments  除标准压缩外，保留注释
* standard.keepComments.keepLines  除标准压缩外，保留换行和注释

示列：`node r.js -o cssIn=css/main.css out=css/built.css optimizeCss=standard`

## optimize js
`node r.js -o baseUrl=js name=main out=built.js optimize=none paths.xx=empty:`
1. 对于path配置的非本地的模块文件，使用r.js合并压缩时需要配置`paths.xx=empty:`。
2. `cssIn`和`optimizeCss`参数的使用来合并压缩css文件。

## build.js
```json
({
    appDir: "./",
    baseUrl: "js",
    dir: "r6-built",
    paths: {
        jquery: 'empty:'
    },
    modules: [
        {
            name: "main"
        },
        {
            name: "main0"
        }
    ]
})
```
## 配置选项
* baseUrl
模块查找的根目录，默认情况与data-main所赋值处于同一目录
若是没在config中进行配置，并且script标签没有指定data-main的话，那么默认目录为引入requireJS的HTML页面目录

* paths
该项用于配置那些不在baseUrl下的模块，这个指定的path假定是baseUrl的相对路径，若是以/开头的话就不是了。
这里的id会自动加上.js，我们要获取一个路径时，一般这个样子干：
`require.toUrl() `

* shim
传统浏览器的全局脚本不使用define去声明依赖关系和模块设置值的依赖。

参考网址：http://www.cnblogs.com/snandy/archive/2012/06/08/2538001.html