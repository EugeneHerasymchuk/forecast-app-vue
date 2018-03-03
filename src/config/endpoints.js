export default {
  get: {
    weatherAPI: (lat, lon) => `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=en&type=like&units=metric&APPID=${process.env.OPEN_WEATHER_API}`
  }
}
