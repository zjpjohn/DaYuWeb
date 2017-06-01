<template>
  <div class="publishgoods clear">
    <div class="container">
      <div class="ms-8">
        <ol class="steps">
          <li v-bind:class="{current:step1}">
            <span class="pull-left">
              <i class="icon-emo-tongue"></i>
            </span>
            <span class="pull-left">
              <strong>Step 1</strong>
              <br/> 商品基本信息填写
            </span>
          </li>
          <li v-bind:class="{current:step2}">
            <span class="pull-left">
              <i class=" icon-emo-squint"></i>
            </span>
            <span class="pull-left">
              <strong>Step 2</strong>
              <br/> 商品图片上传
            </span>
          </li>
          <li v-bind:class="{current:step3}">
            <span class="pull-left">
              <i class="icon-emo-laugh"></i>
            </span>
            <span class="pull-left">
              <strong>Step 3</strong>
              <br/> 商品信息确认
            </span>
          </li>
        </ol>
  
        <!--第一步-->
        <div class="clear" v-show="step1">
          <from>
            <h3>商品基本信息</h3>
            <p class="note-info">
              <strong>
                <i class="icon-lightbulb"></i>提示:</strong>
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
            </div>
  
            <div class="form-group form-group-btn">
              <button type="button" class="btn btn-default pull-right" @click="step1Tpstep2">下一步</button>
            </div>
          </from>
        </div>
  
        <!--第二步-->
        <div class="clear" v-show="step2">
          <h3>商品图片上传</h3>
          <p class="note-info">
            <i class="icon-lightbulb"></i>
            你可以为该商品最多上传5张图片！图片格式为.png .jpg .gif
          </p>
          <div class="form-group">
            <label>
              <strong>图片上传*</strong>
            </label>
            <upload>
            </upload>
          </div>
  
          <div class="form-group clear form-group-btn">
            <button type="button" class="btn btn-default pull-right" @click="gotoStep3">下一步</button>
            <button type="button" class="btn btn-default" @click="gotoStep1">上一步</button>
          </div>
        </div>
        <!--第三步-->
        <div class="clear" v-show="step3">
          <h3>商品信息确认</h3>
          <h2 class="text-center text-info">
            <i class="icon-emo-happy" style="font-size:120px"></i>
            <br/> 账户注册完成
          </h2>
  
          <p class="text-center">
            <router-link :to="{path:'/login'}" class="btn btn-info">去登录吧！</router-link>
          </p>
          <div class="form-group form-group-btn">
            <button type="button" class="btn btn-default pull-left" @click="step3Tostep2">上一步</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgUpload from '../common/upload'
export default {
  data() {
    return {
      btnMsg: '上传商品',
      btnActiveMsg: '账号激活',
      step1: true,
      step2: false,
      step3: false
    }
  }, methods: {
    step1Tpstep2: function () {
      this.step1 = false;
      this.step2 = true
    }, gotoStep1: function () {
      this.step1 = true;
      this.step2 = false
    }, gotoStep3: function () {
      this.step2 = false;
      this.step3 = true
    }, step3Tostep2: function () {
      this.step3 = false;
      this.step2 = true
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
  padding-top: 10px
}

.ms-8 input,
.ms-8 select,
.ms-8 textarea {
  width: 100%
}

.form-group-btn {
  padding: 10px 20px;
  height: 40px;
}
</style>
