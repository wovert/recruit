# React 全栈招聘 APP

## 前段页面
- 登录
- 完善信息
- 牛人列表
- BOSS 列表
- 消息列表
- 聊天情况

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

# react 开发环境

## create-react-app 脚手架生成文件格式
https://github.com/facebook/create-react-app
- npm start 开启调试环境
- 浏览器访问localhost:3000 查看调试页面

- 全局安装
`# cnpm i -g create-react-app`

- 查看安装版本
`# create-react-app -v`

- 新建 react 应用
`# create-react-app lingyima`

- 查看应用
`# cd lingyima && ls -l`
src 源代码
public 静态资源
node_modules 第三方模块

- 启动项目
`# npm start`

- 脚手架命令
`npm install redux --save` 安装第三方库库

- src/App.js 导入 redux 库
`import { createStore } from 'redux'`

- 自定义配置webpack
`npm run eject` 弹出配置文件

- 如果提示出错：请 `git commit` 之后没有提示出错

- 扩展 package.json 里的 script字段，扩展 npm run 命令

- 注册码云账号(https://git.oschina.net/)
建立私有项目


## 如何安装和使用第三方库

## 如何定制化配置

# Express + MongoDB
- Express + MongoDB 开发 Web 后台接口

## Express
- cnpm i express --save