import * as types from '../types'
const state = {
  //年月日
  currentDay: null,
  currentMonth:null,
  currentYear: null,
  //一个月的天数
  currentDayNum:null,
  //改月第一天是周几
  currentFirstDay:null
}

const mutations = {
  [types.CUR_Month](state){
    var date = new Date()
    //当前月份
    state.currentDay = date.getDate()
    state.currentMonth = date.getMonth() + 1
    state.currentYear = date.getFullYear()
    //当前月份的天数
    state.currentDayNum = new Date(state.currentYear, state.currentMonth, 0).getDate();
    var nowDate = state.currentYear +'-'+ state.currentMonth + '-'+ 1 
    //获取第一天的周几
    state.currentFirstDay = new Date(nowDate).getDay();
  }
}

const actions = {
  getCurMon({commit}){
    commit(types.CUR_Month)
  }
}

const getters = {
  currentDay: state => state.currentDay,
  currentMonth: state => state.currentMonth,
  currentYear: state => state.currentYear,
  currentDayNum: state => state.currentDayNum,
  currentFirstDay: state =>  state.currentFirstDay
}


export default {
  state,
  mutations,
  actions,
  getters
}
