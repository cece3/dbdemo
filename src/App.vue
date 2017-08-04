<template>
<div class="col-xs-12">
<div class="row">
  <div id="app">
    <router-view></router-view>
  </div>
  <div id="" class="col-xs-12 col-md-8">
    <div class="panel">
                <div class="panel-heading">
                  <h3 class="panel-title">Important information</h3>
                </div>
      <div class="panel-body">
        <app-chart></app-chart>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import BitCoinCurrencyTable from './components/BitCoinCurrencyTable'
import BitCoinCurrencyChart from './components/BitCoinCurrencyChart.js'

export default {
  name: 'app',
  components: {
    BitCoinCurrencyTable,
    'app-chart': BitCoinCurrencyChart
  }
}
</script>

<style>

</style>
