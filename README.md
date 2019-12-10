# customs-clearance-system

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### customs-clearance-system 项目架构

```
├── dist                     # 打包生成文件
├── public
│   ├── favicon.ico          # Favicon
│   └── index.html
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── views                # 业务页面
│   ├── router               # 路由管理
│   ├── services             # 后台接口服务
│   ├── store                # vuex状态管理
│   ├── styles               # 样式库
│   ├── utils                # 工具库
│   ├── App.vue              # 全局入口视图页面
│   └── main.js              # 全局 JS
│
├── .env.development         #开发环境环境变量
├── .env.test                #测试环境环境变量
├── .env.production          #生产环境环境变量
├── vue.config.js
├── README.md
├── babel.config.js
└── .eslintrc.js
```
