// 测试使用mongoose 操作 mongodb 的测试文件

// 1. 连接数据库
//   1.1 引入 mongoose
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

//   1.2 连接指定数据库（URL 只有数据库变化的）
mongoose.connect('mongodb://localhost:27017/temp', 
  {useNewUrlParser: true}, 
  function (err) {
    if (err) {
      console.log('Connection Error:' + err)
    } else {
      console.log('Connection success!')
    }
  }
)

//   1.3 获取连接对象
const conn = mongoose.connection

//   1.4 绑定链接完成的监听（用来提示连接成功）
conn.on('connected', function () {
  console.log('数据库连接成功') // 连接成功自动回调
})


// 2. 得到对应特定集合的 Model
//   2.1 定义 Schema(描述文档结构)
// schema 定义文档结构
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  header: {
    type: String
  }
})

//   2.2 定义 Model(与集合对应，可以操作集合)
const UserModel = mongoose.model('user', userSchema) // 集合名：users


// 3. 通过 Model 或其实例对象集合数据进行 CRUD 操作
//   3.1 通过 Model 实例的 save() 添加数据
function testSave() {
  // 创建UserModel实例
  const userModel = new UserModel({
    username: 'Tom',
    password: md5('123'),
    type: 'dashen'
  })
  userModel.save(function (err, user) {
    if (err) {
      console.log(err)
    } else {
      console.log('save()', user)
    }
  })
}
// testSave()

//   3.2 通过 Model 的 find()/findOne() 查询多个或一个数据
function testFind () {
  // 查询多个, 没有匹配返回[]
  UserModel.find(function (err, users) {
    console.log('users:', users)
  })
  // 查询一个, 没有匹配返回 null
  UserModel.findOne({_id: '5c948c0f07d67a371c1ae21d'}, function (err, user) {
    console.log('user:', user)
  })
}
// testFind()
//   3.3 通过 Model 的 findByIdAndUpdate() 更新某个数据
function testUpdate () {
  UserModel.findByIdAndUpdate(
    {_id: '5c948c0f07d67a371c1ae21d'}, 
    {
      username: 'Jack'
    },
    function (err, doc) {
      console.log('err:', err)
      console.log('doc:', doc)
    }
  )
}
// testUpdate()

//   3.4 通过 Model 的 remove() 删除匹配的数据

function testDelete () {
  UserModel.remove({_id: "5c948c0f07d67a371c1ae21d"}, function (err, doc) {
    console.log('remove():', err, doc)
  })
}
testDelete()

