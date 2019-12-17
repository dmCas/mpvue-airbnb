<template>
  <div class="service">
    <div v-for="(item,i) in service" :key="i" class="one-item">
      <div class="icon"><img :src="item.pic" alt=""></div>
      <span style="font-size:30rpx;font-weight:bold;margin-right:10rpx;">{{item.tip}}</span>
      <span style="font-size:26rpx;">{{item.extra}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:["service"]
}
</script>

<style>
.service{
  padding: 20rpx 0;
}
.one-item{
  display: flex;
}
.icon{
  vertical-align: middle;
  /* line-height: 50rpx; */
}

.one-item span{
  vertical-align: middle;
  line-height: 35px;
}
</style>