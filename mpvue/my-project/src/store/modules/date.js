import * as types from '../types'
const state = {
  //年月日
  currentDay: null,
  currentMonth:null,
  currentYear: null,
  //一个月的天数
  currentDayNum:null,
  //改月第一天是周几
  currentFirstDay:null,
  startDay:null,
  endDay:null,
  count:2,
  //暂存时间 用来过度时间选择
  temStartDay:null,
  temEndDay:null
}

const mutations = {
  [types.CUR_Month](state){
    var date = new Date()
    //当前月份
    state.currentDay = date.getDate()
    //默认开始为当前日期
    state.startDay = date.getDate()
    //默认结束为第二天
    state.endDay = date.getDate() + 1
    state.temStartDay = date.getDate()
    //默认结束为第二天
    state.temEndDay= date.getDate() + 1
    state.currentMonth = date.getMonth() + 1
    state.currentYear = date.getFullYear()
    //当前月份的天数
    state.currentDayNum = new Date(state.currentYear, state.currentMonth, 0).getDate();
    var nowDate = state.currentYear +'-'+ state.currentMonth + '-'+ 1 
    //获取第一天的周几
    state.currentFirstDay = new Date(nowDate).getDay();
  },
  [types.SET_START_END](state,day){
    if(day<state.currentDay){
      return false
    }
    if(state.count != 1){
      state.temStartDay = day
      // state.startDay = day
      state.temEndDay = ''
      state.count = 1
      // console.log(state.count)
    }
    else{
      if(day<state.startDay){
        state.temStartDay = day
        // state.startDay = day
        state.count = 1
      }
      else{
        state.temEndDay = day
        state.startDay = state.temStartDay
        state.endDay =  state.temEndDay
        state.count = 2
      }
      
      console.log(state.count)
    }
    
    // state.endDay = start+1
  },
  [types.CLEAR_CHOOSE](state){
    state.startDay = date.getDate()

  }
}

const actions = {
  getCurMon({commit}){
    commit(types.CUR_Month)
  },
  setStartEnd({commit},day){
    commit(types.SET_START_END,day)
  },
  clearChoose({commit}){
    commit(types.CLEAR_CHOOSE)
  }
}

const getters = {
  currentDay: state => state.currentDay,
  currentMonth: state => state.currentMonth,
  currentYear: state => state.currentYear,
  currentDayNum: state => state.currentDayNum,
  currentFirstDay: state =>  state.currentFirstDay,
  startDay: state => state.startDay,
  endDay: state => state.endDay,
  temStartDay: state => state.temStartDay,
  temEndDay: state => state.temEndDay,
}


export default {
  state,
  mutations,
  actions,
  getters
}
