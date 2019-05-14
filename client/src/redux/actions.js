/** 
 * 包含多个 action creator
 * 异步 action
 * 同步 action 
 */

import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'
import {
   userRegister, 
   userLogin
} from '../api'

// 授权成功的同步action
const authSuccess = (user) => (
  {
    type: AUTH_SUCCESS,
    data: user
  }
)

// 错误提示信息的同步action
const errorMsg = (msg) => (
  {
    type: ERROR_MSG,
    data: msg
  }
)



// 注册异步action
export const register = (user) => {
  const {username, password, password2, type} = user
  
  // 表单验证，不通过，分发一个errorMsg的同步action
  if (!username) {
    return errorMsg('用户名必须指定')
  } else if (password !== password2) {
    return errorMsg('2次密码要一致')
  }

  // 表单数据合法，返回一个发ajax请求的异步action函数
  return async dispatch => {
    // 发送注册的异步请求
    // const promise = userRegister(user)
    // promise.then(res => {
    //   const result = res.data // {code: 0/1, data: user, msg: ''}
    // })
    const res = await userRegister({username, password, type})
    const result = res.data
    if (result.code === 0) {
      // 授权成功的action
      dispatch(authSuccess(result.data))
    } else {
      // 分发错误提示信息同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 登录异步action
export const login = (user) => {

  const {username, password} = user
  
  // 表单验证，不通过，分发一个errorMsg的同步action
  if (!username) {
    errorMsg('用户名必须指定')
  } else if (!password) {
    errorMsg('密码必须指定')
  }

  return async dispatch => {
    const res = await userLogin(user)
    const result = res.data
    if (result.code === 0) {
      // 授权成功的action
      dispatch(authSuccess(result.data))
    } else {
      // 分发错误提示信息同步action
      dispatch(errorMsg(result.msg))
    }
  }
}
