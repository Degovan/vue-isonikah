import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kategory from '../views/Kategory.vue'
import DetailProduct from '../views/DetailProduct.vue'
import Fotograper from '../views/subkategory/Fotograper.vue'
import MakeUp from '../views/subkategory/Makeup.vue'
import BajuAdat from '../views/subkategory/Bajuadat.vue'
import Dekorasi from '../views/subkategory/Dekorasi.vue'
import AuthLogin from '../views/auth/login.vue'
import AuthReg from '../views/auth/register.vue'
import Api from '../views/Api.vue'
import Vendor from '../views/Vendor.vue'
import Event from '../views/Event.vue'
Vue.use(VueRouter)
const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Spillmoment | Rencanakan Pernikahanmu Pada Kami'}
    
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: Vendor,
    meta: { title: 'Spillmoment - Vendor' }
  },
  {
    path: '/login',
    name: 'Login',
    component: AuthLogin,
    meta: { title: 'Spillmoment - Login' }
  },
  {
    path: '/register',
    name: 'Register',
    component: AuthReg,
    meta: { title: 'Spillmoment - Daftar' }
  },
  {
    path: '/api',
    name: 'Api',
    component: Api,
    meta: { title: 'Spillmoment - API' }
  },
  {
    path: '/event',
    name: 'Event',
    component: Event,
    meta: { title: 'Spillmoment - Event' }
  },
  {
    path: '/kategory',
    name: 'Kategory',
    component: Kategory,
    meta: { title: 'Spillmoment - Kategory' }
  },
  {
    path: '/fotografer',
    name: 'Fotografer',
    component: Fotograper,
    meta: { title: 'Spillmoment - Kategory Fotografer' }
  },
  {
    path: '/makeup',
    name: 'Makeup',
    component: MakeUp,
    meta: { title: 'Spillmoment - Kategory Make up' }
  },
  {
    path: '/gaunnikah',
    name: 'Bajuadat',
    component: BajuAdat,
    meta: { title: 'Spillmoment - Gaun nikah & Tunangan' }
  },
  {
    path: '/dekorasi',
    name: 'Dekorasi',
    component: Dekorasi,
    meta: { title: 'Spillmoment - Kategory Dekorasi' }
  },
  {
    path: '/detail-product',
    name: 'Detail-Produk',
    component: DetailProduct,
    meta: { title: 'Spillmoment - Detail Produk' }
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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  from()
  to()
})
export default router
