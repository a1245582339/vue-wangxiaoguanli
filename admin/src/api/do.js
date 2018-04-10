import request from '@/utils/request'
// 添加课程
// export function addlist(data) {
//   return request({
//     url: '/add',
//     method: 'post',
//     data
//   })
// }
// 修改课程
export function updateCourse(data) {
  return request({
    url: '/updateCourse',
    method: 'post',
    data
  })
}
// 修改课程
export function updateCourseClass(data) {
  return request({
    url: '/updateCourseClass',
    method: 'post',
    data
  })
}
// 删除课程
export function delCourse(data) {
  return request({
    url: '/delCourse',
    method: 'post',
    data: { data }
  })
}
// 删除课程类型
export function delCourseClass(data) {
  return request({
    url: '/delCourseClass',
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
