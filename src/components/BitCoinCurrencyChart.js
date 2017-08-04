import { Bar } from 'vue-chartjs'

export default Bar.extend({
  data () {
    return {
      datacollection: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.datacollection)
    this.gettransactions()
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
              let currenttime = new Date()
              this.refreshedtime = (currenttime.getHours() < 10 ? '0' : '') + currenttime.getHours() +
                ':' + (currenttime.getMinutes() < 10 ? '0' : '') + currenttime.getMinutes() +
                ':' + (currenttime.getSeconds() < 10 ? '0' : '') + currenttime.getSeconds()
              this.show = true
              this.datacolor = 'datacolor'
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
