<template>
  <div class="service">
    <div v-for="(item,i) in service" :key="i" class="one-item">
      <div class="icon"><img :src="item.pic" alt=""></div>
      <span style="font-size:30rpx;font-weight:bold;margin-right:10rpx;" class="intro1">{{item.tip}}</span>
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
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.one-item{
  display: flex;
}
.one-item .icon{
  line-height:30px;
}
.one-item .intro1{
  white-space: nowrap;
}
.one-item span{
  vertical-align: middle;
  line-height:30px;
  padding-right: 10rpx;
}
</style>