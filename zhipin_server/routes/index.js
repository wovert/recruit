var express = require('express')
const md5 = require('blueimp-md5')
var { UserModel } = require('../db/models')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

// 注册的路由
router.post('/register', (req, res) => {

  // 1. 获取请求参数数据
  const {username, password, type} = req.body

  // 2. 处理
  // 判断用户是否已经存在，如果存在返回错误提示信息；如果不存在，则保存
  // 查询(根据username)
  UserModel.findOne({username}, (err, user) => {
    if (err) {
      console.log('注册用户失败：', err)
    } else {
      // 有user
      if (user) {
        res.send({
          code: 1,
          msg: '此用户已存在'          
        })
      } else {
        // 不存在
        new UserModel({username, password: md5(password), type}).save((err, user) => {

          // 生成一个cookie（userid: user._id）并交给浏览器保存
          res.cookie(
            'userid',
            user._id,
            {
              maxAge: 1000 * 60 * 60 * 24 * 7 // 持久化 cookie, 浏览器会保存在本地文件
            }
          )

          // 返回成功响应数据 user
          res.send({
            code: 1,
            data: {
              username,
              type,
              _id: user._id
            }
          })
        })
      }
    }
  })
  

  // 3. 返回响应数据
})

module.exports = router
