import axios from 'axios'

function getUrl (data, url) {
  let dataStr = ''
  Object.keys(data).forEach( key => {
    dataStr += key + '=' + data[key] + '&'
  })
  if (dataStr !== '') {
    dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
    url = url + '?' + dataStr
  }
  return url
}

export default function ajax (url = '', data = {}, type = 'GET') {
  if (type === 'GET') {
    return get(url, data)
  } else {
    return post(url, data)
  }
}

function get (url = '', data = {}) {
  return axios.get(getUrl(data, url))
}

function post (url = '', data = {}) {
  return axios.post(url, data)
}

exports.post = post
exports.get = get