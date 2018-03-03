import days from '@/config/days'
import groupBy from 'lodash.groupby'
/**
  Parse weather data
  @params weatherData The array with weather for 5 days
  @return array Array divided by days with information about the weather
 */
export function parseWeatherRaw (weatherData) {
  if (Object.keys(weatherData).length > 0) {
    const avgPressure = calculatePressure(weatherData.list.map(time => time.main.pressure)/* Paste only array with pressures */)

    let data = weatherData.list.map(day => {
      return {
        'day': days[(new Date(day.dt * 1000)).getDay()],
        'time': (new Date(day.dt * 1000)).getHours(),
        'temp_min': day.main.temp_min,
        'temp_max': day.main.temp_max,
        'weatherLink': `http://openweathermap.org/img/w/${day.weather[0].icon}.png`,
        'weatherDescription': day.weather[0].description
      }
    })

    // Group data by day
    data = groupBy(data, 'day')

    return {
      data,
      avgPressure
    }
  } else {
    return {}
  }
}

/**
  Calculate average pressure for the 5 days
  @params pressureArray Array of pressures
 */
function calculatePressure (pressureArray) {
  return Math.round(pressureArray.reduce((acc, current) => acc + current) / pressureArray.length)
}
