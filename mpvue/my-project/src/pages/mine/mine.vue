<template>
  <div class="showFacility">
    <div class="main">
      123
      {{location}}
      <i-button @click="searchAddress"></i-button>
      <map id="map" longitude="113.324520" latitude="23.099994" scale="14"  style="width: 100%; height: 300px;"></map>
    </div>
    
  </div>
</template>

<script>
import QQMapWX from "../../utils/map";
    var qqmapsdk;
    qqmapsdk = new QQMapWX({
    key:'23SBZ-AJ36F-3GXJK-NZ2RE-5GH2Z-BABWF'
    });
export default {
  data(){
        return {
            location
        }
    },
    onLoad() {
         wx.getLocation({
            type: "gcj02",
            success:(res)=>{
            qqmapsdk.reverseGeocoder({
                location: {
                    latitude: res.latitude,
                    longitude: res.longitude,
                },
            success:  (res) => {
              console.log(res,this.location)
                this.location = res.result.formatted_addresses.recommend
            },

        });
      }
         })
    },
    methods: {
        searchAddress() {
            wx.chooseLocation()
        }
    }
}
</script>

<style>
body{
  height: 100%;
}

</style>