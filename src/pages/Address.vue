<template>
	<div class="address">
		<Nav title='地址管理' :border="false" :rightText='newAddress' :backPage="toback"/>
		<section :class="addressList.length == 0 ? 'w' : ''">
			<div class="null" v-if="addressList.length == 0">
				<img src="@/assets/images/add/nall.png" alt="" class="img">
				<div class="name">
					<span class="as">这里什么都没有，快去</span>
					<span class="focus" @click="toAddAddress">添加新地址</span>
				</div>
			</div>

			<div class="row b" v-else >
				<div class="list" v-for='(item, idx) in addressList' :key='idx'>
				<div class="top">{{item.top}}</div>
					<div class="bottom">
						<div class="left">
						<div class="c"><span class="name">{{item.receiver}}</span>
						<span class="email">{{item.emails}}</span></div>
						<div class="address">{{item.address}}</div>
					</div>

				<div class="right">编辑</div>
				</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>

import Global from '@/utils/global'
import Nav from '@/components/common/Nav'
import {getAllAddress} from '@/api/Add'

	export default {
		name: 'Address',
		components: {
			Nav
		},
		data() {
			return{
				addressList: [],
				newAddress: ''
			}
		},
		mounted() {
			this.getAllAddress();
		},
		methods: {
			toback() {

			},
			toAddAddress() {
				this.$router.push('/AddressAdd')
			},
			getAllAddress() {
				let customID = Global.get('customID');
				 let params = new URLSearchParams();
				 params.append("guid", customID)
				getAllAddress(params).then((res)=>{
					let arr = []
					res.data.data.forEach((item,idx) => {
						item.top = item.receiver.slice(0,1)
						arr.push(item)
					});
					this.addressList = arr
					this.newAddress = '添加新地址'
				})
			}
		}
	}
</script>
<style lang="less">
html,body{
	height: 100%;
}
</style>
<style scoped lang='less'>
@import '../styles/common.less';
.address{
	height: 100%;
	background: @bg_h;

	.w{
		background: #ffffff;
	}
	.b{
		background: #ffffff;
	}
	section{
		
		height: 94%;
		.row{
			.flex-column;
			.list{
				padding: 0 .32rem;
				.flex-row;
				align-items: center;
				height: 1.6rem;
			}
			.top{
				width:.6rem;
				height:.6rem;
				background: #0098FF;
				border-radius: 50%;
				margin-right: .3rem;
				color: #ffffff;
				text-align: center;
				font-size: .26rem;
				line-height: .6rem
			}
			.bottom{
				.flex-row;
				padding-bottom: .32rem;
				border-bottom: 1px solid #E9EDF4;
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

				.right{
					font-size: .26rem;
					color: #999999;
					padding-left: .2rem;
					margin-top: .42rem;
					border-left: 1px solid #E9EDF4;
				}
			}
		}
		.null{
			.flex-column;
			align-items: center;
			padding-top: 3.34rem;

			.img{
				width: 3.4rem;
				height: 2.9rem;
			}

			.name{
				font-size: .22rem;
				color: #E9EDF4;
				padding-top: .52rem;

				.focus{
					color: #0098FF;
				}
			}
		}
	}
}
</style>
