import Vue from 'vue'
var Fly = require('flyio/dist/npm/wx.js')
var fly = new Fly();

fly.interceptors.request.use((config,promise)=>{
  config.headers["X-Tag"]="flyio";
  return config;
})

//配置请求基地址
fly.config.baseURL="http://localhost:3000/indexPage"
Vue.prototype.$http=fly
export default fly