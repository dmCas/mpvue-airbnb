<template>
  <div class="mine">
    <van-popup
      :show="show"
      position="bottom"
    />

    <van-slider v-model="value" @change="onChange" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      value: 50
    };
  },

  methods: {
    showPopup() {
      this.show = true;
      console.log(this.show);
    },
    onChange(value) {
      this.$toast("当前值：" + value);
    }
  }
};
</script>

<style>
body {
  height: 100vh;
  width: 100%;
}
.clearCache {
  height: 80%;
}
</style>