import axios from 'axios'


// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// 获取基础模块order
export function getList(params) {
    return service({
      url: '/alldata',
      method: 'get',
      params
    })
}

// 提交订单
export function addOrder(data) {
    return service({
      url: '/addOrder',
      method: 'post',
      data
    })
}

