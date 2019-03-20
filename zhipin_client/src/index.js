import React from 'react'
import ReactDOM from 'react-dom'
// Switch 路由切换组件
import {HashRouter, Route, Switch} from 'react-router-dom'
import Register from './containers/register/register'
import Login from './containers/login/login'
import Index from './containers/index/index'

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route component={Index}></Route>{/* 默认组件：其他组件必须经过Index路由组件 */}
    </Switch>
  </HashRouter>
), document.getElementById('root'))