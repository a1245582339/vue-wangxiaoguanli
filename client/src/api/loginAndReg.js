import request from '@/utils/request'
// 查询注册用户名是否存在
export function checkNameExist(params) {
  return request({
    url: '/checkNameExist',
    method: 'get',
    params
  })
}
// 注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 根据token拉取用户信息
export function getInfo(params) {
  return request({
    url: '/getInfo',
    method: 'get',
    params
  })
}