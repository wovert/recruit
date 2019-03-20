/** 
 * 包含多个 reducer 函数: 根据老的 state 和指定的 action 返回新的 state
 */

// 合并reducer
import {combineReducers} from 'redux'

function xx(state=0, action) {
  return state
}

function yy(state=0, action) {
  return state
}

export default combineReducers({
  xx,
  yy
}) // 向外暴露的状态结构：{xx: 0, yy: 0}