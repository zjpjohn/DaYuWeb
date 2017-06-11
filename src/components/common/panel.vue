<template>
    <div class="panel">
        <div class="panel-head">
            <slot name="panel-header"></slot>
        </div>
        <div class="panel-body">
            <slot name="panel-body">
            </slot>
    
        </div>   
        <div class="panel-footer" v-show="hasFooter">
            <slot name="panel-footer"></slot>
        </div>   
    </div>
</template>
<script>
export default {
    name: 'panel',
    props: {
        hasFooter: {
            Type: Boolean,
            dafault: false
        }
    }
}
</script>
<style scoped>
.panel {
    border: 1px solid #D5D8DA;
    border-radius: 3px;
}

.panel-head {
    background: #F6F8FA;
    padding: 12px;
    border-bottom: 1px solid #D5D8DA;
    font-size: 16px;
    font-weight: 500
}

.panel-body {
    min-height: 300px;
    line-height: 30px;
    text-indent: 12px
}

.panel-footer {
    background: #F6F8FA;
    padding: 12px;
    border-top: 1px solid #D5D8DA;
    font-size: 14px;
}
</style>

