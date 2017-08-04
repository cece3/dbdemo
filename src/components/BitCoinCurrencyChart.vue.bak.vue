<template>
<div class="panel-body" style="height: 366px;">
                  {{ transactiondata }}
</div>
</template>
<script type = "text/javascript">
import Bar from 'vue-chartjs'

export default Bar.extend({
  name: 'bitcoincurrencychart',
  data () {
    return {
      show: true,
      datacolor: 'datacolor-initial',
      msg: 'bitcoincurrency table',
      refreshedtime: '',
      lastupdated: '',
      transactiondata: ''
    }
  },
  mounted: function () {
    this.gettransactions()
  },
  methods: {
    gettransactions () {
      let query
      query = `https://api.blockchain.info/charts/n-transactions?format=json&cors=true`
      console.log('gettransactions begin')
      let headers
      headers = {
      }
      fetch(`${query}`, headers)
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
</script>
<style scoped>
.datacolor {
	color: black;
	transition-duration:6s;
}
.datacolor-initial {
	color: red;
}
</style>