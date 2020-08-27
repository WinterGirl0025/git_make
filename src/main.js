import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import '../src/assets/css/global.css'
// axios
import axios from 'axios'
// 引入vant-ui
import './plugin/vant_ui'

// 通过this.$axios调用
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
