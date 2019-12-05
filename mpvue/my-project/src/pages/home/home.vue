<template>
<div class="container">
 <swiper
    autoplay="true"
    indicator-color="#fff"
    indicator-active-color="grey"
    interval="5000"
    circular="true"
    duration="500"
    @change="currentHandle($event)">
    <block v-for="(item,index) in advData" :key="index">
      <swiper-item>
        <img :src="item.PicUrl" alt="" width="100%">
        <div class="title">
          <div class="extra">{{item.extra}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </swiper-item>
    </block>
  </swiper>
  <div class="swp-dot">
    <div :class="current === index?'dot m-r active': 'dot m-r '" v-for="(item,index) in advData" :key="index"></div>
  </div>
</div>
</template>

<script>
import fly from '@/utils/flyios'
import swiper from '@/components/swiper/swiper.vue'
export default {
  data(){
    return {
      advData: [],
      // current:0
    }
  },
  compoents: {
    'v-swiper': swiper
  },
  methods: {
    getData(){
      fly.get('')
      .then(res =>{
        this.advData = res.data.advertise
        console.log(this.advData)
      })
      .catch(e => {
        console.log(e);
      })
    },
    currentHandle(event){      
      console.log(123)
    },
  },
  created(){
    this.getData()
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.container{
  height: 100%;
}
swiper{
  height: 375.5rpx;
  position: relative;
}
swiper-item image{
  width: 100%;
  height: 100%;
}
.title{
  position: absolute;
  top: 179rpx;
  padding-left: 60rpx;
  letter-spacing: 5rpx;
}
.extra{
  color: white;
  font-size: 20rpx;
  margin-bottom: 10rpx;
  letter-spacing: 5rpx;
}
.desc{
  color: white;
}
.swp-dot{
  position: absolute;
  top: 280rpx;
  padding-left: 60rpx;
  display: flex;
  justify-content: center;
  flex: 1;
}
.swp-dot .dot{
  width: 10rpx;
  height: 10rpx;
  background-color: grey;
  border-radius: 5rpx;
  transition: width 0.2s linear;
}
.swp-dot .m-r{
  margin-right: 10rpx;
}

.swp-dot .active{
  background-color: white;
  width: 36rpx;
  transition: background-color 3s linear;
}
</style>