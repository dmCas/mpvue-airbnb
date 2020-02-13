<template>
  <div class="preference">
    <h1>冬季特惠房源</h1>
    <h2 @click="a">特惠房源低至7折</h2>
    <scroll-view scroll-x="true" class="flexBox">
      <ul>
        <li v-for="(item,index) in preference" :key="index" :class="{'on':item.cityId == select}" @click="change(item.cityId)">{{item.city}}</li>
      </ul>
    </scroll-view>
    <div v-for="(city,cityid) in preference" :key="cityid" class="showHouse">
      <div v-if="city.cityId == select" class="cho">
        <div class="house" v-for="(house,houseid) in houseList" :key="houseid" v-show="houseid<defalut" @click="router(house.houseId,city.city)">
          <div class="pic"><img :src="house.showPic" alt=""></div>
          <div class="info">
            <p style="font-size:20rpx;">{{house.type}}</p>
            <p style="font-size:22rpx;" class="position">{{house.housePosition}}</p>
            <span style="font-size:22rpx;font-weight:bolder">{{house.NewPrice}}</span>
            <span style="font-size:20rpx;text-decoration:line-through;">{{house.OldPrice}}</span>
            <span style="font-size:20rpx;"> 每晚</span>
          </div>
        </div>
        <div class="more" @click="showMore(houseList.length)" v-show="ifMore"><button>显示更多{{city.city}}的房源</button></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props:['preference'],
  data(){
    return {
      select:1,
      ifMore:true,
      defalut:4,
      houseList: []
    }
  },
  methods:{
    change(item){
      this.select = item
      this.ifMore = true
      // wx.cloud.callFunction({
      //   name: 'getHouse',
      //   data:{
      //     cityId:this.select
      //   }
      // }).then(res=>{
      //   this.houseList = res.result.data
      //   console.log(res.result.data)
      // })
    },
    showMore(len){
      this.defalut = len,
      this.ifMore = false
    },
    router(id,city){
      if(id==1 && city== "苏州"){
      const url = "../../pages/houseMain/main";
      wx.navigateTo({
        url
      });
      }
    },
    getHouseList(){
      wx.cloud.callFunction({
        name: 'getHouse',
        data:{
          cityId:this.select
        }
      }).then(res=>{
        this.houseList = res.result.data
        console.log(res.result.data)
      })
    },
    },
    onLoad(){
      // this.getData()
      this.getHouseList()
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
  padding: 40rpx 5rpx;
  text-align: center;
  width: 1000rpx;
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
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap; */
  width: 100%;
}
.cho{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.showHouse .cho .house{
  width: 326rpx;
  margin-bottom: 30rpx;
  /* border: 1px solid #000; */
}
.showHouse .cho .more{
  width: 100%;
  font-size:18rpx;
}
.showHouse .cho .more button{
  background-color: #fff;
  border: 0.5px solid #218380;
  color: #218380;
}
.showHouse .cho .house .pic{
  width: 100%;
  height: 250rpx;
}
.showHouse .cho .house .pic img{
  width: 100%;
  height: 100%;
}
.showHouse .cho .house .info{
  padding: 10rpx 0rpx;
}
.showHouse .cho .house .info .position{
  text-overflow :ellipsis; /*让截断的文字显示为点点。还有一个值是clip意截断不显示点点*/
  overflow : hidden;
  line-clamp: 2;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;   
}
</style>