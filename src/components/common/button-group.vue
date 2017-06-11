<template>
    <div class="btn-group">
        <button title="收藏">
            <i class="icon-star"></i>收藏</button>
        <a href="#" title="查看都有谁收藏了">652</a>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.btn-group button {
    padding: 4px 12px;
    outline: none;
    border: 1px solid #CCCFD1;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font-size: 14px;
    line-height: 20px;
    background: #eff3f6;
    color: #24292e;
    cursor: pointer;
    font-weight: 500
}

.btn-group button:hover {
    background: #FAFBFC
}

.btn-group a {
    padding: 4px 12px;
    outline: none;
    border: 1px solid #CCCFD1;
    border-left: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    font-size: 14px;
    line-height: 20px;
    color: #24292e;
    cursor: pointer;
    display: inline-block;
    margin-left: -4px;
    font-weight: 500;
    width: 28px;
    text-align: center
}
</style>
