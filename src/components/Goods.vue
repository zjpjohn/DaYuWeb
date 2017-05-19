<template>
  <div>
    <!-- <v-subnav :subnavlist="subnavlist"></v-subnav>-->
    <div class="container">
      <!--商品列表-->
      <div class="row">
        <div class="col-sm-9">
          <p class="seacrch-end">为你找到 4,396 件物品</p>
          <goods-list></goods-list>
        </div>
        <!--分类列表-->
        <div class="col-sm-3 type-list">
          <ul>
            <li>
              物品分类
            </li>
            <li>
              <a href="#">
                <span class="pull-right">1,396</span> 校园代步</a>
            </li>
            <li>
              <a href="#">
                <span class="pull-right">2,864</span>数码3C</a>
            </li>
            <li>
              <a href="#">
                <span class="pull-right">272</span>考研书籍</a>
            </li>
            <li>
              <a href="#">
                <span class="pull-right">632</span>生活日常</a>
            </li>
            <li>
              <a href="#">
                <span class="pull-right">11</span>虚拟物品</a>
            </li>
          </ul>
        </div>
        <!--分页-->
        <div class="col-sm-12">
          <v-pager></v-pager>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Subnav from '@/components/public/Subnav'
import GoodsList from '@/components/public/goods-list'
import Pager from '@/components/common/pager'
export default {
  data() {
    return {
      msg: '',
      subnavlist: []
    }
  }, components: {
    'v-subnav': Subnav,
    'goods-list': GoodsList,
    'v-pager':Pager
  }, created() {
    this.msg = this.$route.params.type
  }, watch: {//监听参数变化
    '$route.params.type': function (newval, oldval) {
      this.msg = newval
    }
  }, mounted() {
    //渲染之前之前获取数据给子组件
    this.$http.get('../../static/subnav-data.json').then(function (response) {
      this.subnavlist = response.body.subnavlist;
    }, function (response) {
      alert('Error')
    })
  }, methods: {
  }
}
</script>

<style scoped>
.seacrch-end {
  font-size: 18px;
  line-height: 40px;
  font-weight: 600;
  color: #0366D6;
  border-bottom: 1px solid #E1E4E8
}

.type-list {
  border: 1px solid #E1E4E8;
  margin-top: 20px;
  padding: 20px;
  width: 80%;
  border-radius: 4px;
  height: 280px;
}

.type-list li {
  height: 30px;
}

.type-list li:first-child {
  font-weight: 500;
  font-size: 16px
}

.type-list li a {
  color: #586069;
  font-weight: 400;
  line-height: 30px;
  display: block;
  padding: 0 8px;
  border-radius: 2px;
}

.type-list li a:hover {
  background: #EAECEF;
}

.type-list li a span {
  font-weight: 500
}
</style>
