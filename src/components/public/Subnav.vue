<template>
    <div class="container-fluid subnav">
        <div class="container">
            <ul>
                 <router-link tag="li" :to="{path:'/goods/'+item.type}" active-class="subnav-active" v-for="item in subnavlist">
                    <a>{{item.name}}</a>
                    <span class="subnav-tag">{{item.count}}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'wupin',
    props: {
        subnavlist:{
             type: Array
        }  
    },
    data() {
        return {
        }
    }
}
</script>
<style>
/**二级导航**/

.subnav {
    height: 60px;
    border-bottom: 1px solid #E1E4E8
}

.subnav ul li {
    float: left;
    line-height: 58px;
    margin-left: 30px
}

.subnav ul li a {
    text-align: center;
    color: #333333;
}

.subnav-tag {
    padding: 2px 6px;
    border-radius: 10px;
    background: #EDEDEE;
    cursor: pointer
}

.subnav-active {
    border-bottom: 2px solid #E36209
}
</style>
