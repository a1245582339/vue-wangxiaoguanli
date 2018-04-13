import request from '@/utils/request'
// 获取banner
export function getIndexCourse(params) {
  return request({
    url: '/getIndexCourse',
    method: 'get',
    params
  })
}
// 获取课程列表
export function getCourse(params) {
  return request({
    url: '/courseList',
    method: 'get',
    params
  })
}
