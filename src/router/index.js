import Vue from 'vue'
import Router from 'vue-router'
/**共有组件***/
import siteHeader from '@/components/public/site-header'
import Footer from '@/components/public/Footer'
import loginHeader from '@/components/public/login-header'

/**私有组件***/
import Index from '@/components/Index'
import About from '@/components/About'
import Login from '@/components/Login'
import Goods from '@/components/Goods'
import Answer from '@/components/Answer'


/**个人中心组件***/
import user from '@/components/users/user'
import stars from '@/components/users/stars'
import followers from '@/components/users/followers'
import publish from '@/components/users/publish'
import following from '@/components/users/following'
import overview from '@/components/users/overview'


/***设置**/
import settings from '@/components/settings/settings'
import profile from '@/components/settings/profile'
import account from '@/components/settings/account'
import emails from '@/components/settings/emails'
import connection from '@/components/settings/connection'
Vue.use(Router)

export default new Router({
  routes: [{ /**首页**/
      path: '/',
      name: 'index',
      components: {
        header: siteHeader,
        content: Index,
        footer: Footer
      }
    }, { /**商品页面**/
      path: '/goods/:type',
      name: 'goods',
      components: {
        header: siteHeader,
        content: Goods,
        footer: Footer
      }
    }, { /**问答页面**/
      path: '/answer',
      components: {
        header: siteHeader,
        content: Answer,
        footer: Footer
      }
    },
    { /**关于页面**/
      path: '/about',
      components: {
        header: siteHeader,
        content: About,
        footer: Footer
      }
    },
    { /**登录页面**/
      path: '/login',
      components: {
        content: Login
      }
    },
    { /***用户中心****/
      path: '/user',
      components: {
        header: loginHeader,
        content: user,
        footer: Footer
      },
      children: [{
          path: 'overview',
          components: {
            user: overview
          }
        }, {
          path: 'start',
          components: {
            user: stars
          }
        },
        {
          path: 'followers',
          components: {
            user: followers
          }
        },
        {
          path: 'following',
          components: {
            user: following
          }
        },
        {
          path: 'publish',
          components: {
            user: publish
          }
        }
      ]
    }, {
      path: '/user/settings/',
      components: {
        header: loginHeader,
        content: settings,
        footer: Footer
      },
      children: [{
          path: 'profile',
          components: {
            settings: profile
          }
        }, {
          path: 'account',
          components: {
            settings: account
          }
        },
        {
          path: 'emails',
          components: {
            settings: emails
          }
        },{
          path:'connection',
          components:{
            settings:connection
          }
        }
      ]
    }
  ]
})
