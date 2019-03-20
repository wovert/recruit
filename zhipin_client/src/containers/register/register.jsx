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
import Logo from '../../components/logo/logo'

const ListItem = List.Item

export default class Register extends Component {
  render () {
    return (
      <div>
        <NavBar>供&nbsp;求&nbsp;直&nbsp;聘</NavBar>
        <Logo></Logo>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入用户名"
            >用户名</InputItem>
            <WhiteSpace/>            <InputItem 
              placeholder="请输入密码"
              type="password"
            >密码</InputItem>
            <WhiteSpace/>
            <InputItem 
              placeholder="请输入确认密码"
              type="password"
            >确认密码</InputItem>
            <WhiteSpace/>
            <ListItem>
              <span>用户类型</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>大神</Radio>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Radio>老板</Radio>
            </ListItem>
            <Button type='primary'>注&nbsp;册</Button>
            <Button>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}