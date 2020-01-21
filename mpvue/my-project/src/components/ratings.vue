<template>
  <div class="ratings">
    <h1>房客评价</h1>
    <div class="user">
      <div class="avator">
        <img :src="comments.userImg" alt />
      </div>
      <div class="user-info">
        <h2>{{comments.username}}</h2>
        <p>{{comments.time}}</p>
      </div>
    </div>
    <div class="rating-main">
      <p>{{comments.comment}}</p>
    </div>
    <div class="extra">
      <span class="more">查看全部5条房客真实评价</span>
      <span class="star">
        <i-rate :disabled="true" :value="starIndex"></i-rate>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments"],
  data() {
    return {
      len: null,
      starIndex: 4
    };
  },
  onLoad() {
    this.len = this.comments.length;
    console.log(this.comments.length);
  }
};
</script>

<style>
.ratings {
  padding: 40rpx 0;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.ratings h1 {
  font-weight: bold;
  font-size: 36rpx;
}
.user {
  display: flex;
  padding: 30rpx 0 20rpx;
}
.user .avator {
  width: 130rpx;
  height: 130rpx;
}
.user .avator img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.user .user-info {
  padding-left: 30rpx;
  padding-top: 16rpx;
}
.user .user-info h2 {
  font-weight: bold;
  font-size: 32rpx;
  margin-bottom: 6rpx;
}
.user .user-info p {
  font-size: 28rpx;
}
.rating-main {
  word-wrap: break-word;
}
.extra {
  padding: 30rpx 0 0;
}
.extra span {
  text-align-last: justify;
  display: inline-block;
}
.extra .more {
  padding-top: 8rpx;
}
.extra .star {
  padding-left: 55rpx;
  vertical-align: top;
}
</style>