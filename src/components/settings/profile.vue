<template>
    <div>
        <p class="subheader-heading">个人信息</p>
        <div class="mt-2">
            <div class="form-group">
                <label>Name</label>
                <br/>
                <input type="text" class="form-contral-input" />
            </div>
            <div class="form-group">
                <label>姓名</label>
                <br/>
                <input type="text" class="form-contral-input" />
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
</style>
