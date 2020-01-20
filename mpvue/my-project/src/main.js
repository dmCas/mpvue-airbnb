import Vue from 'vue'
import App from './App'
import store from './store/index'


Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
wx.cloud.init({
  env: 'bei-chen-gh1kk'
})

const app = new Vue(App)
app.$mount()
