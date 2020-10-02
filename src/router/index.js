import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCustomers from '../components/AppCustomers.vue'
import AppProducts from '../components/AppProducts.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/customers',
    name: 'customers',
    component: AppCustomers
  },
  {
    path: '/products',
    name: 'products',
    component: AppProducts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
