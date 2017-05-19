<template>
    <div class="container">
        <h2 class="text-center">登录到大鱼互联</h2>
        <div v-show="errors.has('Email')" class="errors">
            {{ errors.first('Email') }}
        </div>
        <div v-show="errors.has('Password')" class="errors">
            {{ errors.first('Password') }}
        </div>
        <div class="login">
            <form @submit.prevent="validateBeforeSubmit">
                <label for="email">Email</label>
                <br/>
                <input type="text" v-validate="'required|email'" name="Email" v-model="email" />
                <br/>
                <br/>
                <label for="pwd">密码</label>
                <span class="pull-right">
                    <a href="#">忘记密码?</a>
                </span>
                <br/>
                <input type="password" v-validate="{ rules: { required: true, min: 8 } }" name="Password" v-model="password" />
                <br/>
                <button type="submit">{{btnMsg}}</button>
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
            email: '',
            password: '',
            btnMsg: '登录'
        }
    }, methods: {
        validateBeforeSubmit: function () {
            this.$validator.validateAll().then(() => {
                alert(this.email + '&' + this.password);
                this.btnMsg = '登录中...';
            })
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
    width: 30%;
    padding: 12px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px
}

.login,
.create-account {
    border: 1px solid #D8DEE2;
    border-radius: 4px;
    margin: auto;
    padding: 24px;
    width: 30%;
}

.create-account {
    padding: 0;
    margin-top: 20px
}

.login label {
    font-weight: 600;
    line-height: 30px;
    font-size: 18px
}

.login input {
    width: 100%;
    height: 34px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #D1D5DA;
    text-indent: 10px
}

.login input:focus {
    border: 1px solid #2188FF;
    box-shadow: 0 0 6px #2188FF
}

.login button {
    width: 100%;
    margin-top: 10px;
    height: 36px;
    border: 1px solid #0358B7;
    border-radius: 4px;
    background: #0366D6;
    color: #FFFFFF
}

.login button:hover {
    background: #0558B4;
    cursor: pointer
}

.login-links {
    margin-top: 60px;
}

.login-links a {
    padding: 0 10px
}
</style>


