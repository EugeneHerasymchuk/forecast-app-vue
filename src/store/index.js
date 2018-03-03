import Vue from 'vue'
import Vuex from 'vuex'
import cityWeather from './modules/cityWeather'

Vue.use(Vuex)

const state = {}

const store = new Vuex.Store({
  state,
  modules: {
    cityWeather
  }
})

export default store
