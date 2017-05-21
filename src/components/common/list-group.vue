<template>
    <div>
        <ul class="list-group">
            <li class="list-group-title">{{title}}</li>
            <router-link tag="li" :to="{path:item.path}" active-class="list-group-active" v-for="item in listgroup" :key="item.id">
                <a>{{item.name}}</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'list-group',
    props: {
        title: {
            type: String
        },
        listgroup: {
            type: Array
        }
    }
}
</script>
<style>
.list-group {
    width: 80%;
    border: 1px solid #D1D5DA;
    border-radius: 4px;
    margin: auto;
    margin-top: 20px
}

.list-group-title {
    background: #F3F5F8
}

.list-group li {
    height: 40px;
    line-height: 40px;
    text-indent: 10px;
    border-bottom: 1px solid #D1D5DA;
}

.list-group li:last-child {
    border-bottom: none
}

.list-group li a {
    height: 38px;
    display: block;
    color: #0366D6
}

.list-group li a:hover {
    background: #F6F8FA
}

.list-group-active {
    border-left: 3px solid #E36209
}

.list-group-active a:hover {
    background: #FFFFFF!important;
    cursor: default
}
</style>
