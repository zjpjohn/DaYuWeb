<template>
    <div>
        <div class="goods">
            <a href="#">
                <img src="https://images-cn.ssl-images-amazon.com/images/I/51t+r9R7kcL._AA160_.jpg" class="goods-img pull-left" />
            </a>
            <h3 class="goods-name">
                <a href="#">Dell 戴尔 Master</a>
            </h3>
            <p class="goods-title">
                <a href="#">【个人定制版】Dell 戴尔 Master Ins15-7567-1745P 15.6英寸游匣笔记本电脑</a>
            </p>
            <p class="goods-tags">
                <span class="goods-tag">笔记本</span>
                <span class="goods-tag">Dell</span>
                <span class="goods-tag">南阳师范学院</span>
                <span class="goods-tag">全新</span>
            </p>
            <p class="goods-price">
                ￥8,299.00
            </p>
        </div>
    
        <div class="goods">
            <a href="#">
                <img src="https://images-cn.ssl-images-amazon.com/images/I/51DHpojr2YL._AC_SR300,300_.jpg" class="goods-img pull-left" />
            </a>
            <h3 class="goods-name">
                <a href="#">HUAWEI 华为 荣耀畅玩6X</a>
            </h3>
            <p class="goods-title">
                <a href="#">HUAWEI 华为 荣耀畅玩6X BLN-AL10/BLN-AL20</a>
            </p>
            <p class="goods-tags">
                <span class="goods-tag">手机</span>
                <span class="goods-tag">华为</span>
                <span class="goods-tag">德玛西亚</span>
                <span class="goods-tag">全新</span>
            </p>
            <p class="goods-price">
                ￥1,299.00
            </p>
        </div>
        <div class="goods">
            <a href="#">
                <img src="https://images-cn.ssl-images-amazon.com/images/I/41wd6NnQ9QL._AC_SR300,300_.jpg" class="goods-img pull-left" />
            </a>
            <h3 class="goods-name">
                <a href="#">魅族 魅蓝note5</a>
            </h3>
            <p class="goods-title">
                <a href="#">魅族 魅蓝note5 全网通手机 香槟金 标准版(3G )</a>
            </p>
            <p class="goods-tags">
                <span class="goods-tag">手机</span>
                <span class="goods-tag">魅族</span>
                <span class="goods-tag">比尔吉沃特</span>
                <span class="goods-tag">全新</span>
            </p>
            <p class="goods-price">
                ￥999.00
            </p>
        </div>
    
        <div class="goods">
            <a href="#">
                <img src="https://images-cn.ssl-images-amazon.com/images/I/41UoOEmhkuL._AC_SR300,300_.jpg" class="goods-img pull-left" />
            </a>
            <h3 class="goods-name">
                <a href="#">iOttie Easy One Touch 3(V2.0)车载装置支架，完美</a>
            </h3>
            <p class="goods-title">
                <a href="#">iOttie Easy One Touch 3(V2.0)车载装置支架，完美，iOttie Easy One Touch 3(V2.0)车载装置支架，完美</a>
            </p>
            <p class="goods-tags">
                <span class="goods-tag">手机</span>
                <span class="goods-tag">Touch</span>
                <span class="goods-tag">黑色玫瑰</span>
                <span class="goods-tag">9成新</span>
            </p>
            <p class="goods-price">
                ￥128.00
            </p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.goods {
    margin-top: 20px;
    float: left;
    border-bottom: 1px solid #E1E4E8;
    width: 100%
}

.goods:hover {
    box-shadow: 0 0 6px #5A9BEA;
}


/***图片****/

.goods-img {
    height: 200px;
    padding: 6px 40px 6px 20px;
}

.goods-price,
.goods-title,
.goods-tags,
.goods-name {
    padding-left: 40px
}

.goods-title a {
    color: #333333
}






/**标签**/

.goods-tag {
    padding: 4px 6px;
    background: #F1F8FF;
    color: #0366D6;
    font-size: 12px;
    cursor: pointer;
    margin-left: 10px
}

.goods-tag:first-child {
    margin-left: 0
}

.goods-tag:hover {
    background: #DDEEFF
}

.goods-price {
    color: #333333;
    font-size: 18px;
    font-weight: 600
}
</style>
