<template>
  <div class="showMain">
    <swiper
    autoplay="true"
    interval="4000"
    circular="true"
    duration="500">
      <block v-for="(pic,id) in imgUrl" :key="id">
        <swiper-item>
          <img :src="pic" alt="" width="100%">
        </swiper-item>
      </block>
    </swiper>
    <div class="main">
      <div class="chooseDate">
        <div class="mark"><img src="../../../static/images/shoucang.png" alt=""></div>
        <div class="share"><img src="../../../static/images/share.png" alt=""></div>
        <span>入住-退房</span>
        <span @click="routerSelect" style="color:#218380;margin-left:30rpx;">添加日期</span>
      </div>
      <div class="detail">
        <h3>{{Details.type}}</h3>
        <p style="font-weight:bloder;">{{Details.housePositon}}</p>
      </div>
      <div class="desc">
        <div class="block" v-for="(desc,index) in Details.desc" :key="index" :class="{'on':desc=='超赞房东'}">{{desc}}</div>
      </div>
      <div class="capacity">
        <span>{{Details.type}}</span>
        <span>·最多可住{{Details.capacity}}人</span>
      </div>
      <v-discount></v-discount>
      <div class="introduce">
        <p>{{Details.introduce}}</p>
        <span class="more" @click="showPopup">查看更多房源介绍</span>
      </div>
      <v-service :service="service"></v-service>
      <v-facility :facility="facility"></v-facility>
      <v-ratings :comments="comments"></v-ratings>
      <v-location></v-location>
    </div>
  </div>
</template>

<script>
import fly from '@/utils/flyios'
import discount from '@/components/discount.vue'
import service from '@/components/service.vue'
import facility from '@/components/facility.vue'
import ratings from '@/components/ratings.vue'
import location from '@/components/location.vue'
export default {
  data(){
    return{
      Details:[],
      imgUrl:[],
      show:false,
      service:[],
      facility:[],
      comments:[]
    }
  },
  components:{
    'v-discount':discount,
    'v-service':service,
    'v-facility':facility,
    'v-ratings':ratings,
    'v-location':location
  },
  methods: {
    getData(){
      fly.get('')
      .then(res =>{
        // this.Details = res.data.preference[0].house[0],
        // this.imgUrl = this.Details.swiperPic,
        // this.service = this.Details.service
        // this.facility = this.Details.facility
        // this.comments = this.Details.ratings
        console.log(':',res)
      })
    },
    routerSelect(){
      const url = "../../pages/selectDate/main";
      wx.navigateTo({
        url
      });
    },
    initData(){
      const that = this
      const db = wx.cloud.database({ env: 'bei-chen-gh1kk' })
      const house = db.collection('house')
      house.get().then( res => {
        this.Details = res.data[0]
        this.imgUrl = this.Details.swiperPic,
        this.service = this.Details.service
        this.facility = this.Details.facility
        this.comments = this.Details.ratings[0]
        console.log('awfjjfjhsdj')
        console.log(this.comments)
      })
    },
    showPopup() {
      this.show = true;
    }
  },
  created(){
    this.getData()
    this.initData()
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
body{
  height: 100vh;
  width: 100%;
}
swiper{
  width: 100%;
  height: 375.5rpx;
  position: relative;
}

swiper-item img{
  width: 100%;
  height: 100%;
}
.main{
  padding: 20rpx 40rpx;
}
.main .chooseDate{
  width: 100%;
  height: 60rpx;
  margin: 0 auto;
  line-height: 60rpx;
  position: relative;
}
.main .chooseDate::after{
  content: "";
  position: absolute;
  display: block;
  bottom: 0rpx;
  width:100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
.main .chooseDate .mark{
  position: absolute;
  top: -65rpx;
  right: 140rpx;
  border-radius: 50%;
  width: 100rpx;
  background-color: #fff;
  height: 100rpx;
  box-shadow: 0 1px 5px rgba(7, 17, 27, 0.1);
}
.main .chooseDate .share{
  position: absolute;
  top: -65rpx;
  right:0rpx;
  border-radius: 50%;
  width: 100rpx;
  background-color: #fff;
  height: 100rpx;
  box-shadow: 0 1px 5px rgba(7, 17, 27, 0.1);
}

.main .chooseDate .mark img,
.main .chooseDate .share img{
  width: 100%;
  height: 100%;
  transform: scale(0.5);
}
.main .detail {
  margin: 20rpx 0;
}
h3{
  color: darkblue;
  font-size: 22rpx;
  padding: 15rpx 0;
}
.desc{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-weight: bold;
}
.desc .block{
  padding: 10rpx 15rpx;
  border-radius:32rpx;
  margin-right: 10rpx;
  margin-bottom: 10rpx;
  background-color: #f4f7f7;
}
.desc .on{
  background-color: #cff0da;
  color: #4f953b;
}
.capacity{
  padding: 30rpx 0;
}
.introduce{
  padding: 0 0 30rpx 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}

.introduce p{
  text-overflow :ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
  overflow : hidden;
  line-clamp: 2;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  font-size: 28rpx;
  margin-bottom: 10rpx;
}
.introduce .more{
  color: #218380;
}
</style>