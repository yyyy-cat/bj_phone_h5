<template>
    <div class="sendPass">
       <Tab topName='忘记密码'/>
        <div class="text-name">我们发现关联账户：candy33</div>
        <div class="main-w">
            <div class="row">
                <img :src="toShowImg ? selectImg : unSelectImg " alt="" class="img" @click="toChange">
                <span class="text">通过188****888@qq.com邮箱动态验证恢复密码</span>
            </div>
        </div>
        <ButtonB name='下一步' :toshow="toShowImg"/>
    </div>
</template>

<script>
import Tab from './Tab';
import ButtonB from './ButtonB'
import selectImg from '@/assets/images/password_select.png'
import unSelectImg from '@/assets/images/password_unselect.png'
export default {
    name: 'SendPass',
    components:{
        Tab,
        ButtonB
    },
    data() {
        return{
            toShowImg: true,
            user: '',
            selectImg: selectImg,
            unSelectImg: unSelectImg
        }
    },
    methods: {
        toChange() {
            this.toShowImg = !this.toShowImg;
        },
        accountNumber() {
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
.sendPass{
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

        .row{
            padding: .35rem 0 0 .44rem;

            .img{
                width: .3rem;
                height: .3rem;
            }

            .text{
            color: #333;
            font-size: .26rem;
        }
        }

        
    }
}
</style>