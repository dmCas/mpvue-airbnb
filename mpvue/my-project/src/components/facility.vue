<template>
  <div class="facility">
    <div class="show">
      <div v-for="(base, id) in show" :key="id" class="part">
        <img :src="base.picurl" alt="">
        <span>{{base.name}}</span>
      </div>
      <div class="part part-text">
        <p>+{{facility.count}}</p>
        <p>更多设施</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["facility"],
  data(){
    return{
      show:[]
    }
  },
  created(){
    this.show = this.facility.base.slice(0,3)
  }
}
</script>

<style>
.facility{
  padding: 40rpx 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.show{
  display: flex;
}
.part{
  flex: 1;
  text-align: center;
}
.part img{
  width: 80rpx;
  height:60rpx;
  display: block;
  margin: auto;
}
.part-text{
  font-weight: bold;
  color: #218380;
}
</style>