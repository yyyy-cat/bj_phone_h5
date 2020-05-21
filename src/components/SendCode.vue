<template>
    <div class="sendCode">
       <Tab topName='忘记密码'/>
        <div class="text-name">
           <div><span>我们已经发送</span><span class="code">验证码</span><span>到您的手机</span></div>
           <div class="number">{{number}}</div>
        </div>
        <div class="main-w">
            <div class="main">
                <div class="text">验证码</div>
                <div class="sendcode">
                     <input type="number" placeholder="请输入验证码" @input="accountNumber" v-model="user">
                     <div class="code-name" @click="sendCaptch" v-if="could_send">{{startName}}</div>
                      <div class="code-name" @click="sendCaptch" v-else>{{count}}</div>
                </div>
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
            unSelectImg: unSelectImg,
            number: '17693151730',
            could_send: true,
			count: 60,
			start_time_stamp: 0,
            startName: '发送验证码'
        }
    },
    created() {
        let phone = this.number;
         this.number = phone.substr(0,3)+"****"+phone.substr(7);
    },
    methods: {
        countDown() {
            let _this = this;
            let now_time_stamp = new Date().getTime();

            if( this.start_time_stamp + 60*1000 - now_time_stamp < 0 ) {
                this.could_send = true;
                this.count = 60;

                return false
            }

            this.count = Math.floor((_this.start_time_stamp + 60 * 1000 - now_time_stamp) / 1000)
            setTimeout(() => {
				_this.countDown();
			}, 1000)

        },
        sendCaptch() {
            this.start_time_stamp = new Date().getTime(),
            this.could_send = false,
            this.startName = '重新获取验证码'
            if(this.could_send === false) {
                this.countDown();
            }
        },
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
.sendCode{
    width:7.5rem;
    height:4.4rem;
    background:linear-gradient(-38deg,rgba(0,152,255,1) 0%,rgba(0,192,255,1) 100%);

    .text-name{
        font-size: .3rem;
        color: #ffffff;
        font-weight:bold;
        text-align: center;
        padding: 1rem 0 1.2rem .33rem;
        .code{
            color: #FFF000;
        }

        .number{
            padding-top: .3rem;
        }
    }

     .main-w{
        margin: 0 auto 3rem;
        width:7.18rem;
        height:1.6rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 10px 0px rgba(0, 0, 0, 0.04);
        border-radius: .1rem;

        .main{
             padding: .35rem .16rem 0 .44rem;
        }
        .text{
            color: #404040;
            font-size: .28rem;
        }
        .sendcode{
            .flex-row;
            justify-content: space-between;
            .number{
                color: #404040;
                font-size: .28rem;
            }

            .code-name{
                width:1.6rem;
                height:.6rem;
                background:rgba(233,237,244,1);
                border-radius:.08rem;
                color: #0098FF;
                font-size: .22rem;
                text-align: center;
                line-height: .6rem;
            }
        }
        
    }
}
</style>