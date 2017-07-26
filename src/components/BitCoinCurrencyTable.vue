<template>
<div>


	<div class="col-xs-12">

          <div class="row sameheight">
            
            
            <div class="col-xs-12 col-md-4">
              <div class="panel panel-table">
                <div class="panel-heading">
                  <h3 class="panel-title">BitCoin Currency Table  
</h3>
				  <div style="padding-left:15px;">Last Updated:</div><button v-on:click="refreshcurrencydata" class="btn-primary" style="margin:15px;">Refresh</button>  
                </div>
                <div class="panel-body" style="height: 366px;">
                  <div id="exampleTable1_wrapper" class="dataTables_wrapper form-inline no-footer"><table id="exampleTable1" class="table dataTable no-footer" role="grid">
                    <thead>
                      <tr role="row"><th class="sorting" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-label="Industry: activate to sort column ascending" style="width: 256px;">Currency</th><th class="numeric sorting_asc" tabindex="0" aria-controls="exampleTable1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rank: activate to sort column descending" style="width: 135px;">Rank</th></tr>
                    </thead><tbody>
                                  
                    <tr role="row" class="odd">
                        <td>Some Industry</td>
                        <td class="numeric sorting_1">1</td>
                      </tr>
                      <currency-table-row
                      	v-for="(currency, index) in currencydata"
      					v-bind:index="index"
      					v-bind:last="currency.last"></currency-table-row>
                      <tr role="row" class="odd">
                        <td>One More Industry</td>
                        <td class="numeric sorting_1">3</td>
                      </tr><tr role="row" class="even">
                        <td>Industry A</td>
                        <td class="numeric sorting_1">4</td>
                      </tr><tr role="row" class="odd">
                        <td>Another Industry</td>
                        <td class="numeric sorting_1">5</td>
                      </tr><tr role="row" class="even">
                        <td>Industry C</td>
                        <td class="numeric sorting_1">6</td>
                      </tr><tr role="row" class="odd">
                        <td>Industry</td>
                        <td class="numeric sorting_1">7</td>
                      </tr></tbody>
                  </table></div>
                </div>
              </div>
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
      msg: 'bitcoincurrency table',
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
  methods: {
    addRow (newTodo) {
      this.currencydata.push(
        newTodo
      )
    },
    getcurrencydata () {
      let query
      query = `https://blockchain.info/ticker`
      console.log('getcurrencydata begin')
      fetch(`${query}`)
          .then(response => {
            if (response.status !== 200) {
              console.log('getcurrencydata() bad response')
              return
            }
            let newdata = response.json()
            console.log(newdata)
            newdata.then(data => {
              // let lat = data.results[0].geometry.location.lat
              // let lng = data.results[0].geometry.location.lng
              // this.markers.push({position: {lat, lng}})
              // console.dir(data.results[0].geometry.location.lat)
              console.log('currency data success' + data['USD'].buy)
              console.log(JSON.stringify(data))
              return data
            })
          })
          .catch(() => {
            console.log('caught error')
          })
      return 0
    },
    refreshcurrencydata () {
      console.log('refreshCurrencyData')
      this.currencydata = this.getcurrencydata()
    }
  }
}
</script>