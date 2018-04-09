import request from '@/utils/request'
// 获取基础模块
export function getList(params) {
  return request({
    url: '/basedata',
    // url: '/table/list',
    method: 'get',
    params
  })
}
// 获取可选模块
export function getCList(params) {
  return request({
    url: '/choosedata',
    method: 'get',
    params
  })
}
// 获取课程列表
export function getCourseList(params) {
  return request({
    url: '/courseList',
    method: 'get',
    params
  })
}

// 获取课程类型列表
export function getCourseClass(params) {
  return request({
    url: '/courseClassList',
    method: 'get',
    params
  })
}

// // 获取独立模块
export function getAll(params) {
  return request({
    url: '/alldata',
    method: 'get',
    params
  })
}
// 获取订单
export function getOrder(params) {
  return request({
    url: '/order',
    method: 'get',
    params
  })
}
// 获取订单详细信息
export function orderPrint(data) {
  return request({
    url: '/orderPrint',
    method: 'post',
    data: { data }
  })
}

