<template>
    <div class="container-fluid header-nav-panel" v-title="user.User_Namestr">
        <div class="container header-nav">
            <ul>
                <li class="pull-left header-nav-item">
                    <a href="/#/">
    
                        <img src="../../assets/img/logo-wite.png" style="height:54px;" />
                    </a>
                </li>
                <li class="pull-left header-nav-item">
                    <input type="text" class="header-login-search" placeholder="关键词" />
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/user/publish/goods'}">
                        发布商品</router-link>
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/user/publish/buy'}">
                        发布求购</router-link>
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/user/publish/answer'}">
                        提问</router-link>
                </li>
    
                <li class="pull-right user-icon header-nav-item" @click="showSubnav($event)">
                    <a href="javascript:void(0)" class="hint--bottom" aria-label="查看个人信息">
                        <img :src="[user.User_Iconstr]" class="pull-left" />
                        <i class="icon-down-dir"></i>
                    </a>
                    <ul class="dropdown-menu" @mouseleave="hideSubnav($event)">
                        <li class="triangle-up"></li>
                        <li>您好，{{user.User_Namestr}}</li>
                        <li class="dropdown-menu-divider"></li>
                        <li>
                            <router-link :to="{path:'/user/overview/'}">
                                我的主页</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/user/settings/profile'}">
                                个人资料</router-link>
                        </li>
                        <li>
                            <a href="#">帮助</a>
                        </li>
                        <li class="dropdown-menu-divider"></li>
                        <li>
                            <a href="/#/user/settings/profile">设置</a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" @click="signOut">退出</a>
                        </li>
                    </ul>
                </li>
                <li class="pull-right header-nav-item" @click="showSubnav($event)">
                    <a href="javascript:void(0)" class="hint--bottom" aria-label="新增">
                        <i class="icon-plus"></i>
                        <i class="icon-down-dir"></i>
                    </a>
                    <ul class="dropdown-menu" @mouseleave="hideSubnav($event)">
                        <li class="triangle-up"></li>
                        <li>
                            <router-link :to="{path:'/user/publish/goods'}">
                                发布商品</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/user/publish/buy'}">
                                发布求购</router-link>
                        </li>
                        <li>
                            <router-link :to="{path:'/user/publish/answer'}">
                                提问</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    props: {
        user: {
            Type: Object
        }
    },
    data() {
        return {

        }
    }, methods: {
        /***显示隐藏**/
        showSubnav: function (event) {
            var el = event.currentTarget;
            if (document.defaultView.getComputedStyle(el.children[1], false)['display'] == 'block') {
                el.children[1].style.display = 'none'
            } else {
                el.children[1].style.display = 'block'
            }
        }, hideSubnav: function (event) {
            var el = event.currentTarget;
            el.style.display = 'none'
        }, signOut() {
            var storage = window.localStorage;
            storage.removeItem('token');
            window.location.href = '/#/'
        }
    }
}
</script>

<style>
/***登录后的导航条**/

.header-nav-panel {
    height: 54px;
    background: #24292E;
    width: 100%
}

.header-nav {
    background: #24292E;
    height: 54px;
}

.header-nav-item {
    padding: 0 12px;
    line-height: 54px;
    position: relative
}

.header-nav-item a {
    color: #C8C9CB;
    font-weight: 500;
}

.header-nav-item a i:last-child {
    margin-left: -12px;
}

.header-nav-item a:hover {
    color: #FFFFFF
}

.header-login-search {
    height: 30px;
    outline: none;
    text-indent: 10px;
    border: none;
    background: #3F4448;
    width: 280px;
    border-radius: 4px;
    color: #FFFFE3;
    font-weight: 500
}

.header-login-search:focus {
    background: #4B4F53;
    border: none;
    outline: none;
    box-shadow: none;
}

.user-icon img {
    width: 20px;
    margin-top: 16px;
    border-radius: 2px;
}

.user-icon i {
    padding-left: 10px;
}



/***二级导航**/

.triangle-up {
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #CECFCF;
    position: absolute;
    top: -38px;
    right: 10px
}

.dropdown-menu {
    border: 1px solid #CECFCF;
    width: 180px;
    box-shadow: 0 0 6px #CECFCF;
    background: #FFFFFF;
    position: absolute;
    left: -120px;
    padding: 10px 0;
    border-radius: 4px;
    display: none;
    z-index: 1000
}

.dropdown-menu li {
    height: 30px;
    line-height: 30px;
    text-indent: 10px
}

.dropdown-menu li a {
    color: #586069!important;
    display: block
}

.dropdown-menu li a:hover {
    background: #0366D6;
    color: #FFFFFF!important
}



/***分割线**/

.dropdown-menu-divider {
    border-top: 1px solid #E1E4E8;
    height: 0!important;
    margin: 6px 0
}
</style>


