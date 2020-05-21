<template>
    <div class="forget">
       <Tab topName='忘记密码'/>
        <div class="text-name">我忘了我的账户登录名称或密码</div>
        <div class="main-w">
            <div class="text">登录名</div>
            <input type="text" placeholder="请输入您的账户/手机/邮箱" @input="accountNumber" v-model="user">
        </div>
        <ButtonB name='下一步' :toshow="toshow"/>
    </div>
</template>

<script>
import Tab from './Tab';
import ButtonB from './ButtonB'
export default {
    name: 'ForgetPassword',
    components:{
        Tab,
        ButtonB
    },
    data() {
        return{
            toshow: false,
            user: ''
        }
    },
    methods: {
        accountNumber(e) {
            this.toshow = true
            if(this.user===''){
                this.toshow = false
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/common.less';
.forget{
    width:7.5rem;
    height:4.4rem;
    background:linear-gradient(-38deg,rgba(0,152,255,1) 0%,rgba(0,192,255,1) 100%);

    .text-name{
        font-size: .3rem;
        color: #ffffff;
        padding: 1rem 0 1.2rem .33rem;
    }

    .main-w{
        margin: 0 auto 3rem;
        width:7.18rem;
        height:1.6rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 10px 0px rgba(0, 0, 0, 0.04);
        border-radius: .1rem;
        padding: .35rem 0 0 .44rem;

        .text{
            color: #404040;
            font-size: .28rem;
        }
    }
}
</style>