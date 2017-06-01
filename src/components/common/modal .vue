<template>
    <div>
        <div class="modal" v-show="show">
            <div class="modal-head">
                <h2>
                    <slot name="header">提示</slot>
                    <span class="pull-right icon-cancel modal-close" @click="hideModal()"></span>
                </h2>
                <p class="modal-title-danger">这是一个很危险的操作</p>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button class="btn btn-info" @click="ok">删了</button>
                    <button class="btn btn-default" @click="cancel"> 不删了</button>
                </slot>
            </div>
        </div>
        <!--遮罩层-->
        <div class="modal-panel" v-show="show">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            Type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    }, methods: {
        hideModal: function () {
            this.$emit('hideModal');
        }, ok: function () {
            this.$emit('ok')
        }, cancel: function () {
            this.$emit('cancel')
        }
    }
}
</script>
<style>
.modal-panel {
    background: #333;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5
}

.modal {
    position: fixed;
    width: 30%;
    min-width: 457px;
    top: 200px;
    left: 30%;
    background: #FFFFFF;
    z-index: 100;
    margin: auto;
    border-radius: 4px
}

.modal-close {
    color: #C0C0C0;
    margin-right: 20px;
    cursor: pointer
}

.modal-close:hover {
    color: #000000
}





/***模态框的顶部***/

.modal-head h2,
.modal-head p {
    text-indent: 16px
}

.modal-title-danger {
    line-height: 40px;
    background: #FFDCE0;
    border-top: 1px solid #E2A2A7;
    border-bottom: 1px solid #E2A2A7;
    color: #86181D
}

.modal-title-info {
    line-height: 40px;
    background: #488ED8;
    border-top: 1px solid #0552AA;
    border-bottom: 1px solid #0552AA;
    color: #FFFFFF
}

.modal-body {
    padding: 10px 16px 20px 16px;
    border-bottom: 1px solid #DFE2E5;
}

.modal-footer {
    padding: 10px 16px 20px 16px
}
</style>
