<template>
    <div v-title="goods.name">
        <site-header></site-header>
        <div class="container ">
            <div class="goods-details clear">
                <div class="col-sm-6">
                    <img :src="[goods.imgs]" />
                </div>
                <div class="col-sm-6">
                    <div class="goods-details-container">
                        <div class="pull-right" style="margin-top:10px;margin-right:10px">
                            <button-group></button-group>
                        </div>
    
                        <h3>
                            {{goods.name}}
                        </h3>
                        <hr style="borde:none;border-top:1px solid #D5D8DA" />
                        <p class="goods-details-info">
                            {{goods.descript}}
                            <br/> 成色：{{goods.quality}}
                            <br/> 价格：
                            <strong>￥{{goods.price}}</strong>
                            <br/> 主人：
                            <router-link :to="{path:'/goods'}" class="hint--right" aria-label="查看卖家公开信息"> {{goods.owner}}</router-link>
                            <br/> 上传：{{goods.create_at}}
                            <br/>分类：
                            <router-link :to="{path:'/goods'}" class="hint--right" aria-label="查看该分类产品"> {{goods.type_name}}</router-link>
                        </p>
                        <button class="btn btn-info">购买</button>
                        <p class="note-info">
                            <strong>
                                <i class="icon-lightbulb"></i>大鱼互联提醒你:
                            </strong>
                            在交易的时候把约见地点定在校园，提前商讨好交易详情，准时守约，祝你购物愉快
                        </p>
                    </div>
                </div>
                <div class="col-sm-9 pull-left" style="margin-top:40px">
                    <panel :hasFooter="false">
                        <span slot="panel-header">商品详情</span>
                        <div slot="panel-body">
                            <img :src="[goods.imgs]" />
                        </div>
                    </panel>
                    <div>
                        评论
                    </div>
                </div>
                <div class="col-sm-3 pull-left" style="margin-left:1%;margin-top:40px">
                    <panel :hasFooter="false">
                        <span slot="panel-header">商品推荐</span>
                        <div slot="panel-body">
                            <img :src="[goods.imgs]" />
                        </div>
                    </panel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Panel from '../common/panel'
import ButtonGroup from '../common/button-group'
import SiteHeader from '../public/site-header'
export default {
    data() {
        return {
            id: '',
            goods: []
        }
    }, components: {
        Panel,
        ButtonGroup,
        SiteHeader
    }, watch: {
        //监听参数变化  
        '$route.params.id': function (newval, oldval) {
            this.id = newval
        }
    }, created() {
        this.$Progress.start()
    }, mounted() {
        this.id = this.$route.params.id;
        this.axios.get('goods/' + this.id).then((res) => {
            this.$Progress.finish();
            if (res.data.status == "200") {
                this.goods = res.data;
            }
        }).catch((error) => {
            this.$Progress.fail();
        })
    }, methods: {
        star() {
            if (this.$store.state.token != null) {
                alert('发送请求');
            } else {
                var url = this.$route.path;
                alert(url);
                window.location.href = '/login?url=' + url
            }
        }
    }
}
</script>
<style scoped>
.goods-details {
    height: 380px;
    border: 1px solid #D5D8DA;
    border-radius: 4px;
}

.col-sm-6 {
    float: left;
    width: 50%;
}

.goods-details-container {
    padding: 10px
}

.goods-details-info {
    line-height: 30px
}
</style>


