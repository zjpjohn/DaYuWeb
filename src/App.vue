<template>
  <div> 
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
    <!--进度条-->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {
    // 在被渲染出来是，进度条被销毁
    this.$Progress.finish()
  },
  created() {
    // 被创建时进度条显示
    this.$Progress.start()
    //  钩子函数，在路由开始
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/fonts.css';
</style>
