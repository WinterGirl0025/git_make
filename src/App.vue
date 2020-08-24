<template>
  <div id="app">
    <router-view />
    <div class="btn_box">
      <button>
        <router-link to="/">Main Page</router-link>|
      </button>
      <button>
        <router-link to="/people">People</router-link>
      </button>
    </div>
  </div>
</template>

 <style lang="less" scoped>
.btn_box {
  position: absolute;
  bottom: 0;
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
