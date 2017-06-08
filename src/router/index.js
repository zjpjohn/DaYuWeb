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

import register from '@/components/register'
/**个人中心组件***/
import user from '@/components/users/user'
import stars from '@/components/users/stars'
import followers from '@/components/users/followers'
import mypublish from '@/components/users/publish'
import following from '@/components/users/following'
import overview from '@/components/users/overview'

/***个人业务操作***/
import publish from '@/components/publish/publish'
import publishgoods from '@/components/publish/publishgoods'
import publishanswer from '@/components/publish/publishanswer'
import publishbuy from '@/components/publish/publishbuy'

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
    },{
      path:'/register',
      components:{
        header:siteHeader,
        content:register
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
    { /***用户中心、包含个人信息预览、收藏、关注。粉丝****/
      path: '/user',
      components: {
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
          path: 'mypublish',
          components: {
            user: mypublish
          }
        }
      ]
    }, 
    {/****发布商品，提问页面****/
      path: '/user/publish/',
      components: {
        content: publish,
        footer: Footer
      },
      children: [{
        path: 'goods',
        components: {
          publishs: publishgoods
        }
      }, {
        path: 'buy',
        components: {
          publishs: publishbuy
        }
      }, {
        path: 'answer',
        components: {
          publishs: publishanswer
        }
      }]
    },
    { /****个人设置，个人资料设置，包含....******/
      path: '/user/settings/',
      components: {
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
        }, {
          path: 'connection',
          components: {
            settings: connection
          }
        }
      ]
    }
  ]
})
