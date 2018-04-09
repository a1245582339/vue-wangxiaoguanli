import request from '@/utils/request'
// 添加模块
export function addlist(data) {
  return request({
    url: '/add',
    method: 'post',
    data
  })
}
// 修改模块
export function update(data) {
  return request({
    url: '/update',
    method: 'post',
    data
  })
}
// 删除模块
export function dellist(data) {
  return request({
    url: '/del',
    method: 'post',
    data: { data }
  })
}
// 删除订单
export function delorder(data) {
  return request({
    url: '/delorder',
    method: 'post',
    data: { data }
  })
}