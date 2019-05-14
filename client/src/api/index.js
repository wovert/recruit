import {post} from './http'

// 注册接口
export const userRegister = (user) => post('/register', user)

// 登录接口
export const userLogin = ({username, password}) => post('/login', {username, password})

// 更新用户接口
export const userUpdate = (user) => post('/update', user)
