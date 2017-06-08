import Vue from 'vue';
import App from './App';
import router from './router';
import VueProgressBar from 'vue-progressbar';
import axios from 'axios';

import VeeValidate, { Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
Validator.addLocale(zh_CN);
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 100,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VeeValidate,config);

Vue.config.productionTip = false;
/**进度条配置信息**/
const options = {
  color: '#0366D6',
  failedColor: '#874b4b',
  thickness: '2px',
  autoRevert: true,
  location: 'top',
  inverse: false
};

Vue.use(VueProgressBar, options); //使用进度条插件
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'https://www.dayuweb.cn/api/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
