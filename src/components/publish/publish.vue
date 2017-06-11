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
            user:[]
        }
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
    }, components: {
        LoginHeader
    }
}
</script>
<style>

</style>
