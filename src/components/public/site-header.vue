<template>
    <div class="container-fluid site-header-nav-panel">
        <div class="container site-header-nav">
            <nav>
                <ul>
                    <li class="pull-left">
                        <a href="#">大鱼互联</a>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{ path: '/' }">首页</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/goods/all'}">闲置</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/goods/all'}">求购</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/answer'}">提问</router-link>
                    </li>
                    <li class="pull-left">
                        <router-link :to="{path:'/user/overview'}">去后台</router-link>
                    </li>
                    <li class="pull-right">
                        <a href="#">注册</a>
                    </li>
                    <li class="pull-right">
                        <router-link :to="{path:'/login'}">登录</router-link>
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
    name: 'header'
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
    border-radius: 4px
}

.header-search-input:focus {
    background: #FFFFFF;
    border: 1px solid #2188FF;
    box-shadow: 0 0 6px #2188FF
}
</style>


