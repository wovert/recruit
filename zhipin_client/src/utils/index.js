/**
 * 
 * @param {*} type 类型
 * @param {*} header 头像
 * 
 */
export function getRedirectTo (type, header) {
  let path = ''
  // type
  if (type === 'laoban') {
    path = '/laoban'
  } else {
    path = '/dashen'
  }

  // header
  if (!header) { // 没有值，返回信息完善界面的path
    path += 'info'
  }

  return path
}