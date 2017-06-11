import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import axios from './http.js'
import progressbar from './progressbar.js'
import validate from './validate.js'
import store from './store/store.js'
import title from './directive/title.js'
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
    el: '#app',
    router,
    store,
    title,
    render: h => h(App)
}).$mount('#app')
