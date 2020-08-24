<template>
  <div class="banner">
    <div class="item" @mousemove="stop" @mouseout="start">
      <img :src="imgs[currentIndex].img" />
    </div>
    <div class="page" v-if="this.imgs.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)">&lt;</li>
        <li
          v-for="(item,index) in imgs"
          @click="gotoPage(index)"
          :class="{'current':currentIndex == index}"
          v-bind:key="index"
        >{{index+1}}</li>
        <li @click="gotoPage(nextIndex)">&gt;</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        { img: require('../assets/img/1.png') },
        { img: require('../assets/img/2.png') },
        { img: require('../assets/img/3.png') }
      ],
      currentIndex: 0, // 默认显示图片
      timer: null // 定时器
    }
  },
  mounted() {
    this.runInv()
  },
  methods: {
    // 定时器
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 2000)
    },
    gotoPage(index) {
      this.currentIndex = index
    },
    // 停止轮播
    stop() {
      this.timer = null
    },
    // 继续轮播
    start() {
      this.runInv()
    }
  },
  computed: {
    // 上一张
    prevIndex() {
      if (this.currentIndex === 0) {
        return this.imgs.length - 1
      } else {
        return this.currentIndex - 1
      }
    },
    // 下一张
    nextIndex() {
      if (this.currentIndex === this.imgs.length - 1) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    }
  },
  beforeDestroy() {
    this.timer = null
  }
}
</script>

<style lang="less" scoped>
ul li {
  list-style: none;
  float: left;
  width: 30px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}
.banner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
  height: 100%;
}
.item {
  height: 100%;
}
.banner img {
  width: 100%;
  display: block;
  height: 100%;
}
.banner .page {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
}
.banner .page ul {
  float: right;
}
.current {
  color: #ff6700;
}
</style>
