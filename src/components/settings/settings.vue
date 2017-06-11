<template>
    <div>
        <div class="container-fluid">
            <login-header :user="user"></login-header>
        </div>
        <div class="container clear">
            <div class="col-sm-3">
                <list-group :title="title" :listgroup="listgroup"></list-group>
            </div>
            <div class="col-sm-9">
                <div class="settings">
                    <router-view name="settings"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import listGroup from '../common/list-group'
import LoginHeader from '../public/login-header'

export default {
    data() {
        return {
            title: '设置中心',
            listgroup: [{
                'path': 'profile',
                'name': '基本信息'
            }, {
                'path': 'account',
                'name': '密码设置'
            }, {
                'path': 'emails',
                'name': '邮箱设置'
            }, {
                'path': 'connection',
                'name': '联系方式'
            }, {
                'path': 'emails',
                'name': '登录安全'
            }, {
                'path': 'emails',
                'name': '消息通知'
            }],
            user: []
        }
    }, methods: {

    }, components: {
        'list-group': listGroup,
        LoginHeader
    }, mounted() {
        if (this.$store.state.token) {
            this.axios.get('users', {
                params: {
                    access_token: this.$store.state.token
                }
            }).then((res) => {
                if (res.data.status == "200") {
                    this.user = res.data.user
                }
            })
        }
    }
}
</script>
<style>
.settings {
    padding: 0 20px;
    min-height: 600px
}
</style>
