import Vue from 'vue'
import Router from 'vue-router'
import BitCoinCurrencyTable from '@/components/BitCoinCurrencyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BitCoinCurrencyTable',
      component: BitCoinCurrencyTable
    }
  ]
})
