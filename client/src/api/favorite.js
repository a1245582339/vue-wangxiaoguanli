import request from '@/utils/request'
// 获取课程收藏夹
export function getCourseFavorite(params) {
  return request({
    url: '/courseFavorite',
    method: 'get',
    params
  })
}
// 获取资讯收藏夹
export function getNewsFavorite(params) {
  return request({
    url: '/newsFavorite',
    method: 'get',
    params
  })
}
// 根据id获取课程收藏夹
export function getCourseFavoriteById(params) {
  return request({
    url: '/getCourseFavoriteById',
    method: 'get',
    params
  })
}
// 根据id获取资讯收藏夹
export function getNewsFavoriteById(params) {
  return request({
    url: '/getNewsFavoriteById',
    method: 'get',
    params
  })
}
// 删除课程收藏夹记录
export function delCourseFav(data) {
  return request({
    url: '/delCourseFav',
    method: 'post',
    data
  })
}
// 删除资讯收藏夹记录
export function delNewsFav(data) {
  return request({
    url: '/delNewsFav',
    method: 'post',
    data
  })
}

