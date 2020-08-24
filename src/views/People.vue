<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul v-if="mylist">
      <li v-for="(item,index) in mylist" :key="index">{{item.name}}</li>
    </ul>
    <ul>
      <li>
        <router-link to="/detail/1">per1</router-link>
      </li>
      <li>
        <router-link to="/detail/2">per2</router-link>
      </li>
      <li>
        <router-link to="/detail/3">per3</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gitlist: []
    }
  },
  created() {},
  mounted() {
    this.getData()
  },
  methods: {
    onclick() {},
    getData() {
      var that = this
      this.$axios
        .get('https://api.github.com/users/JakeWharton/repos')
        .then(res => {
          for (var i = 0; i < 3; i++) {
            that.gitlist[i] = res.data[i]
          }
          console.log(that.gitlist)
        })
        .catch(err => {
          console.error('获取数据失败' + err)
        })
    }
  },
  computed: {
    mylist() {
      var listdata = this.gitlist
      console.log(listdata)
      return listdata
    }
  }
}
</script>

<style lang="less" scoped>
ul,
li {
  list-style: none;
  line-height: 50px;
  font-size: 24px;
}

</style>
