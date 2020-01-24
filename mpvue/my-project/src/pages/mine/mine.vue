<template>
  <div class="showFacility">
    <div class="main">
      123
      {{location}}
      <i-button></i-button>
      <map
        @click="searchAddress"
        id="map"
        longitude="120.6020740000"
        latitude="31.3119640000"
        :enable-zoom="enablezoom"
        :enable-scroll="enablescroll"
        :enable-rotate="enablerotate"
        :markers="markers"
        scale="14"
        style="width: 100%; height: 200px;"
      ></map>
      <map
        id="map"
        @click="searchAddress"
        longitude="113.324520"
        latitude="23.099994"
        scale="14"
        style="width: 100%; height: 300px;"
      ></map>
    </div>
  </div>
</template>

<script>
import QQMapWX from "../../utils/map";
var qqmapsdk;
qqmapsdk = new QQMapWX({
  key: "23SBZ-AJ36F-3GXJK-NZ2RE-5GH2Z-BABWF"
});
export default {
  data() {
    return {
      enablezoom: false,
      enablescroll: false,
      enablerotate: false,
      location
    };
  },
  // onLoad() {
  //      wx.getLocation({
  //         type: "gcj02",
  //         success:(res)=>{
  //         qqmapsdk.reverseGeocoder({
  //             location: {
  //                 latitude: res.latitude,
  //                 longitude: res.longitude,
  //             },
  //         success:  (res) => {
  //           console.log(res,this.location)
  //             this.location = res.result.formatted_addresses.recommend
  //         },

  //     });
  //   }
  //      })
  // },
  methods: {
    searchAddress() {
      const latitude = 31.311964;
      const longitude = 120.602074;
      wx.openLocation({
        latitude,
        longitude,
        scale: 28,
        name: "近平江/山塘/苏州站/苏州北站/拙政园/苏州博物馆+地铁口旁【书生】",
        address: "苏州市 江苏省 中国"
        // const latitude = res.latitude
        // const longitude = res.longitude
        // wx.openLocation({
        //   latitude,
        //   longitude,
        //   scale: 18
        // })
      });
    }
  }
};
</script>

<style>
body {
  height: 100%;
}
</style>