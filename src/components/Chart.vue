<template>
    <div
        class="weather-chart">
        <line-chart
                height="200px"
                :data="chartData"
                suffix="°C"
                label="Temperature"
                :messages="{empty: 'Select specific day to see temperature during the day'}"
        ></line-chart>
    </div>
</template>

<script>
export default {
  name: 'Chart',
  props: {
    chartData: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
    .weather-chart {
        margin-top: 30px;
    }
</style>
