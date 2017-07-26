<template>
<tr role="row" class="even">
	<td>{{ currency }}</td>
	<td class="numeric sorting_1">2</td>
 </tr>

</template>
<script type = "text/javascript">
export default {
  name: 'currencytablerow',
  props: 'currency',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>