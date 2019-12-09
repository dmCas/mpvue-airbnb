<template>
  <div>
    <!-- 月份展示 -->
    <div class="calender-header">
      <span class="year" v-if="a"></span>
      <span class="month">{{currentMonth}}月</span>
    </div>
    <!-- 日期展示 -->
    <div class="calender-main">
      <div class="each-block" v-for="(item,index) in content" :key="index" 
      :class="item < currentDay?'pass':''"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      content: []
    };
  },
  computed: {
    ...mapGetters([
      "currentDay",
      "currentMonth",
      "currentFirstDay",
      "currentDayNum"
    ]),
    curStatus(item){
      let that =this
      console.log(item)
      if(item == this.currentDay){
        return 'select'
      }
      else{
        console.log(123)
        return 'pass'
      }
    }
  },
  methods: {
    ...mapActions(["getCurMon"]),
    empty() {
      if (this.currentFirstDay > 0) {
        for (let i = 0; i < this.currentFirstDay; i++) {
          this.content.push(" ");
        }
      }
      for (let j = 1; j <= this.currentDayNum; j++) {
        this.content.push(j);
      }
      console.log(this.content);
    }
  },
  created() {
    this.getCurMon(), this.empty();
  }
};
</script>

<style>
.calender-header {
  padding: 40rpx 30rpx;
}
.month {
  font-size: 40rpx;
}
.calender-main {
  width: 750rpx;
  max-width: 750rpx;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
.calender-main .select{
  background-color: #218380;
  border-radius: 50%;
  color:white;
}
.calender-main .pass{
  color: lightgray;
}
.each-block {
  width: 100rpx;
  height:100rpx;
  max-width:100rpx;
  max-height:100rpx;
  margin-bottom: 20rpx;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: bolder;
  background-color: #fff;
  flex-shrink: 0;
  box-shadow: 0;
  position: relative;
}
</style>