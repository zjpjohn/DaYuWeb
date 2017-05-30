<template>
    <div class="container clear">
        <div class="col-sm-3 user-profile">
            <a href="#">
                <img src="https://avatars0.githubusercontent.com/u/25541695?v=3&s=460" />
            </a>
            <br/>
            <p class="user-bio">
                <span>DayuWeb</span>
                <br/>
                <br/>
                <a href="/#/user/settings/profile">添加个人简介</a>
            </p>
            <a href="/#/user/settings/profile" class="btn btn-default edit-profile">修改资料</a>
        </div>
        <div class="col-sm-9">
            <div class="user-topbar">
                <ul>
                    <router-link tag="li" :to="{path:'/user/overview'}" active-class="user-topbar-active">
                        <a>我的主页</a>
                    </router-link>
                    <router-link tag="li" :to="{path:'/user/mypublish'}" active-class="user-topbar-active">
                        <a>我的发布</a>
                        <span class="badge">16</span>
                    </router-link>
                    <router-link tag="li" :to="{path:'/user/start'}" active-class="user-topbar-active">
                        <a>我的收藏</a>
                        <span class="badge">12</span>
                    </router-link>
                    <router-link tag="li" :to="{path:'/user/following'}" active-class="user-topbar-active">
                        <a>我关注的</a>
                        <span class="badge">6</span>
                    </router-link>
                    <router-link tag="li" :to="{path:'/user/followers'}" active-class="user-topbar-active">
                        <a>关注我的</a>
                        <span class="badge">0</span>
                    </router-link>
                </ul>
            </div>
            <!--视图users-->
            <router-view name="user"></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
/**Users个人信息**/

.user-profile img {
    width: 240px;
    margin-top: 20px;
}

.user-bio {
    padding-top: 20px
}

/**个人简介**/

.user-bio span {
    font-size: 18px;
    font-weight: 600
}

.user-bio a {
    color: #0366D6
}

.user-bio a:hover {
    text-decoration: underline
}

.edit-profile {
    width: 80%;
    display: block
}
/***顶部导航***/

.user-topbar {
    height: 60px;
    margin-top: 20px;
    border-bottom: 1px solid #D1D5DA
}

.user-topbar ul li {
    float: left;
    line-height: 56px;
    text-align: center;
    padding: 0 20px
}

.user-topbar ul li a {
    color: #24292E;
    font-size: 16px;
}


.user-topbar-active {
    border-bottom: 2px solid #E36209;
}
</style>
