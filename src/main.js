// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import VueResource from 'vue-resource'
Vue.config.productionTip = false

/**进度条配置信息**/
const options = {
  color: '#0366D6',
  failedColor: '#874b4b',
  thickness: '2px',
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueResource)
Vue.use(VueProgressBar, options)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
