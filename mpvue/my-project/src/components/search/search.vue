<template>
  <div class="search">
    <div class="search-info">
      <div class="city"></div>
      <div>
        <div class="date" @click="chooseDate">
          <span class="start">{{currentMonth}}月{{startDay}}日</span>
          <span class="time">1晚</span>
          <span class="end">{{currentMonth}}月{{endDay}}日</span>
        </div>
        <!-- <template is="date"/> -->
      </div>
      <button>查找房源</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      nowTimes: {
        curDay: 0,
        curMon: 0,
        curY: 0
      }
    };
  },
  methods: {
    chooseDate() {
      console.log(123);
      const url = "../../pages/selectDate/main";
      wx.navigateTo({
        url
      });
    },
    ...mapActions(
      [
        "getCurMon"
      ]),
    setNowTimes() {
      let today = new Date();
      this.nowTimes.curMon = today.getMonth() + 1 
      this.nowTimes.curDay = today.getDate()
      // console.log(today.getMonth())
    }
  },
  computed: {
    ...mapState([
      'currentMonth'
    ]),
    ...mapGetters([
      'currentDay',
      'currentMonth',
      'startDay',
      'endDay'
    ])
  },
  mounted() {
    setInterval(() => {
      this.setNowTimes();
    }, 1000);
    clearInterval()
  },
  created(){
    this.getCurMon()
  }
};
</script>

<style>
.search {
  width: 90%;
  height: 325rpx;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10rpx;
  margin: 0 auto;
  position: relative;
  top: -50rpx;
  z-index: 90;
  background-color: #fff;
}
.search-info {
  padding: 30rpx 60rpx;
}
.search-info .city,
.search-info .date {
  width: 100%;
  height: 70rpx;
  position: relative;
  margin-bottom: 20rpx;
}
.search-info .date {
  color: #218380;
  display: flex;
  text-align: center;
  font-weight: bolder;
}
.search-info .date .start {
  flex: 1;
}
.search-info .date .time {
  flex: 0 0 240rpx;
  color: black;
  font-size: 24rpx;
  position: relative;
}
.search-info .date .time::before,
.search-info .date .time::after {
  content: "";
  position: absolute;
  display: block;
  width: 40rpx;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  top: 28%;
  height: 1px;
}
.search-info .date .time::before {
  left: 30%;
}
.search-info .date .time::after {
  right: 30%;
}

.search-info .date .end {
  flex: 1;
}

.search-info .city::after,
.search-info .date::after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  content: " ";
}
button {
  width: 100%;
  color: white;
  background-color: #218380;
}
</style>