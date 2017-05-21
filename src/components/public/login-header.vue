<template>
    <div class="container-fluid header-nav-panel">
        <div class="container">
            <ul>
                <li class="pull-left header-nav-item">
                    <a href="#">大鱼互联</a>
                </li>
                <li class="pull-left header-nav-item">
                    <input type="text" class="header-login-search" placeholder="Search" />
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/goods/all'}">发布商品</router-link>
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/goods/all'}">发布求购</router-link>
                </li>
                <li class="pull-left header-nav-item">
                    <router-link :to="{path:'/answer'}">提问</router-link>
                </li>
    
                <li class="pull-right user-icon header-nav-item" title="查看个人资料" @click="showSubnav($event)">
                    <a href="javascript:void(0)">
                        <img src="https://avatars3.githubusercontent.com/u/25541695?v=3&s=40" />
                    </a>
                    <ul class="dropdown-menu" @mouseleave="hideSubnav($event)">
                        <li class="triangle-up"></li>
                        <li>您好，毕小山</li>
                        <li class="dropdown-menu-divider"></li>
                        <li>
                            <a href="#">个人资料</a>
                        </li>
                        <li>
                            <a href="#">我的收藏</a>
                        </li>
                        <li>
                            <a href="#">帮助</a>
                        </li>
                        <li class="dropdown-menu-divider"></li>
                        <li>
                            <a href="/#/user/settings/profile">设置</a>
                        </li>
                        <li>
                            <a href="#">退出</a>
                        </li>
                    </ul>
                </li>
                <li class="pull-right header-nav-item" @click="showSubnav($event)">
                    <a href="javascript:void(0)">
                        <i class="icon-plus"></i>
                        <i class="icon-down-dir"></i>
                    </a>
                    <ul class="dropdown-menu" @mouseleave="hideSubnav($event)">
                        <li class="triangle-up"></li>
                        <li>
                            <a href="#">发布商品</a>
                        </li>
                        <li>
                            <a href="#">发布求购</a>
                        </li>
                        <li>
                            <a href="#">提问</a>
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
        }
    }
}
</script>

<style>
/***登录后的导航条**/

.header-nav-panel {
    height: 54px;
    border-bottom: 1px solid #E1E4E8;
    background: #24292E
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
    box-shadow: none
}

.user-icon img {
    width: 24px;
    margin-top: 12px;
    border-radius: 2px;
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


