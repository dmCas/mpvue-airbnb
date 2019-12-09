import Vue from 'vue'
import Vuex from 'vuex'
import date from './modules/date'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    date
  }
})