<template>
    <div class="forget">
       <Tab topName='忘记密码'/>
        <div class="text-name">请设置您的新密码</div>
        <div class="main-w">
            <div class="row">
                <div class="text">新密码</div>
                <input type="password" placeholder="请输入新密码" @input="accountNumber" v-model="confirmPass" >
            </div>
        </div>
         <div class="main-w margin">
            <div class="row">
                <div class="text">确认密码</div>
                <input type="password" placeholder="请再次输入新密码" @input="accountNumber" v-model="pass">
            </div>
        </div>
        <ButtonB name='确定' :toshow="toshow" :toSubmit='submit'/>
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
            confirmPass: '',
            pass: ''
        }
    },
    methods: {
        submit() {
            if(this.confirmPass != this.pass) return false;
            console.log('登录成功')
        },
        accountNumber() {
           if(this.confirmPass && this.pass) {
               this.toshow = true;
           }else{
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
        margin: 0 auto .48rem;
        width:7.18rem;
        height:1.6rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 10px 0px rgba(0, 0, 0, 0.04);
        border-radius: .1rem;

        .row{
            padding: .35rem 0 0 .44rem;

            .text{
                color: #333;
                font-size: .26rem;
            }
         }
    }
    .margin{
        margin-bottom: .96rem;
    }
    
}
</style>