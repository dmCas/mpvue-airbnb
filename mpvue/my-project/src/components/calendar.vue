<template>
  <div  class="calender">
    <div v-for="(monthItem,mNm) in content" :key="mNm">
      <!-- 月份展示 -->
      <div class="calender-header">
        <span class="year" v-if="nextyear[mNm].year>currentYear">{{nextyear[mNm].year}}年</span>
        <span class="month">{{nextyear[mNm].month}}月</span>
      </div>
      <!-- 日期展示 -->
      <div class="calender-main">
        <div
          class="each-block"
          v-for="(item,index) in content[mNm]"
          :key="index"
          @click="setStartEnd(item,nextyear[1].month)"
        >
          <div
            class="block-styel"
            :class="{
            'pass':item < currentDay && nextyear[mNm].month === currentMonth , 
            'defalut':item==currentDay && nextyear[mNm].month === currentMonth, 
            'select':(item==temStartDay ||item==temEndDay) && nextyear[mNm].month === currentMonth,
            'select':temStartDay < item && item <temEndDay
            }"
          >{{item}}</div>
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
      // content: [[], [1,2,3,4,5,6,7,8]]
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
      "temEndDay",
      "content",
      "nextyear",
      "currentYear"
    ]),
    curStatus(item) {
      let that = this;
      // console.log(item)
      if (item == this.currentDay) {
        return "select";
      } else {
        // console.log(123)
        return "pass";
      }
    }
  },
  methods: {
    ...mapActions(["getCurMon", "setStartEnd", "nextYear","fullContent"]),
    // empty() {
    //   if (this.currentFirstDay > 0) {
    //     for (let i = 0; i < this.currentFirstDay; i++) {
    //       this.content[0].push(" ");
    //     }
    //   }
    //   for (let j = 1; j <= this.currentDayNum; j++) {
    //     this.content[0].push(j);
    //   }
    //   // console.log(this.content);
    // },
    setTarget(e) {
      console.log(e);
    }
  },
  created() {
    this.getCurMon(),  this.nextYear(), this.fullContent();
    console.log(this.nextyear[0].year)
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: none;
}
.calender{
  height: 740rpx;
  overflow: scroll;
  box-sizing: border-box;
  width: 100%;
}
.calender-header {
  padding: 40rpx 30rpx;
}
.year,.month {
  font-size: 40rpx;
}
.calender-main {
  width: 100%;
  max-width:100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: flex-start;
  box-sizing: border-box;

}
.calender-main .each-block .select {
  background-color: #218380;
  border-radius: 50%;
  color: white;
  border: none;
}
.calender-main .each-block .choose {
  background-color: #218380;
  color: white;
}
.calender-main .each-block .defalut {
  border-radius: 50%;
  border: 0.5px solid lightgray;
  box-sizing: border-box;
}
.calender-main .each-block .pass {
  color: lightgray;
  pointer-events: none !important;
}
.block-styel {
  padding: 20rpx 20rpx;
  box-sizing: border-box;
}
.each-block {
  width: 101rpx;
  height: 101rpx;
  max-width: 101rpx;
  max-height: 101rpx;
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