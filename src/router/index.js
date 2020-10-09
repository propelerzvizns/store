import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCustomers from '../components/AppCustomers.vue'
import AppProducts from '../components/AppProducts.vue'
import LatestPurchases from '../components/LatestPurchases.vue'
import Buy from '../components/Buy.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/customers',
    name: 'app-customers',
    component: AppCustomers
  },
  {
    path: '/products',
    name: 'app-products',
    component: AppProducts
  },
  {
    path: '/customers/:id',
    name: 'latest-purchases',
    component: LatestPurchases
  },
  {
    path: '/products/:id',
    name: 'app-buy',
    component: Buy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
