import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
//import axios from 'axios';
import inputField from './directive/input'
import Toast from 'bootstrap-vue/es/components/toast'
Vue.use(Toast)

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, { load: { key: "REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE", libraries: "places" // necessary for places input
  }});
  
import App from './App.vue'

import routes from './router'

Vue.use(VueRouter)  // install router
Vue.use(BootstrapVue)

Vue.config.productionTip = false



/*directive*/

Vue.directive('inputField', inputField)

const router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  router,
  render: h => h(App)  
}).$mount('#app')