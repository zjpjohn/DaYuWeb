import Vue from 'vue'
//更改title的指令
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = binding.value
    },
    update: function (el, binding) {
        document.title = binding.value
    }
})