<template>
    <div class="forget">
        <Forget/>
        <!-- <SendPass/> -->
        <!-- <SendCode/> -->
        <!-- <SetPass/> -->
    </div>
</template>

<script>
import Forget from '@/components/ForgetPass'
import SendPass from '@/components/SendPass'
import SendCode from '@/components/SendCode'
import SetPass from '@/components/SetPass'
export default {
    name: 'ForgetPassword',
    components:{
        Forget,
        SendPass,
        SendCode,
        SetPass
    },
    data() {
        return{
            toshow: false,
            user: ''
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
</style>