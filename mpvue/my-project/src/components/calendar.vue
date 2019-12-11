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
       @click="setStartEnd(item)" :data-target='item'>
        <div class="block-styel"
        :class="{'pass':item < currentDay, 'defalut':item==currentDay,'select':item==temStartDay||item==temEndDay,
        'select':temStartDay < item && item <temEndDay
        }" >
          {{item}}
        </div>
    </div>
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
      "currentDayNum",
      "startDay",
      "endDay",
      "temStartDay",
      'temEndDay'
    ]),
    curStatus(item){
      let that =this
      // console.log(item)
      if(item == this.currentDay){
        return 'select'
      }
      else{
        // console.log(123)
        return 'pass'
      }
    }
  },
  methods: {
    ...mapActions(
      [
        "getCurMon",
        "setStartEnd"
      ]),
    empty() {
      if (this.currentFirstDay > 0) {
        for (let i = 0; i < this.currentFirstDay; i++) {
          this.content.push(" ");
        }
      }
      for (let j = 1; j <= this.currentDayNum; j++) {
        this.content.push(j);
      }
      // console.log(this.content);
    },
    setTarget(e){
      console.log(e)
    }
  },
  created() {
    this.getCurMon(), this.empty();
  },
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
  border: none;
}
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
  align-content: flex-start;
  box-sizing: border-box;
}
.calender-main .each-block .select{
  background-color: #218380;
  border-radius: 50%;
  color:white;
  border:none;
}
.calender-main .each-block .choose{
  background-color: #218380;
  color:white;
}
.calender-main .each-block .defalut{
  border-radius: 50%;
  border: .5px solid lightgray;
  box-sizing: border-box;
}
.calender-main .each-block .pass{
  color: lightgray;
  pointer-events: none !important;
}
.block-styel{
  padding: 20rpx 20rpx;
  box-sizing: border-box;
}
.each-block {
  width: 102rpx;
  height:102rpx;
  max-width:102rpx;
  max-height:102rpx;
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