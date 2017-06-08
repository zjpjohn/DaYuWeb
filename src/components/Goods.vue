<template>
  <div>
    <div class="container clear">
      <div class="col-sm-9">
        <h3 class="search-result">为你找到 4,396 件物品</h3>
        <!--商品列表组件-->
        <goods-list v-bind:goodses="goodses"></goods-list>
        <!--分页组件-->
        <v-pager></v-pager>
      </div>
      <!--分类列表-->
      <div class="col-sm-3 filter">
        <ul class="filter-list">
          <li>
            <strong>物品分类</strong>
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
          <li>
            <a href="#">
              <span class="pull-right">11</span>手机配件</a>
          </li>
          <li>
            <a href="#">
              <span class="pull-right">11</span>的嘛西亚</a>
          </li>
          <li>
            <a href="#">
              <span class="pull-right">11</span>超级二哈</a>
          </li>
          <li>
            <a href="#">
              <span class="pull-right">310</span>其他</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import GoodsList from '@/components/goods/goods-list'
import Pager from '@/components/common/pager'
export default {
  data() {
    return {
      msg: '',
      subnavlist: [],
      goodses: []
    }
  }, components: {
    'goods-list': GoodsList,
    'v-pager': Pager
  }, created() {
    this.msg = this.$route.params.type
  }, watch: {//监听参数变化
    '$route.params.type': function (newval, oldval) {
      this.msg = newval
    }
  }, mounted() {
    var that = this;
    this.axios.get('goods', { params: { page: 1, per_page: 10 } }).then(function (res) {   
      if (res.data.status == "200") {    
        that.goodses = res.data.Goods;
      } else {
        alert("没找到");
      }
    })
  }, methods: {
  }
}
</script>

<style>
.search-result {
  line-height: 40px;
  font-weight: 600;
  color: #0366D6;
  border-bottom: 1px solid #E1E4E8
}

.filter {
  margin-top: 20px;
}

.filter-list {
  padding: 10px;
  border: 1px solid #E1E4E8;
  border-radius: 4px;
  width: 74%;
  margin: auto
}

.filter-list li {
  height: 34px;
}

.filter-list li a {
  color: #586069;
  line-height: 34px;
  display: block;
  padding: 0 8px;
  border-radius: 2px
}

.filter-list li a:hover {
  background: #EAECEF;
}
</style>
