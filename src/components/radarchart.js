import { Radar } from 'vue-chartjs'

export default {
  name: 'radarchart',
  extends: Radar,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Radar Chart',
            backgroundColor: '#00c3a83d',
            //backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: '#00c3a8',
            pointBackgroundColor: '#00c3a8',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#00c3a8',
            data: [70, 60, 70, 50, 60, 65, 55, 80, 60, 55, 10, 60]
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