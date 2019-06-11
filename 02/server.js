// import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

const express = require('express')
const app = express()

// //设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/api/goods', function (req, res) {
  res.json({
    title: '正式环境',
    list: [
      { text: '百万年薪架构师', price: 100 },
      { text: 'web全栈架构师', price: 8000 },
      { text: 'Python爬虫', price: 60 }
    ]
  })
})

const server = app.listen(9082, function () {
  console.log('Express app server listening on port %d', server.address().port)
})

// // 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url 分为测试和正式不一致
//   timeout: 5000 // 请求超时时间
// })

// // request拦截器
// // 发出请求带token getToken 从localStorage取
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   if (store.getters.token) {
//     config.headers['KKB-Token'] = getToken() // 让每个请求携带token--['token']为自定义key 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// // respone拦截器
// service.interceptors.response.use(
//   response => {
//   /**
//   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//   */
//     const res = response.data

//     if (res.code !== 0) {
//       Message({
//         message: res.message,
//         type: 'error',
//         duration: 3 * 1000
//       })
//       // 10008:非法的token;  10012:Token 过期了;
//       if (res.code === 10008 || res.code === 10012) {
//         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//           confirmButtonText: '重新登录',
//           cancelButtonText: '取消',
//           type: 'warning'
//         }).then(() => {
//           store.dispatch('FedLogOut').then(() => {
//             location.reload()// 为了重新实例化vue-router对象 避免bug
//           })
//         })
//       }
//       return Promise.reject('error')
//     } else {
//       return response.data
//     }
//   },
//   error => {
//     console.log('err' + error)// for debug
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   })

// export default service
