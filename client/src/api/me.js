import request from '@/utils/request'
//验证当前密码
export function checkCurrentPassApi(params) {
  return request({
    url: '/checkCurrentPassApi',
    method: 'get',
    params
  })
}

// 更改学生
export function updatePassword(data) {
  return request({
    url: '/updatePassword',
    method: 'post',
    data
  })
}
