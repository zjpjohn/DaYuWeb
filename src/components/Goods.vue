<template>
  <div>
    <div class="container clear">
      <div class="col-sm-9">
        <h3 class="search-result">为你找到 4,396 件物品</h3>
        <!--商品列表组件-->
        <goods-list></goods-list>
        <!--分页组件-->
        <v-pager></v-pager>
      </div>
      <!--分类列表-->
      <div class="col-sm-3 filter">
        <ul class="filter-list">
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
      subnavlist: []
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
.search-result {
  line-height: 40px;
  font-weight: 600;
  color: #0366D6;
  border-bottom: 1px solid #E1E4E8
}

.filter {
  margin-top: 60px;
}

.filter-list {
  padding: 10px;
  border: 1px solid #E1E4E8;
  border-radius: 4px;

  width: 74%;
  margin: auto
}

.filter-list li {
  height: 30px;
}

.filter-list li:first-child {
  font-weight: 500;
  font-size: 16px
}

.filter-list li a {
  color: #586069;
  font-weight: 400;
  line-height: 30px;
  display: block;
  padding: 0 8px;
  border-radius: 2px;
}

.filter-list li a:hover {
  background: #EAECEF;
}

.filter-list li a span {
  font-weight: 500
}

</style>
