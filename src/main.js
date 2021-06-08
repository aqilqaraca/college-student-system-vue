import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import {store} from './store/store'
import Vuelidate from 'vuelidate'
Vue.use(VueRouter)
Vue.use(Vuelidate)

const router = new VueRouter({
  routes,
  mode : 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
