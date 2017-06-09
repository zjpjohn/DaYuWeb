<template>
    <div>
        我是详情页商品的ID是{{id}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: ''
        }
    }, components: {
    }, watch: {//监听参数变化
         
        '$route.params.id': function (newval, oldval) {
           
            this.id = newval
        }
    },mounted(){
        this.id=this.$route.params.id   
    }
}
</script>
<style>

</style>
