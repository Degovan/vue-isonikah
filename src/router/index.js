import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kategory from '../views/Kategory.vue'
import Fotograper from '../views/subkategory/Fotograper.vue'
import MakeUp from '../views/subkategory/Makeup.vue'
import BajuAdat from '../views/subkategory/Bajuadat.vue'
import Dekorasi from '../views/subkategory/Dekorasi.vue'
import Api from '../views/Api.vue'
import Vendor from '../views/Vendor.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Isonikah.id | Rencanakan Pernikahanmu Pada Kami'}
    
  },
  {
    path: '/vendor',
    name: 'Vendor',
    component: Vendor,
    meta: { title: 'Isonikah.id - Vendor' }
  },
  {
    path: '/api',
    name: 'Api',
    component: Api,
    meta: { title: 'Isonikah.id - API' }
  },
  {
    path: '/kategory',
    name: 'Kategory',
    component: Kategory,
    meta: { title: 'Isonikah.id - Kategory' }
  },
  {
    path: '/fotografer',
    name: 'Fotografer',
    component: Fotograper,
    meta: { title: 'Isonikah.id - Kategory Fotografer' }
  },
  {
    path: '/makeup',
    name: 'Makeup',
    component: MakeUp,
    meta: { title: 'Isonikah.id - Kategory Make up' }
  },
  {
    path: '/gaunnikah',
    name: 'Bajuadat',
    component: BajuAdat,
    meta: { title: 'Isonikah.id - Gaun nikah & Tunangan' }
  },
  {
    path: '/dekorasi',
    name: 'Dekorasi',
    component: Dekorasi,
    meta: { title: 'Isonikah.id - Kategory Dekorasi' }
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
  from()
  to()
})
export default router
