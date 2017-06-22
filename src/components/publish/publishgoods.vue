<template>
  <div>
    <alert></alert>
    <div class="publishgoods clear" v-title="'大鱼互联-发布商品'">
  
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
                <br/> 商品发布完成
              </span>
            </li>
          </ol>
  
          <!--第一步-->
          <div class="clear" v-show="step1">
            <form @submit.prevent="step1Tpstep2()">
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
                <input type="text" class="form-contral-input" v-bind:class="{'form-contral-input':true,'input-error': errors.has('goodsName') }" placeholder="变形金刚5" name="goodsName" v-validate="{rules:{required: true,max:20}}" data-vv-as="商品名称" />
                <br/>
                <br/>
                <span v-show="errors.has('goodsName')" class="form-contral-error">
                  <i class="triangle-up-error"></i>
                  {{ errors.first('goodsName') }}
                </span>
  
              </div>
  
              <div class="form-group">
                <label>
                  <strong>商品描述*</strong>
                </label>
                <br/>
                <textarea class="form-contral-textarea" rows="4" v-bind:class="{'form-contral-input':true,'input-error': errors.has('goodsDescription') }" placeholder="商品描述" name="goodsDescription" v-validate="{rules:{required: true,max:100}}" data-vv-as="商品描述">
                </textarea>
                <br/>
                <br/>
                <span v-show="errors.has('goodsDescription')" class="form-contral-error">
                  <i class="triangle-up-error"></i>
                  {{ errors.first('goodsDescription') }}
                </span>
  
              </div>
  
              <div class="form-group">
                <label>
                  <strong>商品成色*</strong>
                </label>
                <br/>
                <select class="form-contral-select">
                  <option>全新</option>
                  <option>9成新</option>
                  <option>8成新</option>
                  <option>5成新</option>
                  <option>Old</option>
                </select>
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
                <input type="text" class="form-contral-input" v-bind:class="{'form-contral-input':true,'input-error': errors.has('goodsPrice') }" placeholder="商品描述" name="goodsPrice" v-validate="{rules:{required: true,max:100}}" data-vv-as="商品价格" />
                <br/>
                <br/>
                <span v-show="errors.has('goodsPrice')" class="form-contral-error">
                  <i class="triangle-up-error"></i>
                  {{ errors.first('goodsPrice') }}
                </span>
              </div>
  
              <button type="button" class="btn btn-success" @click="step1Tpstep2">下一步</button>
            </form>
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
  
            <div class="form-group clear" style="padding-top:20px">
              <button type="button" class="btn btn-success" @click="gotoStep3">下一步</button>
            </div>
          </div>
          <!--第三步-->
          <div class="clear" v-show="step3">
            <h3>商品发布完成</h3>
            <h2 class="text-center text-info">
              <i class="icon-emo-happy" style="font-size:120px"></i>
              <br/> 商品发布完成
            </h2>
  
            <p class="text-center">
              <router-link :to="{path:'/login'}" class="btn btn-info">去看看吧！</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgUpload from '../common/upload'
import Alert from '../common/alert'
export default {
  data() {
    return {
      btnMsg: '上传商品',
      btnActiveMsg: '账号激活',
      step1: true,
      step2: false,
      step3: false,
      goods: {
        goodsName: '',
        goodsDescription: '',
        goodsPrice: ''
      }
    }
  }, methods: {
    step1Tpstep2() {
      this.$validator.validateAll().then(() => {
        this.step1 = false;
        this.step2 = true;
        alert('From Submitted!');
      }).catch(() => {
        alert('Correct them errors!');
      });

    }, gotoStep3() {
      this.step2 = false;
      this.step3 = true
    }
  }, components: {
    'upload': ImgUpload,
    Alert
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
