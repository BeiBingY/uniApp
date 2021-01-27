import Request from './request'
import store from '@/store'
import { getToken, removeToken } from '@/utils/token'

const test = new Request()
test.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'http://node.server.com'
  config.header = {
    ...config.header
  }
 
  config.custom = { auth: true }
  return config
})

test.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header
  }
  if (config.custom.auth) {
	  config.header.Authorization = `Bearer ` + getToken()
    // config.header.token = store.state.token
  }
  
  // if (!store.state.token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
  //   cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  // }
 
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
test.validateStatus = (statusCode) => {
  return statusCode === 200
}

test.interceptor.response((response) => { /* 请求之后拦截器 */
	let res = {
		data: response.data,
		statusCode: response.statusCode
	}
	return res
}, (response) => { // 请求错误做点什么

	if(response.statusCode == 401) {
		removeToken()
	}
	let err = {
		data: response.data,
		statusCode: response.statusCode
	}
	return err
})

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
  config.baseUrl = 'https://api.duoluotianshi.work/webapp' /* 根域名不同 */
  config.header = {
    ...config.header
  }
  return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
  return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
  config.header = {
    ...config.header,
    b: 1
  }
  /*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
  return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
  // if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //   return Promise.reject(response)
  // }
  // if (response.config.custom.verification) { // 演示自定义参数的作用
  //   return response.data
  // }
  let res = {
  	data: response.data,
  	statusCode: response.statusCode
  }
  return res
}, (response) => { // 请求错误做点什么
  let err = {
  	data: response.data,
  	statusCode: response.statusCode
  }
  return err
})

export {
	http,
	test
}
