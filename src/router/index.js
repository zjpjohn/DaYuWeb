import Vue from 'vue'
import Router from 'vue-router'
/**共有组件***/
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'
import List from '@/components/public/List'
/**私有组件***/
import Index from '@/components/Index'
import About from '@/components/About'
import Login from '@/components/Login'
import Goods from '@/components/Goods'
import Answer from '@/components/Answer'
import Book from '@/components/Book'
Vue.use(Router)

export default new Router({
  routes: [{ /**首页**/
      path: '/',
      name: 'index',
      components: {
        header: Header,
        content: Index,
        footer: Footer
      }
    }, { /**商品页面**/
      path: '/goods/:type',
      name: 'goods',
      components: {
        header: Header,
        content: Goods,
        footer: Footer
      }
    }, { /**问答页面**/
      path: '/answer',
      components: {
        header: Header,
        content: Answer,
        footer: Footer
      }
    },
    { /**关于页面**/
      path: '/about',
      components: {
        header: Header,
        content: About,
        footer: Footer
      }
    },
    { /**登录页面**/
      path: '/login',
      components: {
        header: Header,
        content: Login,
        footer: Footer
      }
    }
  ]
})
