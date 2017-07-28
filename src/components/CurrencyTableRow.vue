<template>
<tr role="row" class="even">
	<td>{{ index }}</td>
	<td class="numeric sorting_1">
	    {{ buy }}</td>
	<td class="numeric sorting_1">{{ sell }}</td>
	<td class="numeric sorting_1">{{ last }}</td>
 </tr>

</template>
<script type = "text/javascript">
export default {
  name: 'currencytablerow',
  props: ['index', 'last', 'currency', 'sell', 'buy'],
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>
<style>
</style>