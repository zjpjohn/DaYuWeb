<template>
    <div class="container-fluid register">
        <div class="ms-6">
            <p class="register-title">加入 dayuweb.cn</p>
            <p>更好的方式来处理你的闲置，不仅仅是闲置...</p>
            <ol class="steps">
                <li v-bind:class="{current:step1}">
                    <span class="pull-left">
                        <i class="icon-user"></i>
                    </span>
                    <span class="pull-left">
                        <strong>Step 1</strong>
                        <br/> 创建您的个人账户
                    </span>
                </li>
                <li v-bind:class="{current:step2}">
                    <span class="pull-left">
                        <i class="icon-stackexchange"></i>
                    </span>
                    <span class="pull-left">
                        <strong>Step 2</strong>
                        <br/> 邮箱激活
                    </span>
                </li>
                <li v-bind:class="{current:step3}">
                    <span class="pull-left">
                        <i class="icon-cog"></i>
                    </span>
                    <span class="pull-left">
                        <strong>Step 3</strong>
                        <br/> 完成
                    </span>
                </li>
            </ol>
            <div class="clear" v-show="step1">
                <from>
                    <h3>创建个人账户</h3>
                    <div class="form-group">
                        <label>
                            <strong>用户名</strong>
                        </label>
                        <br/>
                        <input type="text" class="form-contral-input" placeholder="dayuweb" />
                        <p class="note">
                            <i class="icon-emo-wink2"></i>
                            用户名是唯一的，由字母数字和下划线组成，这可以是你的名字或者组
                            <br/>织名的 拼音，
                            <strong>可以用户登录本站</strong>，如果你不填写的话，将有系统生成！</p>
                    </div>
                    <div class="form-group">
                        <label>
                            <strong>邮箱</strong>
                        </label>
                        <br/>
                        <input type="text" class="form-contral-input" placeholder="you@example.com" />
                        <p class="note">邮箱将是你以后登录本站的账号，该邮箱将用于接受通知信息，或者密码找回</p>
                    </div>
                    <div class="form-group">
                        <label>
                            <strong>密码</strong>
                        </label>
                        <br/>
                        <input type="text" class="form-contral-input" placeholder="*********" />
                        <p class="note">密码有数字、字母和下划线组成，不包含特殊字符，请妥善保管</p>
                    </div>
    
                    <div class="form-group">
                        <p class="note tos-info">
                            <strong>
                                <i class=" icon-lightbulb"></i>提示</strong>
                            在你点击“创建账号”的按钮之后，表明你遵守
                            <a href="#">服务条款</a>和
                            <a href="#">隐私条款</a>
                        </p>
                        <button type="submit" class="btn btn-success" @click="createAccount($event)">{{btnMsg}}</button>
                    </div>
                </from>
            </div>
    
            <div class="clear" v-show="step2">
                <h3>账户激活</h3>
                <p class="note-info">
                    <i class="icon-lightbulb"></i>
                    账户激活码已经发送到你的邮箱
                </p>
                <div class="form-group">
                    <label>
                        <strong>激活码</strong>
                    </label>
                    <br/>
                    <input type="text" class="form-contral-input" />
                </div>
    
                <div class="form-group">
                    <button type="button" class="btn btn-success" @click="activateAccount">{{btnActiveMsg}}</button>
                </div>
            </div>
    
            <div class="clear" v-show="step3">
                <h3>注册完成</h3>
                <h2 class="text-center text-info">
                    <i class="icon-emo-happy" style="font-size:120px"></i>
                    <br/> 账户注册完成
                </h2>
    
                <p class="text-center">
                    <router-link :to="{path:'/login'}" class="btn btn-info">去登录吧！</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            btnMsg: '创建账号',
            btnActiveMsg: '账号激活',
            step1: true,
            step2: false,
            step3: false
        }
    }, methods: {
        createAccount: function (event) {
            var that = event.currentTarget;
            this.btnMsg = '账号创建中...';
            that.disabled = true;
            that.style.cursor = 'not-allowed';
            setTimeout(() => {
                this.step1 = false;
                this.step2 = true;
            }, 2000);
        }, activateAccount: function () {
            this.btnActiveMsg = '账号激活中...'
            setTimeout(() => {
                this.step2 = false;
                this.step3 = true;
            }, 2000);

        }
    }
}
</script>
<style>
.register {
    background: linear-gradient(#EEEEEE, #FFFFFF);
    background-repeat: no-repeat;
    background-size: 100% 200px;
    padding-bottom: 40px;
    margin-top: -28px
}

.ms-6 {
    width: 60%;
    margin: auto
}

.register-title {
    font-size: 28px;
    padding-top: 20px
}

.steps {
    margin: 0;
    padding: 0;
    border: 1px solid #DFE2E5;
    border-radius: 3px;
    height: 80px
}

.current {
    background: #FFFFFF!important;
    color: #24293B!important
}

.current i {
    color: #0366D6
}

.steps li {
    float: left;
    width: 33%;
    border-right: 1px solid #DFE2E5;
    background: #FAFBFC;
    height: 80px;
    color: #C6CBD1
}

.steps li:last-child {
    border-right: none
}

.steps li span {
    margin-top: 20px
}

.steps li span:first-child i {
    font-size: 36px;
    margin-left: 20px;
}

.tos-info {
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    padding: 20px 0;
    width: 450px
}
</style>
