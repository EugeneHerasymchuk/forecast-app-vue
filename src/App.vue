<template>
  <div id="app">
    <img class="weather-icon" src="/static/icon.png">
    <WeatherApp
      v-if="googleAPIloaded"></WeatherApp>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp'
import loadGoogleMapsAPI from 'load-google-maps-api'

export default {
  name: 'App',
  components: {
    WeatherApp
  },
  data () {
    return {
      googleAPIloaded: false
    }
  },
  created () {
    this.loadGoogleAPI()
  },
  methods: {
    async loadGoogleAPI () {
      const options = {
        key: process.env.GOOGLE_API,
        libraries: ['places']
      }

      await loadGoogleMapsAPI(options)

      this.googleAPIloaded = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}
.weather-icon {
  width: 100px;
  margin-bottom: 20px;
}
</style>
