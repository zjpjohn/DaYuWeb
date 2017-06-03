<template>
    <div>
        <div class="form-group">
            <slot name="label">
                <label>
                    <strong>用户名</strong>
                </label>
            </slot>
    
            <br/>
            <input type="text" class="form-contral-input" placeholder="dayuweb" />
    
            <slot name="note">
                <p class="note">提示信息</p>
            </slot>
        </div>
    </div>
</template>
<script>
const regList = {
    Email: '',
    Name: '',
    Pwd: '',
    NickName: '',
    Phone: ''
}
export default {
    data() {
        return {

        }
    }, methods: {
        submit() {
            alert('sds');
        }
    }
}
</script>

<style>

</style>
