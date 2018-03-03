# Forecast-app

![image](https://user-images.githubusercontent.com/16426867/36935364-5d5d348e-1ef7-11e8-81cd-733a9fe47275.png)


The single page application built with Vue.js for showing the weather for next 5 days with charts about changing temperature during the day.

Before working with the project, add API keys in `/config/prod.env.js`

## Modules 

> The project was made using:
- [Vue.js](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/en/)
- [Chartkick](https://www.chartkick.com/vue) 
- [API KEY needed] [Openweathermap API](http://openweathermap.org/forecast5)
- [API KEY needed] Google API (Google Maps JavaScript API, Google Geocoding API, Google Places API)
- [Vue-google-autocomplete](https://github.com/olefirenko/vue-google-autocomplete)

## Structure

- `/src/components` folder with Vue components
- `/src/store` folder with Vuex structure
- `/src/config/endpoints` Openweathermap API endpoint 

## Development

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Server 

```bash
# serve static files at localhost:9000 in /dist directory after npm run build
npm run server

```
