<template>
    <div>
        <div class="container-fluid">
            <login-header :user="user"></login-header>
        </div>
        <div class="container clear">
            <div class="col-sm-3 user-profile">
                <a href="#">
                    <img src="https://avatars0.githubusercontent.com/u/25541695?v=3&s=460" />
                </a>
                <br/>
                <p class="user-bio">
                    <span>{{user.User_Namestr}}</span>
                    <br/>
                    <br/>
                    <a href="/#/user/settings/profile" v-if="user.User_Biostr!=null && user.User_Biostr!=''">{{user.User_Biostr}}</a>
                    <a :href="['/'+name+'/settings/profile']" v-else>添加个人简介</a>
                </p>
                <ul class="user-adress">
                    <li v-if="user.User_Adress!=null && user.User_Adress!=''">
                        <i class="icon-location"></i>&nbsp;{{user.User_Adress}}
                    </li>
                    <li v-if="user.User_Emailstr!=null && user.User_Emailstr!=''">
                        <i class="icon-mail-alt"></i>
                        <a href="#">&nbsp;{{user.User_Emailstr}}</a>
                    </li>
                    <li v-if="user.User_Phonestr!=null && user.User_Phonestr!=''">
                        <i class="icon-link"></i>&nbsp;{{user.User_Phonestr}}
                    </li>
                </ul>
                <a :href="['/'+name+'/settings/profile']" class="btn btn-default edit-profile" v-show="user.User_Phonestr==null || user.User_Emailstr==null">修改资料</a>
            </div>
            <div class="col-sm-9">
                <div class="user-topbar">
                    <ul>
                        <router-link tag="li" :to="{path:'/'+this.name+'/overview'}" active-class="user-topbar-active">
                            <a>我的主页</a>
                        </router-link>
                        <router-link tag="li" :to="{path:'/'+this.name+'/mypublish'}" active-class="user-topbar-active">
                            <a>我的发布</a>
                            <span class="badge">16</span>
                        </router-link>
                        <router-link tag="li" :to="{path:'/'+this.name+'/start'}" active-class="user-topbar-active">
                            <a>我的收藏</a>
                            <span class="badge">12</span>
                        </router-link>
                        <router-link tag="li" :to="{path:'/'+this.name+'/following'}" active-class="user-topbar-active">
                            <a>我关注的</a>
                            <span class="badge">6</span>
                        </router-link>
                        <router-link tag="li" :to="{path:'/'+this.name+'/followers'}" active-class="user-topbar-active">
                            <a>关注我的</a>
                            <span class="badge">0</span>
                        </router-link>
                    </ul>
                </div>
                <!--视图users-->
                <router-view name="user"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import LoginHeader from '../public/login-header'
import * as types from '@/store/types.js'
export default {
    data() {
        return {
            user: [],
            name:''
        }
    }, created() {
        this.$Progress.start();
        this.name=localStorage.name
    },watch(){
        
    },
    mounted() {
        if (this.$store.state.token == null || this.$store.state.token == '') {
            window.location.href = '/login'
        } else {
            this.axios.get('users', {
                params: {
                    access_token: this.$store.state.token
                }
            }).then((res) => {
                this.$Progress.finish()
                if (res.data.status == "200") {
                    this.$store.commit(types.USER, res.data.user);
                    this.user = this.$store.state.user;
                } else {
                    window.location.href = '/login'
                }
            }).catch((error) => {
                this.$Progress.fail()
            })
        }

    }, components: {
        LoginHeader
    }
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

.user-adress {
    border-top: 1px solid #EAECEF;
    width: 80%;
    padding-top: 20px
}

.user-adress li {
    line-height: 30px;
}

.user-adress li a:hover {
    text-decoration: underline
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
