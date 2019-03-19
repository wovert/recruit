# React 全栈招聘 APP

## 前段页面功能

- 登录注册
- 信息完善
- 个人中心
- 牛人列表（找工作）
- BOSS 列表（招认）
- 消息列表
- 聊天详情页

## 前段支撑

- antd-mobile 组件库
- Redux 状态管理
- React-router4 路由
- axios 异步请求
- create-react-app
- 第三方组件
- React

## 后端

- Express
- Socket.io
- MongoDB

## react 开发环境

[create-react-app](https://github.com/facebook/create-react-app) 脚手架生成文件格式

1. 全局安装(下载安装 webpack，react和react-dom和其他react 依赖包) - 注意安装时间比较慢，请耐心等待

```sh
# npm i -g create-react-app

查看安装版本
# create-react-app -v
```

2. 新建 react 应用

``` sh
# create-react-app project01

查看应用
# cd project01 && ls -l
```

- src 源代码目录
- public 静态资源目录
- node_modules 第三方依赖模块

3. 启动项目（开启调试环境）

`# npm start`

4. 查看调试页面

浏览器访问 `http://localhost:3000`

5. 脚手架命令安装第三方库

`# npm install redux --save`

- src/App.js 导入 redux 库
  `import { createStore } from 'redux'`

## 自定义配置 webpack

- 弹出配置文件 `# npm run eject`
- 如果提示出错：请`git commit` 之后没有提示出错
- 扩展 **package.json** 里的 script字段，扩展 npm run 命令
- 注册码云账号(https://git.oschina.net/) 建立私有项目

## Express + MongoDB

- Express + MongoDB 开发 Web 后台接口

## [Express](http://www.expressjs.com.cn)

``` sh
$ npm i express --save
热修改
$ npm instal -g nodemon
$ nodemon server.js
```

- res 方法
  - res.send()
  - res.json({json数据});
  - res.sendFile();
- app 方法
  - app.get()
  - app.post()
  - app.use() 模块

## Mongodb

``` sh
# npm i mongoose --save
支持 post 参数
# npm i body-parse --save
存储登录信息 cookie
# npm i cookie-parser --save
服务器端session
# npm i cookie-session --save
```

- Windows 启动 mongod 服务器

> mongod.exe --dbpath C:\usr_local\MongoDB\data

``` js
const mongoose = require('mongoose');
// 1. 连接 mongod 并且使用 my-collection 集合
const DB_URL = 'mongodb://localhost:27017/test-my-collection';
mongoose.connect(DB_URL);
// 2. 测试是否连接成功
mongoose.connection.on('connected', ()=>{
  console.log('mongo is connected successful.');
});

// 3. 定义模型 - 类似 MySQL 的表
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true},
  age: { type: Number, require: true }
}));

// 4. 创建数据
User.create({
  name: 'wovert',
  age: 18,
}, (err, doc)=>{
  if(!err) {
    console.log(doc);
  } else {
    console.log(err);
  }
};

// 5. 查询数据
app.get('/data, (req, res) => {
  User.find({}, (err, doc)=>{
     res.join(doc);
  })
});

// 6. 删除数据
User.remove({age: 18}, (err, doc)=>{
  if (!err) {
    console.log('delete success');
    User.find({}, (e,d){
      console.log(d);
    })
  }
})

// 7. 更新数据
User.update({'user': 'wovert'}, {'$set':{age:26}}, (e,d){
  console.log(d);
})
```

## 需求分析

### 页面

- 用户中心
- 登录
- 注册
- 信息完善

- 牛人
- 求职信息
- 职位列表

- BOSS
- 管理职位
- 查看牛人

- 聊天

### 项目骨架

- 文件架构和规范
  - src 前段源码目录
  - server 后端 express 目录
  - 核根据功能文件夹：component, container, reducers 等

- route 划分页面
  - 进入应用时获取用户信息，用户未登录跳转 login 页面
  - Login and register page is not must authenticate 
  - user information, chating list, 职位列表页面共享底部 tabbar

- others
  - Mongodb 字段设计
  - axios 发送异步请求
  - redux 管理所有数据，组件尽量用 antd-mobile，弱化 css

### 流程开发开发

1. 熟悉一个项目的开发流程
2. 学会模块化、组件化、工程化的开发模式
3. 掌握使用create-react-app脚手架初始化react项目开发
4. 学会使用node+express+mongoose+mongodb搭建后台开发

### react插件和第三方库

1. `react-router-dom`开发单页应用
2. `axios` 与后端进行数据交互
3. `redux + react-redux + redux-thunk` 管理应用组件状态
4. `antd-mobile` 组件库构建界面
5. `mongoose` 操作 `mongodb` 数据库
6. `express` 搭建后台路由
7. `socket.io` 实现实时通信
8. `blueimp-md5` 对密码进行md5加密处理
9. `js-cookie`操作浏览器端 `cookie` 数据

### npm 常用命令

``` sh
npm init 初始化当前应用包，生成 package.json
npm i 根据package.json 下载所有依赖包
npm i packageName --save 下载某个运行时依赖包
npm i packageName --save-dev 下载某个开发编译期以来包
npm i packageName -g 全局下载某个依赖包
npm i pakageName@version 下载指定版本的某个依赖包
npm info packageName 查看某个包有远程仓库中的相关信息
npm rm packageName --save 移除已下载的运行依赖包
npm rm packageName --save-dev 移除已下载的开发依赖包
npm list 查看安装的所有的包
npm help 查看命令详细宝珠
npm i -g cnpm --registry=https://registry.npm.taobao.org 安装淘宝镜像
npm config set registry="https://registry.npm.taobao.org"  将淘宝镜像设置为 npm 的默认源
npm run xx 指向package.json的scripts中配置的命令
npm root -g 查看厍下载目录
```

## 应用开发

### 开启项目开发

#### create-react-app 脚手架搭建项目

> react官方提供的用于单间基于react+webapck+es6项目的脚手架

```sh
全局下载工具
# npm i -g create-react-app

下载模板项目
# create-react-app zhipin-client

# cd zhipin
# vim package.json
{
  "name": "zhipin_client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.3.2",
    "react-dom": "^16.3.2"
  },
  "devDependencies": {
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "client": "serve build"
  }
}

# npm start

访问 localhsot:3000
```

#### 编码测试与打包发布项目

1. 编码测试

```sh
# npm start
访问：http://localhost:3000
编码，自动编译打包刷新(`live-reload`)，查看效果
```

2. 打包发布

```sh
# npm run build

下载静态服务器包
# npm i -g serve

运行静态文件服务
# serve -s build
访问：http://localhost:5000
```

#### 前段项目源码目录设计

- **src** 客户端代码目录
  - **api** 请求接口模块目录
  - **assets** 公用资源目录
  - **components** UI组件目录
  - **containers** 容器组件目录
  - **redux** 数据状态模块目录
  - **utils** 工具模块目录
  - **index.js** 入口文件

#### 引入antd-mobile

```sh
下载组件库包
# npm i antd-mobile --save
# vim public/idnex.html
```

``` html
<!DOCTYPE html>
<html lang="zh-hans">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <title>React App</title>
    <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
    <script>
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
        }, false);
      }
      if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
      }
    </script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

[移动端点击延迟0.3问题](https://www.cnblogs.com/chaojidan/p/4517895.html)

