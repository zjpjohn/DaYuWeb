import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import axios from './http.js'
import progressbar from './progressbar.js'
import validate from './validate.js'
import store from './store/store.js'
import title from './directive/title.js'
Vue.config.productionTip = false;


//在这里扩展一些对数组的操作

Array.prototype.has=function (val) {
        var has = false;
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) {
                has = true;
            }
        }
    return has;
};

Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
           if (this[i] == val) 
           return i;
           }
        return -1;
    };
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
        if (index > -1) {
            this.splice(index, 1);
        }
    };          
Vue.prototype.axios = axios;
new Vue({
    el: '#app',
    router,
    store,
    title,
    render: h => h(App)
}).$mount('#app')
