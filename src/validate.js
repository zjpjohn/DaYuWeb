import Vue from 'vue'
import VeeValidate, {
    Validator
} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Validator.addLocale(zh_CN);

const config = {
    errorBagName: 'errors',
    delay: 100,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VeeValidate, config);
