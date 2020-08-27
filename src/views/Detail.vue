<template>
  <div class="container_box">
    <h1>{{login}}</h1>
    <div class="img-box">{{img}}</div>
    <div v-if="description" class="descp">{{description}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      img: '',
      description: ''
    }
  },
  mounted() {
    this.login = this.$route.params.login
    this.getData()
  },
  methods: {
    getData() {
      var that = this
      this.$axios
        .get('https://api.github.com/users/' + that.login + '/repos')
        .then(res => {
          var des = res.data[0]
          console.log(des)
          that.img = des.owner.avatar_url
          if (des.description == null) {
            that.description = '他没有描述信息'
          } else {
            that.description = des.description
          }
        })
        .catch(err => {
          console.error('获取数据失败' + err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.container_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  .img-box {
    height: 50%;
    width: 40%;
    background-color: pink;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }
  .descp {
    margin-top: 40px;
    font-weight: 700;
  }
}
</style>
