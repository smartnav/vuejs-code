import { Doughnut } from 'vue-chartjs'

export default {
  //name: 'doughnutchart ',
  extends: Doughnut,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Doughnut Chart',
            backgroundColor: ['#00f1ff', '#00c3a8', 'green', '#ffc5c5', '#9cffbb', '#7bf3ff' ,'#9aa6ff', '#ca8fff', '#ffb3eb', '#ff5685', '#ff5656', '#ffbb56'],
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],            
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