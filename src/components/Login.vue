<template>
    <div class="container">
        <h2 class="text-center">登录到大鱼互联</h2>
        <div class="errors" v-show="hasError">
            <span class="pull-right">
                <i class=" icon-cancel" @click="hideError"></i>
            </span>用户名或密码错误！
        </div>
        <div class="auth-form-body">
            <form @submit.prevent="validateBeforeSubmit">
                <div class="login-form-group">
                    <label for="email" class="form-label">Email</label>
                    <br/>
                    <input type="text" class="form-input" name="Email" v-model="email" placeholder="you@example.org" />
                </div>
                <div class="login-form-group">
                    <label for="pwd" class="form-label">密码</label>
                    <span class="pull-right forget-password">
                        <a href="#">忘记密码?</a>
                    </span>
                    <br/>
                    <input type="password" class="form-input" name="Password" v-model="password" placeholder="*********" />
                </div>
                <button type="submit" class="form-button">{{btnMsg}}</button>
            </form>
        </div>
    
        <div class="create-account">
            <p class="text-center">没有账户？
                <a href="#">马上注册</a>
            </p>
        </div>
    
        <div class="login-links">
            <p class="text-center">
                ©2017 大鱼互联
                <router-link :to="{ path: '/' }">首页</router-link>
                <router-link :to="{ path: '/' }">日志</router-link>
                <router-link :to="{ path: '/' }">团队</router-link>
                <router-link :to="{ path: '/' }">GitHub</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import { Validator } from 'vee-validate';
export default {
    name: 'login',
    data() {
        return {
            hasError: true,
            email: '',
            password: '',
            btnMsg: '登录'
        }
    }, methods: {
        validateBeforeSubmit: function () {
            if (this.email != '' && this.password != '') {
                this.btnMsg = '登录中...';
                alert(this.email + '&' + this.password)
                setTimeout(()=>{
                    location.href='/#/user/overview'
                }, 1000);
            }
        }, hideError: function () {
            this.hasError = false
        }
    }
}
</script>
<style>
h2 {
    margin-top: 100px
}

.text-center {
    text-align: center
}

.errors {
    border: 1px solid #DDC0C4;
    background: #FFDCE0;
    color: #B9591D;
    border-radius: 4px;
    margin: auto;
    width: 308px;
    padding: 16px
}

.auth-form-body,
.create-account {
    border: 1px solid #D8DEE2;
    border-radius: 4px;
    margin: auto;
    padding: 16px;
    width: 308px;
    margin-top: 20px
}

.create-account {
    padding: 0 20px;
}

.login-form-group {
    margin-top: 24px;
}

.form-label {
    font-weight: 500;
    line-height: 30px;
    font-size: 18px;
    display: inline-block
}

.form-input {
    width: 100%;
    height: 32px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #D1D5DA;
    text-indent: 10px
}

.form-input:focus {
    border: 1px solid #2188FF;
    box-shadow: 0 0 6px #2188FF
}

.form-button {
    width: 100%;
    margin-top: 20px;
    height: 36px;
    border: 1px solid #299A45;
    border-radius: 4px;
    background: #34d058;
    color: #FFFFFF;
    cursor: poiter
}

.form-button:hover {
    background: #28a745;
    cursor: pointer
}

.login-links {
    margin-top: 60px;
}

.login-links a {
    padding: 0 10px
}
</style>


