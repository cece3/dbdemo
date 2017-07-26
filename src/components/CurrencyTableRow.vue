<template>
<tr role="row" class="even">
	<td>{{ index }}</td>
	<td class="numeric sorting_1">{{ last }}</td>
 </tr>

</template>
<script type = "text/javascript">
export default {
  name: 'currencytablerow',
  props: ['index', 'last'],
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>