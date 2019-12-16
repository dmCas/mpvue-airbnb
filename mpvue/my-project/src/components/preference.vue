<template>
  <div class="preference">
    <h1>冬季特惠房源</h1>
    <h2 @click="a">特惠房源低至7折</h2>
    <ul>
      <li v-for="(item,index) in preference" :key="index" :class="{'on':item.cityId == select}" @click="change(item.cityId)">{{item.city}}</li>
    </ul>
    <div v-for="(city,cityId) in preference" :key="cityId" class="showHouse">
      <div class="house" v-for="(house,houseid) in city" :key="houseid">1</div>
    </div>

  </div>
</template>

<script>
export default {
  props:['preference'],
  data(){
    return {
      select:1
    }
  },
  methods:{
    change(item){
      this.select = item
    }
  }
}
</script>

<style>
.preference{
  width: 90%;
  padding: 20rpx 0;
  margin: 0 auto;
}
h1{
  font-size: 50rpx;
  font-weight:bolder;
}
ul{
  display: flex;
  padding: 40rpx 0;
  text-align: center;
}
ul li{
  width: 160rpx;
  height: 100rpx;
  line-height: 100rpx;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin-right: 30rpx;
  margin-bottom: 30rpx;
}
.on{
  background-color: #218380;
  color: white;
}
.showHouse{
  display: flex;
}
</style>