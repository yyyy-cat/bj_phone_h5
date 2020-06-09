<template>
	<div class="address">
		<Nav title='地址管理' :border="false"/>
		<section :class="addressList.length == 0 ? 'w' : ''">
			<div class="null" v-if="addressList.length == 0">
				<img src="@/assets/images/add/nall.png" alt="" class="img">
				<div class="name">
					<span class="as">这里什么都没有，快去</span>
					<span class="focus">添加新地址</span>
				</div>
			</div>

			<div class="row" v-else>
				<div class="top"></div>
				<div class="bottom">
					<div class="left">
					<span class="name">Candy</span>
					<span class="email">16666666666;16666666666@12222222</span>
					<div class="address">广州省 广州市 白云区黑土街道犄角旮旯办事处 1234号负一楼仓库</div>
				</div>

				<div class="right">编辑</div>
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
				addressList: []
			}
		},
		mounted() {
			this.getAllAddress();
		},
		methods: {
			
			getAllAddress() {

				let customID = Global.get('customID');
				 let params = new URLSearchParams();
				 params.append("customID", customID)
				getAllAddress(params).then((res)=>{
					this.addressList = res.data.data
					console.log(this.addressList)
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
	section{
		
		height: 94%;
		.row{
			padding: 0 .32rem;
			.flex-row;
			align-items: center;
			height: 1.6rem;
			.top{
				width:.6rem;
				height:.6rem;
				background: #0098FF;
				border-radius: 50%;
				margin-right: .3rem;
			}
			.bottom{
				.flex-row;
				padding-bottom: .32rem;
				border-bottom: 1px solid #E9EDF4;
				.name{
					font-size: .26rem;
					color: #333333;
					font-weight: bold;
				}

				.email{
					font-size: .22rem;
					color: #999999;
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
