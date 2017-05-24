<template>
    <div>
        <div class="sm-4">
            <div class="goods-item">
                <p class="text-center">
                    <a href="#">
                        <img src="https://images-cn.ssl-images-amazon.com/images/I/41wd6NnQ9QL._AC_SR300,300_.jpg" class="goods-item-img" />
                    </a>
                </p>
                <p class="goods-item-title text-center">
                    <a href="#">魅族 魅蓝note5</a><br/>
                     这里的信息根据后台扩展
                </p>
                <p class="goods-item-price text-center">
                    <a href="#">￥1290.00</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.sm-4{
    width: 33.3%;
    float: left;
}
.goods-item{
    width: 80%;
    margin: auto;
    padding: 10px;
    background: #FFFFFF
}
.goods-item:hover{
    box-shadow: 0 0 10px #E9E9E9
}
.goods-item-img {
    width: 80%
}
.goods-item-title a{
    color: #333
}
.goods-item-price a{
    color: #E14949;
    font-weight: 600
}
</style>
