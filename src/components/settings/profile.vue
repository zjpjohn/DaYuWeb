<template>
    <div>
        <p class="subheader-heading">个人信息</p>
        <div class="mt-2">
            <div class="form-group">
                <label>昵称</label>
                <br/>
                <input type="text" class="form-contral-input" placeholder="例如：至尊宝" />
            </div>
            <div class="form-group">
                <label>性别</label>
                <br/>
                <select class="form-contral-select">
                    <option>至尊宝</option>
                    <option>彩霞</option>
                </select>
            </div>
            <div class="form-group">
                <label>生日</label>
                <br/>
                <input type="text" class="form-contral-input" placeholder="格式：YYYY-MM-DD" />
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
                <input type="text" class="form-contral-input" />
            </div>
            <div class="form-group">
                <label>爱好</label>
                <br/>
                <input type="text" class="form-contral-input" />
            </div>
            <div class="form-group">
                <label>个性签名</label>
                <br/>
                <textarea class="form-contral-textarea" rows="4" placeholder="曾经有一个..."></textarea>
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

}
</script>
<style>
.mt-2 {
    width: 66.6%;
    float: left;
    padding-bottom: 20px
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
    box-shadow: 0 0 6px #2188FF
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
    box-shadow: 0 0 6px #2188FF;
}
</style>
