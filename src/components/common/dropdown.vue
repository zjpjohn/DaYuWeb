<template>
    <div>
        <div class="dropdown">
            <a href="javascript:void(0)" class="btn btn-default" @click="dropDownShow()">
                <slot name="dropdown-title">
                    <span>分类：</span>商品类型</slot>
    
                <i class=" icon-down-dir"></i>&nbsp;
            </a>
    
            <ul class="dropdown-items" v-show="show">
                <li>
                    <span class="pull-right icon-cancel" @click="dropDownHide()">
                    </span> 商品分类
                </li>
                <router-link tag="li" :to="{path:'/user/start'}" active-class="dropdown-items-active" v-for="type in types" :key="type.id">
                    <a>{{type.name}}</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        types: {
            Type: Array
        }
    },
    data() {
        return {
            show: false
        }
    }, methods: {
        dropDownShow() {
            this.show = true
        }, dropDownHide() {
            this.show = false
        }
    }
}
</script>
<style scoped>
.dropdown {
    position: relative
}

.dropdown-items {
    border: 1px solid #f00;
    margin-top: 20px;
    width: 300px;
    position: absolute;
    right: 0;
    border: 1px solid #CECFCF;
    border-radius: 4px;
    top: 10px;
    box-shadow: 0 0 10px #C8CACA
}

.dropdown-items li {
    line-height: 36px;
    line-height: 36px;
    border-top: 1px solid #E1E4E8;
    text-indent: 10px;
}

.dropdown-items li:first-child {
    background: #F6F8FA;
    color: #24292E;
}

.dropdown-items li:first-child span {
    margin-right: 20px;
    color: #C6CBD1;
    cursor: pointer
}

.dropdown-items li a {
    display: block;
    color: #24292E;
    font-weight: 300
}

.dropdown-items li a:hover {
    background: #0366D6;
    color: #FFFFFF
}

.dropdown-items-active a {
    background: #F6F8FA;
    color: #24292E;
}
</style>
