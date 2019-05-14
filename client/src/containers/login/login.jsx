/* 
 * 登录路由组件
 */
import React, { Component  } from "react"
import { 
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login} from '../../redux/actions'
import Logo from '../../components/logo/logo'

class Login extends Component {
  // 表单收集数据
  state = {
    username: '', // 用户名
    password: '', // 密码
  }
  login = () => {
    this.props.login(this.state)
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }
  // 处理输入输的的改变：更新对应的状态
  handleChange = (filed, value) => {

    // 更新状态
    this.setState({
      [filed]: value // 属性名不是field，是filed变量的值
    })
  }
  render () {
    const {msg, redirectTo} = this.props.user

    // 如果有值，就重定向
    if (redirectTo) {
      return <Redirect to={redirectTo} />
    }
    return (
      <div>
        <NavBar>供&nbsp;求&nbsp;直&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            {msg ? <div className="error-msg">{msg}</div> : null}
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入用户名"
              onChange={val => {
                this.handleChange('username', val)
              }}
            >
              用户名
            </InputItem>
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入密码"
              type="password"
              onChange={val => {
                this.handleChange('password', val)
              }}
            >
              密码
            </InputItem>
            <Button
              type='primary'
              onClick={this.login}>
              登&nbsp;录
            </Button>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

// 包装成容器组件
export default connect(
  state => ({
    user: state.user
  }),
  {login}
)(Login)