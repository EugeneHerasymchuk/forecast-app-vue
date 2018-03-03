<template>
    <div
        class="weather-card"
        @click="$emit('setDay', day)">
        <span class="weather-card__day">
            {{ day.substring(0, 3) }}
        </span>
        <img
            class="weather-card__image"
            :src="currentDayWeather(day).weatherLink"
            :title="currentDayWeather(day).weatherDescription"/>
        <div class="weather-card__bottom">
            <span class="weather-card__bottom__max">
                {{ currentDayWeather(day).temp_max }}
            </span>
            <span class="weather-card__bottom__min">
                {{ currentDayWeather(day).temp_min }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    weatherData: {
      type: Object
    },
    day: {
      type: String
    }
  },

  methods: {
    /**
     * Get average weather data during the day and image in the middle of the day
     * @param {String} day Name of the day
     */
    currentDayWeather (day) {
      let arrayDayAvgTemperature = this.weatherData[day].map(item => Math.round((item.temp_max + item.temp_min) / 2))

      let middleDayIndex = Math.floor(this.weatherData[day].length / 2)

      return {
        'temp_min': `${Math.round(Math.min(...arrayDayAvgTemperature))}°`,
        'temp_max': `${Math.round(Math.max(...arrayDayAvgTemperature))}°`,
        'weatherLink': this.weatherData[day][middleDayIndex].weatherLink,
        'weatherDescription': this.weatherData[day][middleDayIndex].weatherDescription
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .weather-card {
        cursor: pointer;

        &__day {
            color: #878787;
            font-size: 17px;
        }

        &__image {
            width: 60%;
            display: block;
            margin: auto;
        }

        &__bottom {
            line-height: 15px;
            font-size: 14px;

            &__min {
                color: #bababa;
            }

            &__max {
                color: #878787;
            }
        }
    }
</style>
