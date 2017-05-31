<template>
  <div class="publishgoods clear">
    <div class="container">
      <div class="ms-8">
        <p class="note-info">
          <strong>
            <i class="icon-lightbulb"></i>提示</strong>
          带“&nbsp;
          <strong>*</strong>&nbsp;”的为必填项，为了能够顺利发布商品，请认真填写表单</p>
        <div class="form-group">
          <label>
            <strong>商品名称*</strong>
          </label>
          <br/>
          <input type="text" class="form-contral-input" />
        </div>
  
        <div class="form-group">
          <label>
            <strong>商品描述*</strong>
          </label>
          <br/>
          <textarea class="form-contral-textarea" rows="3" placeholder="曾经有一个..."></textarea>
        </div>
  
        <div class="form-group">
          <label>
            <strong>商品成色*</strong>
          </label>
          <br/>
          <input type="text" class="form-contral-input" />
        </div>
  
        <div class="form-group">
          <label>
            <strong>商品分类*</strong>
          </label>
          <br/>
          <select class="form-contral-select">
            <option>校园代步</option>
            <option>数码3C</option>
            <option>生活用品</option>
          </select>
        </div>
  
        <div class="form-group">
          <label>
            <strong>商品价格*</strong>
          </label>
          <br/>
          <input type="text" class="form-contral-input" />
        </div>
  
        <div class="form-group">
          <label>
            <strong>商品原价</strong>
          </label>
          <br/>
          <input type="text" class="form-contral-input" />
          <p class="note">商品原价不是必填项！</p>
        </div>
  
        <div class="form-group">
          <label>
            <strong>图片上传*</strong>
          </label>
          <p class="note text-info">你可以为该商品最多上传5张图片！</p>
  
          <upload>
          </upload>
        </div>
        <div class="form-group clear">
          <button type="submit" class="btn btn-info" @click="publishGoods($event)">{{btnMsg}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgUpload from '../public/upload'
export default {
  data() {
    return {
      btnMsg: '上传商品',
      upload: {
        server: "",
        api: "",
        params: {
          token: "test"
        },
        file: "",
        preview: true,
        crop: true,
        width: 400,
        height: 400,
        cancel: "取消",
        ok: "裁剪",
        success: (data) => {
          alert(data.length)
        }
      }
    }
  }, methods: {
    publishGoods: function (event) {
      var that = event.currentTarget;
      this.btnMsg = '上传商品中...，请稍等';
      that.disabled = true;
      that.style.cursor = 'not-allowed'
    }
  }, components: {
    'upload': ImgUpload
  }
}
</script>
<style>
.ms-8 {
  width: 66.6%;
  margin: auto;
  padding-top: 40px
}

.ms-8 input,
.ms-8 select,
.ms-8 textarea,
.ms-8 button {
  width: 100%
}
</style>
