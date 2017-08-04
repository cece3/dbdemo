<template>
<div>
	
            
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-table">
                <div class="panel-heading">
                  <h3 class="panel-title">BitCoin Currency Table  
</h3>
				  <div style="padding-left:15px;">Last Updated:<transition name="fade"><span v-if="show" style="margin-left:9px">{{ refreshedtime }}</span></transition></div><button @click="show = false" v-on:click="refreshcurrencydata" class="btn-primary" style="margin:15px;">Refresh</button>  
                </div>
                <div class="panel-body" >
                  <div id="exampleTable1_wrapper" class="dataTables_wrapper form-inline no-footer"><table id="exampleTable1" class="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row"><th class="sorting" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-label="Industry: activate to sort column ascending" style="width: 256px;">Currency</th><th class="numeric sorting_asc" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rank: activate to sort column descending" style="width: 135px;">Buy</th><th class="numeric sorting_asc" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rank: activate to sort column descending" style="width: 135px;">Sell</th><th class="numeric sorting_asc" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rank: activate to sort column descending" style="width: 135px;">Last</th></tr>
                    </thead><transition-group name="currencydata" :duration="3000" tag="tbody" v-bind:class="datacolor">
                      <currency-table-row
                      	v-for="(currency, index) in currencydata"
                      	v-bind:key="index"
      					v-bind:index="index"
      					v-bind:last="currency.last"
      					v-bind:buy="currency.buy"
      					v-bind:sell="currency.sell"></currency-table-row>
					</transition-group>
                  </table></div>
                </div>
              </div>
            </div>
</div>
</template>
<script type = "text/javascript">
import CurrencyTableRow from './CurrencyTableRow'

export default {
  name: 'bitcoincurrencytable',
  components: {
    CurrencyTableRow
  },
  data () {
    return {
      show: true,
      datacolor: 'datacolor-initial',
      msg: 'bitcoincurrency table',
      refreshedtime: '',
      lastupdated: '',
      currencydata: {
        'USD': {'15m': 2540.0, 'last': 2540.0, 'buy': 2540.0, 'sell': 2539.42, 'symbol': '$'},
        'AUD': {'15m': 3197.69, 'last': 3197.69, 'buy': 3197.69, 'sell': 3196.96, 'symbol': '$'}
      },
      newcurrencydata: {
        'USD': {'15m': 2540.0, 'last': 2544.0, 'buy': 2540.0, 'sell': 2539.42, 'symbol': '$'},
        'AUD': {'15m': 3197.69, 'last': 314447.69, 'buy': 3197.69, 'sell': 3196.96, 'symbol': '$'}
      }
    }
  },
  mounted: function () {
    this.getcurrencydata()
  },
  methods: {
    getcurrencydata () {
      let query
      query = `https://blockchain.info/ticker`
      // console.log('getcurrencydata begin')
      fetch(`${query}`)
          .then(response => {
            if (response.status !== 200) {
              console.log('getcurrencydata() bad response')
              return
            }
            let newdata = response.json()
            console.log(newdata)
            newdata.then(data => {
              console.log('currency data success' + data['USD'].buy)
              this.currencydata = data
              let currenttime = new Date()
              this.refreshedtime = (currenttime.getHours() < 10 ? '0' : '') + currenttime.getHours() +
                ':' + (currenttime.getMinutes() < 10 ? '0' : '') + currenttime.getMinutes() +
                ':' + (currenttime.getSeconds() < 10 ? '0' : '') + currenttime.getSeconds()
              this.show = true
              this.datacolor = 'datacolor'
            })
          })
          .catch(() => {
            console.log('caught error')
          })
      return 0
    },
    refreshcurrencydata () {
      this.datacolor = 'datacolor-initial'
      this.getcurrencydata()
    }
  }
}
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