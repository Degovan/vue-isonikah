import Vue, { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


// import module
// import SubKategory from "./module/kategory"
// import { registerModules } from "./register-modules.js";

library.add(fas, far, fab);

Vue.component('fa', FontAwesomeIcon);



require('./assets/sass/main.css');
require('./assets/css/animate.css');

// registerModules({
//   kategroy: SubKategory,
//   // cart: cartModule
// });

createApp({
  render: function (h) { return h(App) }
}).use(router).mount('#app')

