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
                    <div class="iconfont icon-xuanzhongyuandian1" ></div>
				</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import {getAllAddress} from '@/api/Add'
import Global from '@/utils/global'
export default {
    name: 'jbAddress',
    data() {
        return{
            show: true,
            addressList: []
        }
    },
    created() {
        this.getAllAddress();
    },
    methods: {
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
    
    .van-popup{
        padding: 0 .32rem;
    }
    .title{
        text-align: center;
        font-size: .3rem;
        color: #333333;
        margin: .19rem 0 .6rem;
    }
    .list-main{
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
}
</style>