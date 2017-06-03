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
                    <a href="#">魅族 魅蓝note5</a>
                </p>
                <p class="text-center">
                    <span class="label">9成新</span>
                    <span class="label">南阳师范学院</span>
                </p>
                <p class="goods-item-price text-center">
                    <a href="#">
                        <strong>￥1290.00</strong>
                    </a>
                </p>
            </div>
        </div>
          <div class="sm-4">
            <div class="goods-item">
                <p class="text-center">
                    <a href="#">
                        <img src="https://img12.360buyimg.com/mobilecms/s300x300_jfs/t3286/276/461326510/67641/7bb2686b/57b5316bNe7190151.jpg!q70.jpg" class="goods-item-img" />
                    </a>
                </p>
                <p class="goods-item-title text-center">
                    <a href="#">魅族 魅蓝note5</a>
                </p>
                <p class="text-center">
                    <span class="label">9成新</span>
                    <span class="label">南阳师范学院</span>
                </p>
                <p class="goods-item-price text-center">
                    <a href="#">
                        <strong>￥1290.00</strong>
                    </a>
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
.sm-4 {
    width: 33.3%;
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
