<template>
<div class="container">
 <swiper
    autoplay="true"
    indicator-color="#fff"
    indicator-active-color="grey"
    interval="4000"
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
  <v-search></v-search>
  <!-- 推广广告 -->
  <div class="generalize">
    <div class="text">
      <p class="big">想要的团聚</p>
      <p class="small">都在爱彼迎</p>
    </div>
    <img :src="showMain.PicUrl" alt="">
    <div class="btn">
      <button>{{showMain.desc}}</button>
    </div>
  </div>
  <!-- 冬季特惠 -->
  <v-preference :preference="preference" :houseList="houseList" :listHouse="listHouse"></v-preference>
</div>
</template>

<script>
import fly from '@/utils/flyios'
import search from '@/components/search.vue'
import preference from '@/components/preference.vue'
export default {
  data(){
    return {
      advData: [],
      current:null,
      showMain:[],
      preference:[],
      houseList:[],
      listHouse: []
    }
  },
  components: {
    'v-search': search,
    'v-preference':preference
  },
  methods: {
    // getData(){
      
    //   this.$http.get('')
    //   .then(res =>{
    //     // this.advData = res.data.advertise
    //     // this.showMain = res.data.generalize
    //     this.preference = res.data.preference
    //     // console.log(res.data.advertise)
        
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   })
    // },  
    currentHandle(event){      
      this.current = event.mp.detail.current
    },
    getList(){
      wx.showLoading({
        title: '加载中',
      })
      const that = this
      const db = wx.cloud.database({ env: 'bei-chen-gh1kk' })
      // const db = wx.cloud.database()
      const adv = db.collection('advertise')
      const preference = db.collection('preference')
      const generalize = db.collection('generalize')
      const houseInfo = db.collection('houseInfo')
      adv.get().then(res => {
        this.current = 0
        this.advData =  res.data
        // console.log(res.data)
        wx.hideLoading();
      })
      generalize.get().then(res => {
        // console.log(res)
        this.showMain = res.data[0]
      })
      preference.get().then(res => {
        this.preference = res.data
      })
      // houseInfo.get().then(res => {
      //   //  console.log(res)
      // })
      wx.cloud.callFunction({
        name: 'getHouse',
        data:{
          cityId: 1
        }
      }).then(res=>{
        this.houseList = res.result.houseList.data
        this.listHouse = res.result.listHouse.data
        console.log(res.result.listHouse.data)
      })
    }
  },
  onLoad(){
    // this.getData()
    this.getList()
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
.generalize{
  width: 90%;
  height: 325rpx;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  border-radius: 30rpx;
  margin-bottom: 50rpx;
}
.generalize .text{
  width: 100%;
  position: absolute;
  text-align: center;
  padding-top: 25rpx;
}
.generalize .text .big{
  font-size: 50rpx;
  color: white;
  margin-bottom: 10rpx;
  letter-spacing: 5rpx;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.generalize .text .small{
  font-size: 30rpx;
  color: white;
  letter-spacing: 10rpx;
}
.generalize img{
  width: 100%;
  height: 100%;
  border-radius: 30rpx;
}
.generalize .btn{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 40rpx;
}
.generalize .btn button{
  padding: 10rpx 20rpx;
  background-color: #e94e77;
  color: white;
}
</style>