import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
     {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
