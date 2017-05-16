<template>
  <div>
    <v-header></v-header>
  </div>
</template>

<script>
import Header  from './pages/header'
export default {
  name: 'index',
  data () {
    return {
    }
  },components:{
   'v-header': Header
  }
}
</script>

<style scoped>

</style>
