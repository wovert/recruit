const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/recruit'
// 连接 mongo 并且使用 recruit 数据库
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){
  console.log('mongo connect success')
})
// 定义文档类型
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

// 新增数据
/*
User.create({
  user: 'lingyima.com',
  age: 3
}, function(err, doc){
  if(!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})
*/


// 新建 app
const app = express()

app.get('/', function(req, res){
  res.send("<h1>HelloWorld</h1>")
})

app.get('/delete', function(req, res){
  User.remove({user:'lingyima.com'}, function(err, doc){
    if (!err) {
      console.log('delete success')
      User.find({}, function(e,d){
        console.log(d)
      })
    }
  })
})
app.get('/update', function(req, res){
  User.update({'user':'wovert'}, {'$set': {age:88}}, function(err, doc){
    console.log(doc);
  })
})



app.get('/data', function(req, res){
  User.find({}, function(err, doc){
    return res.json(doc)
  })
  // res.json({name:'wovert.com', type:'IT'})
})

app.listen(9090 , function(){

  console.log('Node app start at port 9090')
})