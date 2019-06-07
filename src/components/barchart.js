import { Bar } from 'vue-chartjs'

export default {
  name: 'barchat',
  extends: Bar,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Bar Chart',
            backgroundColor: '#00c3a8',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },          
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted () {
    this.renderChart(this.chartdata.datacollection, this.options)
  }
}