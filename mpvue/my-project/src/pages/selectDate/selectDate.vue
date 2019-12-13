<template>
  <div class="selectDate">
    <div class="header">
      <div class="begin">
        <span>入住日期</span>
        <span>退房日期</span>
      </div>
      <div class="date">
        <span class="start">{{currentMonth}}月{{startDay}}日</span>
        <span class="time">1晚</span>
        <span class="end">{{currentMonth}}月{{endDay}}日</span>
      </div>
    </div>
    <div class="calendar">
      <div class="weekday">
        <ul>
          <li v-for="(weekday,day) in weekdays" :key="day" class="daylist">{{weekday}}</li>
        </ul>
      </div>
      <v-calendar></v-calendar>
    </div>
    <div class="handle">
      <span class="clear" @click="clearChoose">清空日期</span>
      <div class="display"></div>
      <button class="save" @click="saveChoose">保存</button>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search.vue";
import calendar from '@/components/calendar.vue'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  mounted() {
    wx.setNavigationBarTitle({
      title: "选择日期"
    });
  },
  components: {
    "v-search": search,
    "v-calendar":calendar
  },
  
  data() {
    return {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"]
    }
  },
  computed: {
    ...mapGetters([
      'currentDay',
      'currentMonth',
      'startDay',
      'endDay'
    ])
  },
  methods: {
    ...mapActions([
      'getCurMon',
      'clearChoose'
    ]),
    saveChoose(){
      console.log(123);
      const url = "../home/main.js";
      wx.navigateBack({
        url
      })
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.selectDate{
  height: 100vh;
  width: 100%;
}
.header {
  padding: 30rpx 50rpx;
}
.header .begin {
  /* padding: 0rpx 30rpx; */
  display: flex;
  font-size: 26rpx;
}
.header .date {
  color: #218380;
  display: flex;
  text-align: center;
  font-weight: bolder;
  /* padding: 0rpx 30rpx; */
}
.header .date .start {
  flex: 1;
  text-align: left;
}
.header .date .time {
  flex: 0 0 300rpx;
  color: black;
  font-size: 24rpx;
  position: relative;
}
.header .date .time::before {
  left: 30%;
}
.header .date .time::after {
  right: 30%;
}
.header .date .time::before,
.header .date .time::after {
  content: "";
  position: absolute;
  display: block;
  /* width: 40rpx; */
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  top: 28%;
  height: 1px;
}

.header .date .end {
  flex: 1;
  text-align: right;
}
.begin span {
  flex: 1;
}
.begin span:nth-child(2) {
  text-align: right;
}
.calendar {
  padding: 35rpx 24rpx 35rpx;
}
/* .calendar .weekday{
  padding: 0 300rpx;
} */
.weekday ul {
  display: flex;
  text-align: center;
}
.weekday ul .daylist {
  flex: 1;
  font-size: 25rpx;
}
.weekday::after {
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  content: " ";
}
.handle{
  /* position: fixed; */
  /* border-top: 1px solid rgba(7, 17, 27, 0.1);  */
  width: 100%;
  /* height:200rpx; */
  padding: 26rpx 40rpx;
  background-color: white;
  position: absolute;
  bottom: 0;
  justify-items: center;
  box-shadow: 0 1px 6px rgba(7, 17, 27, 0.1);
  display: flex;
  /* overflow: hidden; */
  box-sizing: border-box;
  z-index: 999;
}
.handle .clear{
  flex: 1;
  text-align: left;
  line-height: 55.6px;
}
.handle .display{
  flex: 0 0 250rpx;
}
.handle .save{
  flex: 1;
  padding: 10rpx 10rpx;
  background-color: #218380;
  color: white;
}
</style>