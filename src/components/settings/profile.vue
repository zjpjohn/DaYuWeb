<template>
    <div v-title="'大鱼互联-个人公开资料'">
        <p class="subheader-heading">个人公开资料</p>
        <div class="mt-2">
            <div class="form-group">
                <label>昵称</label>
                <br/>
                <input type="text" class="form-contral-input" placeholder="例如：至尊宝" :value="[user.User_Nicknamestr]" />
            </div>
            <div class="form-group">
                <label>性别</label>
                <br/>
                <select class="form-contral-select">
                    <option value="男" :selected="[user.User_Genderchar=='男'?'selected':'']">至尊宝</option>
                    <option value="女" :selected="[user.User_Genderchar=='女'?'selected':'']"> 彩霞</option>
                </select>
            </div>
            <div class="form-group">
                <label>生日</label>
                <br/>
                <input type="text" class="form-contral-input" placeholder="格式：YYYY-MM-DD" :value="user.User_Birthdaydate" />
            </div>
            <div class="form-group">
                <label>学校</label>
                <br/>
                <select class="form-contral-select">
                    <option>德玛西亚学院</option>
                    <option>超神学院</option>
                </select>
            </div>
            <div class="form-group">
                <label>地址</label>
                <br/>
                <input type="text" class="form-contral-input" :value="user.User_Adress" />
            </div>
            <div class="form-group">
                <label>爱好</label>
                <br/>
                <input type="text" class="form-contral-input" />
            </div>
            <div class="form-group">
                <label>个性签名</label>
                <br/>
                <textarea class="form-contral-textarea" rows="4" placeholder="曾经有一个...">{{user.User_Biostr}}</textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-default">保存设置</button>
            </div>
        </div>
        <div class="mt-1 user-profile">
            <a href="#">
                <img src="https://avatars0.githubusercontent.com/u/25541695?v=3&s=460" />
            </a>
            <a href="#" class="btn btn-default edit-profile">修改图像</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: []
        }
    }, created() {

    }, mounted() {
        if (this.$store.state.token) {
            this.axios.get('users', {
                params: {
                    access_token: this.$store.state.token
                }
            }).then((res) => {
                if (res.data.status == "200") {
                    this.user = res.data.user;
                    console.log(this.user)
                }
            })
        }
    }
}
</script>
<style>
.mt-2 {
    width: 66%;
    float: left;
    padding-bottom: 20px;
}

.mt-1 {
    width: 33%;
    float: left;
}

.subheader-heading {
    font-size: 20px;
    font-weight: 300;
    border-bottom: 1px solid #E1E4E8;
    line-height: 40px;
    color: #24292E
}





/***表单***/

.form-contral-textarea {
    width: 440px;
    outline: none;
    border-radius: 4px;
    outline: none;
    border: 1px solid #D1D5DA;
    background: #FAFBFC;
    text-indent: 4px;
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

.form-contral-textarea:focus {
    border: 1px solid #2188FF;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)
}

.form-contral-select {
    width: 440px;
    height: 36px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #D1D5DA;
    background: #FAFBFC;
    text-indent: 4px
}

.form-contral-select:focus {
    border: 1px solid #2188FF;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3)
}
</style>
