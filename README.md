# 说明文档

> react+react-keeper+mobx
## git地址

```

## 使用指令

# 安装依赖
npm install 或者 cnpm i

# 启动热替换调试服务器
npm run dev   或者   npm start

# 启动json-server服务器
npm run api

# 打包生产环境
npm run build

```

## 目录结构

- smart-code-xxxx      ----目录名称
    - config            ----调试服务器和json-server的host和port配置
    - jsonServer        ----api mock 目录(用于返回假数据,前端可以先调接口不用等后端)
    - build             ----打包配置
        - dev-server.js     ----调试服务器文件(node服务器)
        - utils.js          ----打包配置里使用的工具方法
        - webpack.pord.conf.js  ----webpack打包功能的配置文件
        - webpack.dev.conf.js    ----webpack调试功能的配置文件
        - webpack.base.js ----webpack基础配置(打包和调试的公共部分)
    - src               ----源码
        - assets            ----资源文件存放目录
        - components        ----vue组件目录(只负责单个功能的组件目录)
            - common            ----通用组件
            - page              ----页面容器组件(和路由关联)
            - App.vue           ----项目根组件
        - router            ----路由配置目录
        - store             ----mobx store目录 (全局的模块封装)
        - units             ----工具函数目录
        - index.js           ----webpack入口文件
    - dist              ----打包文件生成目录（打包的文件会放到这里，没有的话会自动创建）
    - index.html        ----app的html入口模板
