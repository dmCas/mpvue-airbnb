<template>
<div class="swiper-wrapper">
  <swiper
    autoplay="true"
    indicator-color="#fff"
    indicator-active-color="grey"
    interval="3000"
    circular="true"
    bindchange="currentHandle">
    <block v-for="(item,index) in advData" :key="index">
      <swiper-item>
        <img :src="item.PicUrl" alt="" width="100%">
        <p>123</p>
      </swiper-item>
    </block>
  </swiper>
</div>
</template>

<script>
export default {
  props: ['advData'],
  data(){
    return{

    }
  }
}
</script>

<style>

</style>