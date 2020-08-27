<template>
  <div id="app">
    <h1>git测试版</h1>
    <router-view />
    <div class="btn_box">
      <!-- 主页-轮播图 -->
      <router-link to="/" tag="button">Main Page</router-link>
      <!-- 人员 -->
      <router-link to="/people" tag="button">People</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
h1 {
  text-align: center;
}
.btn_box {
  position: absolute;
  bottom: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  button {
    width: 30%;
    height: 30px;
    background-color: #eee;
    border-radius: 3px;
    border: 1px solid #eee;
  }
}
button:hover {
  box-shadow: 0 0 3px #819ff7;
  background-color: #819ff7;
  border: 1px solid #819ff7;
}
</style>
