/**
 * 包含n个操作数据库集合数据的 Model 模块
 */

// 1. 连接数据库
//   1.1. 引入 mongoose
const mongoose = require('mongoose')

//   1.2. 连接指定数据库（URL 只有数据库是变化的）
mongoose.connect(   
  'mongodb://localhost:27017/zhipin',
  {
    useNewUrlParser: true
  },
  function (err) {
    if (err) {
      console.log('Connection Error:' + err)
    } else {
      console.log('Connection success!')
    }
  }
)


//   1.3. 获取链接对象
const conn = mongoose.connection

//   1.4. 绑定连接完成的监听（用来提示连接成功）
conn.on('connected', () => {
  console.log('db connect success.')
})

// 2. 定义出对应待定集合的 Model 并向外暴露
//   2.1. 定义 Schema （描述文档结构）
const userSchema = mongoose.Schema({
  username: { // 用户名
    type: String,
    required: true
  },
  password: { // 密码
    type: String,
    required: true
  },
  type: { // 用户类型 dashen/laobao
    type: String
  },
  header: { // 头像名称
    type: String
  },
  post: {  // 职位
    type: String
  },
  info: { // 个人或职位简介
    type: String
  },
  company: { // 公司名称
    type: String
  },
  salary: { // 工资
    type: String
  }
})

//   2.2. 定义 Model (与集合对应，可以操作集合)
const UserModel = mongoose.model('user', userSchema)

//   2.3. 向外暴露 Model
// module.exports = xxx
// exports.xxx = value
// exports.yyy = value
exports.UserModel = UserModel