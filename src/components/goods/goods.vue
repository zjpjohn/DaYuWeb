<template>
  <div>
    <site-header></site-header>
    <div class="container clear">
      <div class="col-sm-12">
        <div class="pull-right">
          <dropdown :types="types"></dropdown>
        </div>
        <h3 class="search-result">
          为你找到 4,396 件物品
        </h3>
        <!--商品列表组件-->
        <goods-list v-bind:goodses="goodses"></goods-list>
        <!--分页组件-->
        <pager></pager>
      </div>
    </div>
  </div>
</template>
<script>
import SiteHeader from '@/components/public/site-header'
import GoodsList from '@/components/goods/goods-list'
import Pager from '@/components/common/pager'
import Dropdown from '@/components/common/dropdown'

export default {
  data() {
    return {
      goodses: [],
      types: []
    }
  }, components: {
    GoodsList,
    Pager,
    Dropdown, SiteHeader
  }, created() {
    this.$Progress.start()
  }, mounted() {
    this.axios.get('goods', { params: { page: 1, per_page: 10 } }).then((res) => {
      if (res.data.status == "200") {
        this.goodses = res.data.Goods;
      } else {
        alert("没找到");
      }
    }).catch((error) => {

    });

    this.axios.get('goodstype').then(
      (res) => {
        this.$Progress.finish();
        if (res.data.status == "200") {
          this.types = res.data.types;
        }
      }).catch((error) => {
        this.$Progress.fail();
      });

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
