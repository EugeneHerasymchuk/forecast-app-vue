import * as api from '@/services/ApiService'
import * as utils from '@/utils/weather'
const state = {
  // Define initial state in module
  cityInfo: {},
  weatherData: {}
}

const getters = {
  cityInfo: state => state.cityInfo,
  weatherInfo: state => utils.parseWeatherRaw(state.weatherData)
}

const actions = {
  /*
    Store city data to Vuex
   */
  async setCityInfo ({commit, dispatch}, cityInfo) {
    commit('SET_CITY_INFO', cityInfo)

    await dispatch('getWeatherByCoordinates', {'lat': cityInfo.latitude, 'lon': cityInfo.longitude})
  },

  /*
   Using openweathermap API, fetch all weather data to the Vuex
    */
  async getWeatherByCoordinates ({commit}, {lat, lon}) {
    const weatherData = (await api.getWeatherData(lat, lon)).data

    commit('SET_WEATHER_DATA', weatherData)
  }
}

const mutations = {
  SET_CITY_INFO (state, cityInfo) {
    state.cityInfo = cityInfo
  },
  SET_WEATHER_DATA (state, weatherData) {
    state.weatherData = weatherData
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
