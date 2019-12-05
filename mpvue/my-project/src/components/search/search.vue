<template>
  <div class="search">
    <div class="search-info">
      <div class="city"></div>
      <navigator class="" target="" url="../../pages/selectDate/selectDate.vue" hover-class="navigator-hover" open-type="navigate">
        <view class="date">
          <span class="start">12月4日</span>
          <span class="time">1晚</span>
          <span class="end">12月5日</span>
        </view>
          <!-- <template is="date"/> -->
      </navigator>
      <button>查找房源</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search{
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
.search-info{
  padding:30rpx 60rpx;
}
.search-info .city,
.search-info .date{
  width: 100%;
  height: 70rpx;
  position: relative;
  margin-bottom: 20rpx;

}
.search-info .date{
  color:#218380;
  display: flex;
  text-align: center;
  font-weight: bolder;
}
.search-info .date .start{
  flex: 1;
}
.search-info .date .time{
  flex: 0 0 300rpx;
  color: black;
  font-size: 24rpx;
  position: relative;
}
.search-info .date .time::before,
.search-info .date .time::after{
  content: '';
  position: absolute;
  display: block;
  width: 40rpx;
  border-top: 1px solid rgba(7,17,27,.1);
  top: 28%;
  height: 1px;
}
.search-info .date .time::before{
  left:30%;
}
.search-info .date .time::after{
  right:30%;
}

.search-info .date .end{
  flex: 1;
}

.search-info .city::after,
.search-info .date::after{
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(7,17,27,.1);
  content: " ";
}
button{
  width: 100%;
  color:white;
  background-color: #218380;
}

</style>