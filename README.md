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
`# npm i -g create-react-app`

1.1 查看安装版本 `# create-react-app -v`

2. 新建 react 应用

`# create-react-app project01`

2.1 查看应用

`# cd project01 && ls -l`

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
- 如果提示出错：请 `git commit` 之后没有提示出错
- 扩展 package.json 里的 script字段，扩展 npm run 命令
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

