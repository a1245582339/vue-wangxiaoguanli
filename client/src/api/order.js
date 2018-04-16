import request from '@/utils/request'
// 查看当前课程是否被当前用户购买
export function checkOrder(params) {
  return request({
    url: '/checkOrder',
    method: 'get',
    params
  })
}

// 提交订单
export function submitOrder(data) {
  return request({
    url: '/submitOrder',
    method: 'post',
    data
  })
}