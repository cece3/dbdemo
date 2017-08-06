import { Line } from 'vue-chartjs'

export default Line.extend({
  data () {
    return {
      datacollection: {
        labels: [],
        datasets: [
          {
            label: 'Transactions',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    var options = {
      responsive: true,
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: true,
            maxTicksLimit: 6
          },
          scaleLabel: {
            display: true
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true
          },
          ticks: {
            min: 150000,
            max: 400000
          }
        }]
      }
    }
    // console.log('chart options ' + options)
    this.gettransactions()
    this.renderChart(this.datacollection, options)
  },
  methods: {
    gettransactions () {
      let query
      query = `https://api.blockchain.info/charts/n-transactions?cors=true`
      console.log('gettransactions begin')
      fetch(`${query}`)
          .then(response => {
            if (response.status !== 200) {
              console.log('gettransactions() bad response' + response.status)
              console.log(response)
              return
            }
            let newdata = response.json()
            console.log(newdata)
            newdata.then(data => {
              this.transactiondata = data.values
              // console.log(data.values.length)
              var transactions = []
              for (var i = 0; i < data.values.length; i++) {
                var x = data.values[i].x
                var y = data.values[i].y
                console.log('adding ' + i + ' of ' + y)
                // this.datacollection.datasets[0].data[i] = y
                this.datacollection.labels.push(x)
                this.datacollection.datasets[0].data.push(y)
              }
              this._chart.update()
              console.log(transactions + ' and existing transactions ' + this.datacollection.datasets.data)
              // this.datacollection.datasets.data.push(transactions)
            })
          })
          .catch(error => {
            console.log('gettransactions caught error')
            console.log(error.data)
          })
      return 0
    }
  }
})
