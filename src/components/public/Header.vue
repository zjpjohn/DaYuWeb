<template>
    <div class="container-fluid header-panel">
        <div class="container header">
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
                   <router-link :to="{path:'/users'}">去后台</router-link>
                </li>
                <li class="pull-right">
                    <a href="#">注册</a>
                </li>
                <li class="pull-right">
                    <router-link :to="{path:'/login'}">登录</router-link>
                </li>
                <li class="pull-right">
                    <input type="text" class="header-search" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style>
.header-panel {
    height: 80px;
    border-bottom: 1px solid #E1E4E8
}

.header ul li {
    padding: 0 12px;
    line-height: 80px;
    font-size: 16px
}

.header ul li a {
    color: #333333;
    font-weight: 500;
}

.header ul li a:hover {
    color: #666666
}

.header-search {
    height: 36px;
    outline: none;
    text-indent: 10px;
    border: 1px solid #D1D5DA;
    background: #FAFAFA;
    width: 200px;
    border-radius: 4px
}

.header-search:focus {
    background: #FFFFFF;
    border: 1px solid #2188FF;
    box-shadow: 0 0 6px #2188FF
}
</style>


