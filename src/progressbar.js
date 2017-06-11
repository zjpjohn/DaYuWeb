import Vue from 'vue'
import VueProgressBar from 'vue-progressbar';

const options = {
    color: '#0366D6',
    failedColor: '#874b4b',
    thickness: '2px',
    autoRevert: true,
    location: 'top', 
    inverse: false
};
//使用进度条插件
Vue.use(VueProgressBar, options);