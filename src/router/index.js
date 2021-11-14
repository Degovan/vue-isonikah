import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vendor from '../views/Vendor.vue'
import Kategory from '../views/Kategory.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'IsoNikah - Beranda'}
    
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: Vendor,
    meta: { title: 'Isonikah - Vendor' }
  },
  {
    path: '/kategory',
    name: 'Kategory',
    component: Kategory,
    meta: { title: 'Isonikah - Kategory' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
