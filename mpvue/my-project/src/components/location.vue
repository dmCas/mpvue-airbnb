<template>
  <div class="location">
    <h1>房源位置</h1>
    <div class="overview">
      <h2>地址：苏州市 江苏省 中国</h2>
      <div class="overview-main">
        <p>位于石路步行街地铁口，距离苏州火车站2站地铁，距离山塘街1站地铁。距离各大景点都很近，我们会发详细旅游攻略给您。旁边就是停车场，10元12</p>
        <span class="more" @click="showPopup">查看更多</span>
      </div>
    </div>
    <div class="overview outsuggestion">
      <h2>出行信息</h2>
      <div class="overview-main">
        <p>位于石路步行街地铁口，距离苏州火车站2站地铁，距离山塘街1站地铁。距离各大景点都很近，我们会发详细旅游攻略给您。旁边就是停车场，10元12</p>
        <span class="more" @click="showPopup">查看更多</span>
      </div>
    </div>
    <div class="map">
      <map
        @click="getSelect"
        id="map"
        longitude="120.6020740000"
        latitude="31.3119640000"
        :markers="markers"
        scale="14"
        style="width: 100%; height: 200px;"
        :enable-zoom="enablezoom"
        :enable-scroll="enablescroll"
        :enable-rotate="enablerotate"
      ></map>
    </div>
    <div class="map-more">
      <img src="../../static/images/site.png" alt />
      <span>预定后将显示详细地址</span>
    </div>
  </div>
</template>

<script>
import QQMapWX from "../utils/map";
    var qqmapsdk;
    qqmapsdk = new QQMapWX({
    key:'23SBZ-AJ36F-3GXJK-NZ2RE-5GH2Z-BABWF'
    });
export default {
  data() {
    return {
      enablezoom: false,
      enablescroll: false,
      enablerotate: false,
      markers: [
        {
          iconPath: "../../static/images/biaoshi.png",
          id: 0,
          latitude: 31.311964,
          longitude: 120.602074,
          width: 50,
          height: 50
        }
      ]
    };
  },
  // 查询用户地理位置
  // onLoad() {
  //   wx.getLocation({
  //     type: "gcj02",
  //     success: res => {
  //       console.log(res)
  //       // qqmapsdk.reverseGeocoder({
  //       //   location: {
  //       //     latitude: res.latitude,
  //       //     longitude: res.longitude
  //       //   },
  //       //   success: res => {
  //       //     this.location = res.result.formatted_addresses.recommend;
  //       //   }
  //       // });
  //     }
  //   });
  // },
  methods: {
    getSelect(){
      const latitude = this.markers[0].latitude
      const longitude = this.markers[0].longitude
      console.log(this.markers[0])
      wx.openLocation({
        latitude,
        longitude,
        scale: 28,
        name:"近平江/山塘/苏州站/苏州北站/拙政园/苏州博物馆+地铁口旁【书生】",
        address:"苏州市 江苏省 中国"
        // const latitude = res.latitude
        // const longitude = res.longitude
        // wx.openLocation({
        //   latitude,
        //   longitude,
        //   scale: 18
        // })
      }
    )
    }
  }
};
</script>

<style>
.location {
  padding: 40rpx 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.location h1 {
  font-weight: bold;
  font-size: 36rpx;
}
.location .overview {
  padding: 20rpx 0;
}
.location .overview h2 {
  font-weight: bold;
  padding-bottom: 20rpx;
}
/* .location .overview .overview-main{
  padding: 0 0 20rpx 0;
} */
.location .overview .overview-main p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-bottom: 5rpx;
}
.location .overview .overview-main .more {
  color: #218380;
}
.location .map {
  padding: 30rpx 0 30rpx 0;
}
.location .map-more {
  display: flex;
}
.location .map-more img {
  width: 35rpx;
  height: 40rpx;
  vertical-align: middle;
  padding-right: 15rpx;
}
.location .map-more span {
  vertical-align: middle;
}
</style>