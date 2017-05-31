<template>
    <div>
        <div v-for="img in imgs">
             <img v-bind:src="img" />
        </div>      
        <div class="img-upload hint--right pull-left" aria-label="点击我上传图片">
            <form>
                <input type="file" class="input-file" @change="upload($event)" accept="image/gif,image/jpeg,image/png" />
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgs: []
        }
    }, methods: {
        upload: function (e) {
            var el = e.currentTarget;
            var file = el.files[0];
            var url = window.URL.createObjectURL(file)
            alert(url)
            this.imgs.push(url);
        }
    }
}
</script>
<style>
.img-upload {
    width: 160px;
    height: 160px;
    border: 1px dashed #CCCCCC;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    background: url("../../assets/img/upload.svg") no-repeat center
}

.input-file {
    height: 160px;
    overflow: hidden;
    outline: none;
    opacity: 0
}
</style>
