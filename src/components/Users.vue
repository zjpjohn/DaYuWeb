<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-3 users-img">
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/25541695?v=3&s=460" />
                </a>
                <br/>
                <p class="usres-name">
                    <span>DayuWeb</span>
                    <br/>
                    <br/>
                    <a href="#">添加个人简介</a>
                </p>
                <p class="text-center">
                    <a href="#" class="btn change-icon">修改资料</a>
                </P>
            </div>
            <div class="col-sm-9">
                <div class="users-nav">
                    <ul>
                        <li class="users-nav-active">
                            <a href="#">我的主页</a>
                        </li>
                        <li>
                            <router-link :to="{path:'/users/start'}">我的发布</router-link>
                            <span class="users-nav-tag">3</span>
                        </li>
                        <li>
                            <router-link :to="{path:'/users/start'}">我的收藏</router-link>
                            <span class="users-nav-tag">12</span>
                        </li>
                        <li>
                            <a href="#">我关注的</a>
                            <span class="users-nav-tag">6</span>
                        </li>
                        <li>
                            <a href="#">关注我的</a>
                            <span class="users-nav-tag">0</span>
                        </li>
                    </ul>
                </div>

                <router-view name="users"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>
/**Users个人信息**/

.users-img img {
    width: 240px;
    margin-top: 20px;
}

.change-icon {
    width: 100%;
    display: block
}

.usres-name {
    padding-top: 20px
}

.usres-name span {
    font-size: 18px;
    font-weight: 600
}

.usres-name a {
    color: #0366D6
}

.usres-name a:hover {
    text-decoration: underline
}



/***导航***/

.users-nav {
    height: 60px;
    margin-top: 20px;
    border-bottom: 1px solid #D1D5DA
}

.users-nav ul li {
    float: left;
    line-height: 56px;
    text-align: center;
    padding: 0 20px
}

.users-nav ul li a {
    color: #24292E;
    font-size: 16px;
}

.users-nav-tag {
    padding: 2px 6px;
    border-radius: 10px;
    background: #EDEDEE;
    cursor: pointer
}

.users-nav-active {
    border-bottom: 2px solid #E36209;
}
</style>
