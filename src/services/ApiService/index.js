import axios from 'axios'
import endpoints from '@/config/endpoints'

export function getWeatherData (lat, lon) {
  return axios.get(endpoints.get.weatherAPI(lat, lon))
}
