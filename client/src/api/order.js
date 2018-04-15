import request from '@/utils/request'
// 获取banner
export function checkOrder(params) {
  return request({
    url: '/checkOrder',
    method: 'get',
    params
  })
}