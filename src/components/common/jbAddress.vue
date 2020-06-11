<template>
    <div class="jbAddress">
        <van-popup v-model="show" round position="bottom" :style="{ height: '75%' }" >
            <div class="title">寄版地址</div>
            <div class="list-main">
                <div class="list" v-for='(item, idx) in addressList' :key='idx'>
                    <div class="left">
                        <div class="c"><span class="name">{{item.receiver}}</span>
                        <span class="email">{{item.emails}}</span></div>
                        <div class="address">{{item.address}}</div>
                    </div>
                    <div :class="id == idx ? 'iconfont icon-selected': 'iconfont icon-xuanzhongyuandian1'" @click="toSelected(item,idx)" ></div>
				</div>
            </div>
            <div class="buttom-name">
                <ButtonB :toshow='true' name='完成'/>
            </div>
            
        </van-popup>
    </div>
</template>

<script>
import {getAllAddress} from '@/api/Add'
import Global from '@/utils/global'
import ButtonB from '@/components/ButtonB'
export default {
    name: 'jbAddress',
    data() {
        return{
            show: true,
            addressList: [],
            id: null
        }
    },
    components: {
        ButtonB
    },
    created() {
        this.getAllAddress();
    },
    methods: {
        toSelected(item, id) {
            this.id = id
        },
        getAllAddress() {
            let customID = Global.get('customID');
                let params = new URLSearchParams();
                params.append("guid", customID)
            getAllAddress(params).then((res)=>{
                this.addressList = res.data.data
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.jbAddress{
    position: relative;
    .title{
        text-align: center;
        font-size: .3rem;
        color: #333333;
        margin: .19rem 0 .6rem;
    }
    .list-main{
         padding: 0 .32rem 1rem;
        .flex-column;
			.list{
                height: 1.6rem;
                .flex-row;
				.left{
					width: 5.16rem
				}
				.c{
					.flex-row;
				}
				.name{
					font-size: .26rem;
					color: #333333;
					font-weight: bold;
				}

				.email{
					padding-left: .62rem;
					display: block;
					width: 4rem;
					font-size: .22rem;
					color: #999999;
					.textOneTop;
				}

				.address{
					background: #ffffff;
					font-size: .22rem;
					color: #333333;
					width: 4.48rem;
					padding-top: .1rem;
                }
                .iconfont{
                    margin-left: 1.37rem;
                }
			}
    }

    .buttom-name{
        position: fixed;
        bottom: 0px;
        left: 0.32rem;
        height: 1.2rem;
        background: #ffffff;
    }

    .icon-selected{
        color: #0098FF;
    }
    .icon-xuanzhongyuandian1{
        color: #999999;
    }
}
</style>