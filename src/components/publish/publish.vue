<template>
    <div class="container-fluid clear">
        <login-header :user="user"></login-header>
        <router-view name="publishs"></router-view>
    </div>
</template>

<script>
import LoginHeader from '../public/login-header'
export default {
    data() {
        return {
            user: []
        }
    }, mounted() {
        var that = this;
        var storage = window.localStorage;
        var token = storage['token'];
        if (token == null || token == '') {
            window.location.href = '/#/login'
        }
        this.axios.get('users', {
            params: {
                access_token: token
            }
        }).then(function (res) {
            if (res.data.status == "200") {
                that.user = res.data.user
            } else {
                window.location.href = '/#/login'
            }
        })
    }, components: {
        LoginHeader
    }
}
</script>
<style>

</style>
