<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
import BitCoinCurrencyTable from './components/BitCoinCurrencyTable'

export default {
  name: 'app',
  components: {
    BitCoinCurrencyTable
  }
}
</script>

<style>

</style>
