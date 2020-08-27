<template>
  <div class="container_box">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in imgs" :key="index">
        <img v-lazy="image" width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        require('../assets/img/1.png'),
        require('../assets/img/2.png'),
        require('../assets/img/3.png')
      ],
      currentIndex: 0, // 默认显示图片
      timer: null // 定时器
    }
  }
}
</script>

<style lang="less" scoped>
.container_box {
  height: 100%;
  .van-swipe {
    height: 100%;
  }
  img {
    height: 100%;
  }
}
</style>
