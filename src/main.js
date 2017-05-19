// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import VueResource from 'vue-resource'

import VeeValidate, {
  Validator
} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

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

Validator.addLocale(zh_CN);
//表单插件配置
const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'zh_CN',
  dictionary: null,
  strict: true,
  enableAutoClasses: true,
  classNames: {
    touched: 'touched',
    untouched: 'untouched',
    valid: 'valid',
    invalid: 'invalid',
    pristine: 'pristine',
    dirty: 'dirty'
  }
};
Vue.use(VeeValidate, config); //使用表单验证插件

Vue.use(VueResource) //使用路由
Vue.use(VueProgressBar, options) //使用进度条插件
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
