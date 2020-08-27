
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="(item,index) in gitlist" :key="index">
        <router-link :to="'/Detail/'+item">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gitlist: ['mojombo', 'pjhyett', 'defunkt']
    }
  }
}
</script>

<style lang="less" scoped>
h1,ul {
  text-align: center;
}
ul,
li {
  list-style: none;
  line-height: 50px;
  font-size: 24px;
}
</style>
