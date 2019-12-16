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
          @click="TS(item,nextyear[mNm].month,nextyear[mNm].year)"
        >
          <div
            :class="{
            'pass':item < currentDay && nextyear[mNm].month === currentMonth , 
            'defalut':item==currentDay && nextyear[mNm].month === currentMonth, 
            'select':((item==temStartDay && nextyear[mNm].year == temStartYear&& nextyear[mNm].month==temStartMonth )
            ||(item==temEndDay && nextyear[mNm].year == temEndYear&& nextyear[mNm].month==temEndMonth )),
            'select':((temStartYear*10000)+(temStartMonth*100)+(temStartDay)
            <=(nextyear[mNm].year*10000) +(nextyear[mNm].month*100) +item
            && (nextyear[mNm].year*10000) +(nextyear[mNm].month*100) +item
            <=(temEndYear*10000)+(temEndMonth*100)+(temEndDay)) && item != ' '
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
      "temStartMonth",
      "temStartYear",
      "temEndDay",
      "temEndMonth",
      "temEndYear",
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
    },
    TS(day,month,year){
      this.setStartEnd({"day":day,"month":month,"year":year})
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
/* .block-style {
  padding: 20rpx 20rpx;
  box-sizing: border-box;
} */
.calender-main .each-block .select {
  height: 80rpx;
  width: 80rpx;
  line-height: 80rpx;
  background-color: #218380;
  border-radius: 50%;
  color: white;
  border: none;
}
.calender-main .each-block .choose {
  height: 80rpx;
  width: 80rpx;
  line-height: 80rpx;
  background-color: #218380;
  color: white;
}
.calender-main .each-block  .defalut {
  height: 80rpx;
  line-height: 80rpx;
  width: 80rpx;
  border-radius: 50%;
  border: 0.5px solid lightgray;
  box-sizing: border-box;
}
.calender-main .each-block  .pass {
  height: 80rpx;
  line-height: 80rpx;
  width: 80rpx;
  color: lightgray;
}

</style>