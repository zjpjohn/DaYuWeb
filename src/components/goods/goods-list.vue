<template>
    <div>
        <div class="col-sm-3" v-for="goods in goodses">
            <div class="goods-item">
                <p class="text-center">
                    <a :href="['/goods/'+goods.Goods_Idstr]">
                        <img :src="[goods.Goods_Imgstr]" class="goods-item-img" />
                    </a>
                </p>
                <p class="goods-item-title text-center">
                    <a href="#">{{goods.Goods_Namestr}}</a>
                </p>
                <p class="text-center">
                    <a href="#">{{goods.Goods_Descriptionstr}}</a>
                </p>
                <p class="text-center">
                    <span class="label">{{goods.Goos_Quality}}</span>
                </p>
                <p class="goods-item-price text-center">
                    <a href="#">
                        <strong>￥{{goods.Goods_Priceint}}</strong>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        goodses: {
            Type: Array
        }
    }
}
</script>
<style scoped>
.col-sm-3 {
    width: 25%;
    float: left;
}

.goods-item {
    width: 80%;
    margin: auto;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    margin-top: 10px;
    border-radius: 4px;
}

.goods-item:hover {
    box-shadow: 0 10px 6px #EEEEEE
}

.goods-item-img {
    width: 80%;
}

.goods-item-title a {
    color: #24292E
}

.goods-item-price a {
    color: #0366D6;
    font-size: 18px
}






/**标签**/

.label {
    padding: 4px 6px;
    background: #F1F8FF;
    color: #0366D6;
    font-size: 12px;
    cursor: pointer;
    margin-left: 10px
}

.label:first-child {
    margin-left: 0
}

.label:hover {
    background: #DDEEFF
}
</style>
