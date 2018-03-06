import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import store from './store'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import VueGeolocation from 'vue-browser-geolocation'

/* eslint-disable no-unused-vars */
import Chart from 'chart.js'

Vue.use(VueChartkick, { Chartkick })
Vue.use(VueGeolocation)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
