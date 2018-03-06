<template>
    <div v-if="!!weatherInfo.avgPressure">
        <div class="weather-city-info">
            Weather in {{ cityInfo.name }}, {{ cityInfo.country}}
        </div>
        <div class="weather-avg-pressure">
            Average pressure for the week: {{ weatherInfo.avgPressure }} mb
        </div>
        <el-row :gutter="5">
            <el-col
                v-for="day in Object.keys(weatherInfo.data)"
                :key="day"
                :span="4">
                <el-card :body-style="{ padding: '5px' }">
                    <weather-card
                        :day="day"
                        :weatherData="weatherInfo.data"
                        @setDay="setDay">
                    </weather-card>
                </el-card>
            </el-col>
        </el-row>
        <chart :chartData="chartData"></chart>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from './Chart'
import WeatherCard from './WeatherCard'

export default {
  name: 'WeatherGrid',
  data () {
    return {
      chartData: []
    }
  },
  components: {
    WeatherCard,
    Chart
  },
  computed: {
    ...mapGetters([
      'weatherInfo',
      'cityInfo'
    ])
  },
  methods: {
    /**
     * Select weather data for specific day
     * @param {String} day Name of the day
     */
    setDay (day) {
      if (this.weatherInfo.avgPressure) {
        this.chartData = this.weatherInfo.data[day].map(item => [`${item.time}:00`, Math.round((item.temp_max + item.temp_min) / 2)])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .weather-city-info {
      font-size: 20px;
      padding-bottom: 30px;
    }

    .weather-avg-pressure {
        color: #757575;
        padding-bottom: 20px;
    }
</style>
