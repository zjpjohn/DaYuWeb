<template>
    <div class="container">
        <div class="col-sm-3">
            <list-group :title="title" :listgroup="listgroup"></list-group>
        </div>
        <div class="col-sm-9">
            <div class="settings">
                <router-view name="settings"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import listGroup from '../common/list-group'
export default {
    data() {
        return {
            title: '设置中心',
            listgroup: [{
                'path': 'profile',
                'name': '基本信息'
            }, {
                'path': 'account',
                'name': '密码设置'
            }, {
                'path': 'emails',
                'name': '邮箱设置'
            },{
                'path': 'connection',
                'name': '联系方式' 
            },{
                'path': 'emails',
                'name': '登录安全' 
            },{
                'path': 'emails',
                'name': '消息通知' 
            }]
        }
    }, methods: {

    }, components: {
        'list-group': listGroup
    }
}
</script>
<style>
.settings {
    padding: 0 20px
}
</style>
