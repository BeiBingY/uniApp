
// 入口文件

// 主要作用是初始化vue实例  定义全局组件  使用需要的插件vuex



import Vue from 'vue'
import App from './App'
import store from './store'
import { http, test } from "@/js_sdk/luch-request/index.js"

Vue.config.productionTip = false
App.mpType = 'app'


Vue.prototype.$http = http

// 本地接口
Vue.prototype.$test = test

Vue.prototype.$store = store


const app = new Vue({
    ...App
})
app.$mount()
