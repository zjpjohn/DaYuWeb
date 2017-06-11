<template>
  <div id="app">
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
    <!--进度条-->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/fonts.css';
@import './assets/css/hint.min.css'
</style>
