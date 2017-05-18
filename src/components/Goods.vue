<template>
  <div>
    <v-subnav :subnavlist="subnavlist"></v-subnav>
    <h2>当前页面是{{msg}}</h2>
  </div>
</template>

<script>
import Subnav from '@/components/public/Subnav'
export default {
  data() {
    return {
      msg: '',
      subnavlist: []
    }
  }, components: {
    'v-subnav': Subnav,
  }, created() {
    this.msg = this.$route.params.type
  }, watch: {//监听参数变化
    '$route.params.type': function (newval, oldval) {
      this.msg = newval
    }
  }, mounted() {
    //渲染之前之前获取数据给子组件
    this.$http.get('../../static/subnav-data.json').then(function (response) {
      this.subnavlist = response.body.subnavlist;
    }, function (response) {
      alert('Error')
    })
  }, methods: {
  }
}
</script>

<style scoped>

</style>
