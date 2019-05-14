/* 
 * 注册路由组件
 */
import React, { Component  } from "react"
import { 
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {
  // 表单收集数据
  state = {
    username: '', // 用户名
    password: '', // 密码
    password2: '', // 确认密码
    type: 'laoban', // 用户类型 大神|老板
  }
  register = () => {
    // console.log(this.state)
    this.props.register(this.state)
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  // 处理输入输的的改变：更新对应的状态
  handleChange = (filed, value) => {
    // 更新状态
    this.setState({
      [filed]: value // 属性名不是field，是filed变量的值
    })
  }

  render () {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user

    // 如果有值，就重定向
    if (redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>供&nbsp;求&nbsp;直&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            {msg?<div className="error-msg">{msg}</div> : null}
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入用户名"
              onChange={val => {this.handleChange('username', val)}}
            >用户名</InputItem>
            <WhiteSpace/>            <InputItem 
              placeholder="请输入密码"
              type="password"
              onChange={val => {this.handleChange('password', val)}}
            >密码</InputItem>
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入确认密码"
              type="password"
              onChange={val => {this.handleChange('password2', val)}}
            >确认密码</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
                checked={type === 'dashen'}
                onChange={val => {this.handleChange('type', 'dashen')}}
              >大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio
                checked={type === 'laoban'}
                onChange={val => {this.handleChange('type', 'laoban')}}
              >老板</Radio>
            </ListItem>
            <Button type='primary' onClick={this.register}>注&nbsp;册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
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
  {register}
)(Register)