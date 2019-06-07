import { Line } from 'vue-chartjs'

export default {
  name: 'linechart',
  extends: Line,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Line Bar Chart',
            borderColor: '#00c3a8',
            backgroundColor: 'rgba(50, 115, 220, 0)',
            data: [30, 40, 15, 50, 19, 35, 15, 50, 20, 80, 22, 5]
          },
          {
            label: 'Line Chart',
            borderColor: '#00a78f',
            backgroundColor: '#00c3a83d',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }          
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