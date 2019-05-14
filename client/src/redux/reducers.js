/** 
 * 包含多个 reducer 函数: 根据老的 state 和指定的 action 返回新的 state
 */

// 合并reducer
import {combineReducers} from 'redux'
import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'
import {getRedirectTo} from '../utils'

const initUser = {
  username: '', // 用户
  type: '', // 用户类型 dashen/laoban
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向的路由路径
}

// user状态的reducer
function user (state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: // data是user
      const {type, header} = action.data
      return {
        ...action.data,
        redirectTo: getRedirectTo(type, header)
      }
    case ERROR_MSG: // data是msg
      return {
        ...state,
        msg: action.data
      }
    default:
      return state
  }
}

export default combineReducers({
  user
}) // 向外暴露的状态结构：{user: {}}