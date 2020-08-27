import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import People from '../views/People.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mainpage'
  },
  {
    path: '/mainpage',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/people',
    name: 'People',
    component: People
  }, {
    path: '/detail/:login',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
