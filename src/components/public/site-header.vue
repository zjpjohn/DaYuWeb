<template>
    <div class="container-fluid site-header-nav-panel">
        <div class="container site-header-nav">
            <nav>
                <ul>
                    <li class="pull-left">
                        <a href="#">
                            <img src="../../assets/img/logo.png" style="height:70px" />
                        </a>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{ path: '/' }">首页</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/goods/all'}">闲置商品</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/goods/all'}">求购信息</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/answer'}">问题社区</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/answer'}">校园新闻</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/answer'}">同校活动</router-link>
                    </li>
                    <li class="pull-right login-li" v-if="login">
                        <router-link :to="{path:'/user/overview'}" class="hint--bottom" aria-label="个人中心">
                            <img src="https://avatars3.githubusercontent.com/u/25541695?v=3&s=40" />
                        </router-link>
                    </li>
                    <li class="pull-right site-header-link" v-else>
                        <router-link :to="{path:'/login'}">登录</router-link>
                        &nbsp;或&nbsp;
                        <router-link :to="{path:'/register'}">注册</router-link>
                    </li>
                    <li class="pull-right">
                        <input type="text" class="header-search-input" />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            login: false
        }
    }
}
</script>

<style>
.site-header-nav-panel {
    height: 70px;
    border-bottom: 1px solid #E1E4E8
}

.site-header-nav ul li {
    padding: 0 12px;
    line-height: 70px;
    font-size: 16px
}

.site-header-nav ul li a {
    color: #333333;
    font-weight: 500;
}

.site-header-nav ul li a:hover {
    color: #666666
}

.header-search-input {
    height: 30px;
    outline: none;
    text-indent: 10px;
    border: 1px solid #D1D5DA;
    background: #FAFAFA;
    width: 200px;
    border-radius: 3px
}

.header-search-input:focus {
    background: #FFFFFF;
    border: 1px solid #2188FF;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)
}


.login-li img {
    margin-top: 20px;
    height: 30px
}

.site-header-link a {
    color: #0366D6!important
}

.site-header-link a:hover {
    text-decoration: underline
}
</style>


