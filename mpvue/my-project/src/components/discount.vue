<template>
<div>
  <div class="discount">
    <div class="main">
      <div class="icon"><img src="../../static/images/提醒.png" alt=""></div>
      <div class="content">
        <span class="important">享受12月6日-12月19日期间的7折优惠</span>
        <span>在三天内完成预订，锁定限时好价</span>
      </div>
    </div>
  </div>
  <div class="tip">
    <img src="../../static/images/提示.png" alt="">
    <p style="display:inline;vertical-align: middle;">预定成功后可邀请好友助力旅行基金，最高可返￥200</p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.discount{
  background-color: rgba(165,223,249, 0.4);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #a5dff9;
  border-radius: 2%;
}
.discount .main{
  padding: 20rpx 20rpx;
  display: flex;
}
.main .icon{
  width: 70rpx;
  height: 70rpx;
  background-color: #fff;
  border-radius: 50%;
  flex: 0 0 80rpx;
  margin-right: 20rpx;
}
.main .icon img{
  width: 100%;
  height: 100%;
  transform: scale(0.5);
}
.main .content span{
  font-size: 24rpx;
}
.main .content .important{
  flex: 1;
  font-size: 26rpx;
  font-weight: bold;
}
.tip{
  padding: 30rpx 0;
  font-size: 24rpx;
}
.tip  img{
  width: 30rpx;
  height: 30rpx;
  vertical-align: middle;
}
</style>