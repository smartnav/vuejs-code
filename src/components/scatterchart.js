import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  data: () => ({
    chartdata: {
      datacollection: {
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Scatter Dataset 1',
          //fill: true,
          borderColor: '#f87979',
          
          backgroundColor: '#f87979',
          data: [{x: 0, y: 0 },
                {x: 1, y: 1 },
                {x: 2, y: 2 },
                {x: 3, y: 3 },
                {x: 4, y: 4}]
        },
        {
          label: 'Scatter Dataset 2',
          //fill: false,
          borderColor: '#7acbf9',
          backgroundColor: '#7acbf9',
          data: [{x: 0, y: 1 },
                {x: 1, y: 2 },
                {x: 2, y: 3 },
                {x: 3, y: 2 },
                {x: 4, y: 3.5 }]
        }]
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