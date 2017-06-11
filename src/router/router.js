import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import * as types from '../store/types.js'

//公共组件
import footer from '@/components/public/footer'

//商品信息组件
import index from '@/components/index'
import goods from '@/components/goods/goods'
import goodsdetail from '@/components/goods/goods-details'

//登录注册
import login from '@/components/login'
import register from '@/components/register'

//用户中心组建
import user from '@/components/users/user'
import stars from '@/components/users/stars'
import followers from '@/components/users/followers'
import mypublish from '@/components/users/publish'
import following from '@/components/users/following'
import overview from '@/components/users/overview'

//商品发布
import publish from '@/components/publish/publish'
import publishgoods from '@/components/publish/publishgoods'
import publishanswer from '@/components/publish/publishanswer'
import publishbuy from '@/components/publish/publishbuy'

//个人设置
import settings from '@/components/settings/settings'
import profile from '@/components/settings/profile'
import account from '@/components/settings/account'
import emails from '@/components/settings/emails'
import connection from '@/components/settings/connection'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        components: {
            content: index,
            footer: footer
        }
    }, {
        path: '/register',
        components: {
            content: register
        }

    }, {
        path: '/goods',
        name: 'goods',
        components: {
            content: goods,
            footer: footer
        }
    }, {
        path: '/goods/:id',
        components: {
            content: goodsdetail,
            footer: footer
        }
    },
    {
        path: '/login',
        components: {
            content: login
        }
    },
    {
        path: '/:user',
        components: {
            content: user,
            footer: footer
        },
        meta: {
            requireAuth: true
        },
        children: [{
                path: 'overview',
                components: {
                    user: overview
                },
                meta: {
                    requireAuth: true
                }
            }, {
                path: 'start',
                components: {
                    user: stars
                },
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'followers',
                components: {
                    user: followers
                },
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'following',
                components: {
                    user: following
                },
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'mypublish',
                components: {
                    user: mypublish
                },
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/:user/publish/',
        components: {
            content: publish,
            footer: footer
        },
        meta: {
            requireAuth: true
        },
        children: [{
            path: 'goods',
            components: {
                publishs: publishgoods
            },
            meta: {
                requireAuth: true
            }
        }, {
            path: 'buy',
            components: {
                publishs: publishbuy
            },
            meta: {
                requireAuth: true
            }
        }, {
            path: 'answer',
            components: {
                publishs: publishanswer
            },
            meta: {
                requireAuth: true
            }
        }]
    },
    {
        path: '/:user/settings/',
        components: {
            content: settings,
            footer: footer
        },
        meta: {
            requireAuth: true
        },
        children: [{
                path: 'profile',
                components: {
                    settings: profile
                },
                meta: {
                    requireAuth: true
                }
            }, {
                path: 'account',
                components: {
                    settings: account
                },
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'emails',
                components: {
                    settings: emails
                },
                meta: {
                    requireAuth: true
                }
            }, {
                path: 'connection',
                components: {
                    settings: connection
                },
                meta: {
                    requireAuth: true
                }
            }
        ]
    }, {
        path: '*',
        components: {
            content: settings,
            footer: footer
        }
    }
]


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
const router = new VueRouter({
    routes,
    mode: 'history'
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})

export default router;
