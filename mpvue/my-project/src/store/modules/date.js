import * as types from '../types'
const state = {
  //年月日
  currentDay: null,
  currentMonth: null,
  currentYear: null,
  //一个月的天数
  currentDayNum: null,
  //改月第一天是周几
  currentFirstDay: null,
  startDay: null,
  endDay: null,
  //设置当前选中的次数，默认是两次为默认值
  count: 2,
  //暂存时间 用来过度时间选择
  temStartDay: null,
  temEndDay: null,
  //存放一年的年月
  nextYear : [],
  eachMonthDays : [],
  //每个月的第一天是星期几
  eachMonthFirstDay : [],
  content : []
}

const mutations = {
  [types.CUR_Month](state) {
    var date = new Date()
    //当前月份
    state.currentDay = date.getDate()
    //默认开始为当前日期
    state.startDay = date.getDate()
    //默认结束为第二天
    state.endDay = date.getDate() + 1
    state.temStartDay = date.getDate()
    //默认结束为第二天
    state.temEndDay = date.getDate() + 1
    state.currentMonth = date.getMonth() + 1
    state.currentYear = date.getFullYear()
    //当前月份的天数
    state.currentDayNum = new Date(state.currentYear, state.currentMonth, 0).getDate();
    //获取第一天的周几
    var nowDate = state.currentYear + '-' + state.currentMonth + '-' + 1
    state.currentFirstDay = new Date(nowDate).getDay();
  },
  [types.NEXT_YEAR](state) {
    let showYear = state.currentYear
    let showMonth = state.currentMonth
    for(let i = 0; i < 12; i++){
      let obj = {
        year: showYear,
        month:showMonth
      }
      showMonth++
      if(showMonth > 12){
        showMonth = 1
        showYear = showYear+1
      }
      var monthDays = new Date(obj.year, obj.month, 0).getDate();
      var firstDay = new Date(obj.year + '-' + obj.month + '-' + 1).getDay();
      state.eachMonthDays.push(monthDays) //天数
      state.eachMonthFirstDay.push(firstDay) //第一天是周几
      state.nextYear.push(obj)
    }
  },
  [types.FULL_CONTENT](state){
    for(let n = 0; n<state.nextYear.length;n++){
      let wrapper = []
      if (state.eachMonthFirstDay[n] > 0) {
        for (let i = 0; i < state.eachMonthFirstDay[n]; i++) {
          wrapper.push(" ");
        }
      }
      for (let j = 1; j <= state.eachMonthDays[n]; j++) {
        wrapper.push(j);
      }
      state.content.push(wrapper)
    }
    console.log(state.content)
  },
  [types.SET_START_END](state, day, month) {
    console.log(day)
    console.log(month)
    if (day < state.currentDay) {
      return false
    }
    if (state.count != 1) {
      state.temStartDay = day
      // state.startDay = day
      state.temEndDay = ''
      state.count = 1
    }
    else {
      //防止出现入住日期大于退房日期的情况
      if (day < state.temStartDay) {
        state.temStartDay = day
        // state.startDay = day
        state.count = 1
      }
      else {
        state.temEndDay = day
        state.startDay = state.temStartDay
        state.endDay = state.temEndDay
        state.count = 2
      }

      // console.log(state.count)
    }

    // state.endDay = start+1
  },
  [types.CLEAR_CHOOSE](state) {
    state.startDay = date.getDate()

  }
}

const actions = {
  getCurMon({ commit }) {
    commit(types.CUR_Month)
  },
  setStartEnd({ commit }, day) {
    commit(types.SET_START_END, day)
  },
  clearChoose({ commit }) {
    commit(types.CLEAR_CHOOSE)
  },
  nextYear({commit}){
    commit(types.NEXT_YEAR)
  },
  fullContent({commit}){
    commit(types.FULL_CONTENT)
  }
}

const getters = {
  currentDay: state => state.currentDay,
  currentMonth: state => state.currentMonth,
  currentYear: state => state.currentYear,
  currentDayNum: state => state.currentDayNum,
  currentFirstDay: state => state.currentFirstDay,
  startDay: state => state.startDay,
  endDay: state => state.endDay,
  temStartDay: state => state.temStartDay,
  temEndDay: state => state.temEndDay,
  nextyear : state => state.nextYear,
  eachMonthDays : state => state.eachMonthDays,
  //每个月的第一天是星期几
  eachMonthFirstDay : state => state.eachMonthFirstDay,
  content:state => state.content,
}


export default {
  state,
  mutations,
  actions,
  getters
}
