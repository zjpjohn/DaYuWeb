<template>
    <div>
        <div v-for="img in imgs" class="upload-img" @mouseover="showDelete($event)" @mouseleave="hideDelete($event)">
            <img v-bind:src="img" />
            <div class="upload-delete" @click="deleteImg(img)">
                <i class="icon-trash"></i>
            </div>
        </div>
        <div class="img-upload hint--right pull-left" aria-label="点击我上传图片" v-show="show">
            <p class="text-center">
                <i class="icon-upload"></i>
            </p>
            <form>
                <input type="file" class="input-file" @change="upload($event)" accept="image/gif,image/jpeg,image/png" />
            </form>
        </div>
    
        <modal v-bind:show="modalShow" v-on:hideModal="hideModal" v-on:ok="ok" v-on:cancel="cancel">
            <span slot="header">危险操作提示</span>
            <p slot="body">你确定删除该图片？</p>
        </modal>
    </div>
</template>
<script>
import Modal from '../common/modal '
export default {
    data() {
        return {
            imgs: [],
            show: true,
            modalShow: false,/**传递给子组件的事件**/
            url: ''/**临时存放被删除的图片URL**/
        }
    }, methods: {
        upload: function (e) {
            var el = e.currentTarget;
            if (this.imgs.length + 1 > 5) {
                this.show = false;
                alert('您最多上传5张图片')
            } else {
                var file = el.files[0];
                var url = window.URL.createObjectURL(file);
                alert(this.imgs.has(url))
                if (!this.imgs.has(url)) {
                    this.imgs.push(url);
                }
                console.log(this.imgs)
            }
        }, showDelete: function (e) {
            var el = e.currentTarget;
            el.children[1].style.display = 'block'
        }, hideDelete: function (e) {
            var el = e.currentTarget;
            el.children[1].style.display = 'none'
        }, deleteImg: function (url) {
            this.modalShow = true;
            this.url = url;
            if (this.imgs.length <= 5) {
                this.show = true;
            }
        }, hideModal: function () {/**传递给子组件的事件**/
            this.modalShow = false
        }, ok: function () {
            this.imgs.remove(this.url);
            window.URL.revokeObjectURL(this.url);
            this.url = '';
            this.modalShow = false;
            console.log(this.imgs)
        }, cancel: function () {
            this.modalShow = false
        }
    }, components: {
        'modal': Modal
    }
}
</script>
<style>
.img-upload {
    width: 160px;
    height: 160px;
    border: 1px dashed #CCCCCC;
    border-radius: 4px;
    position: relative;
    margin-left: 10px;
    margin-top: 20px;
}

.input-file {
    height: 160px;
    overflow: hidden;
    outline: none;
    border: 1px solid #f00;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer
}

.img-upload p {
    font-size: 46px;
    padding-top: 20px;
    color: #CCCCCC
}

.upload-img {
    width: 160px;
    height: 160px;
    float: left;
    overflow: hidden;
    margin-left: 10px;
    border: 1px solid #CCCCCC;
    cursor: pointer;
    position: relative;
    margin-top: 20px;
}

.upload-img img {
    width: 160px
}

.upload-delete {
    position: absolute;
    left: 0;
    bottom: 0;
    background: #D73A49;
    width: 100%;
    font-size: 18px;
    text-align: center;
    padding: 4px;
    color: #FFFFFF;
    display: none;
    margin-top: 20px
}
</style>
