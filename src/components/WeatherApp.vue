<template>
    <div>
        <vue-google-autocomplete
            id="map"
            autofocus
            classname="form-control__city-input"
            placeholder="Type your city"
            required
            spellcheck="false"
            types="(regions)"
            @placechanged="getAddressData"
            @no-results-found="getAddressData">
        </vue-google-autocomplete>
        <div
            class="weather-data-grid">
            <i
                class="el-icon-loading"
                v-if="loading">
            </i>
            <weather-grid v-else></weather-grid>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import WeatherGrid from './WeatherGrid.vue'

export default {
  name: 'WeatherApp',
  components: {
    VueGoogleAutocomplete,
    WeatherGrid
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'cityInfo'
    ])
  },
  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    async getAddressData (addressData, placeResultData, id) {
      if (addressData.latitude) {
        this.loading = true

        // Update Vuex with city information
        await this.$store.dispatch('setCityInfo', addressData)

        // Keep loading icon for friendly behavior
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .form-control {
        &__city-input {
            font-size: 18px;
            min-width: 150px;
            padding: 5px 10px;
            width: 300px;
            border: 1px solid #ccc;
            text-align: center;
            color: #757575;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;

            ::placeholder {
                color: #878787;
            }
        }
    }

    .weather-data-grid {
        position: absolute;
        padding-top: 20px;
        margin: auto;
        right: 0;
        left: 0;
        width: 50%;
        height: 300px;
    }
    .el-icon-loading {
        margin-top: 40px;
        font-size: 2em;
        color: #9E9E9E;
    }
</style>
