<template>
	<div class="dbDetail">
		<van-popup v-model="showCalculator" round position="bottom" :style="{ height: '70%' }" >
			<Calculator/>
		</van-popup>
		
		<Nav title="调版详情" :jsq='true' :backPage="toback"/>
		<section class="search">
			<van-search
				shape="round"
				placeholder="输入布编"
			>
			 <template #left-icon>
				<div></div>
			</template>
			 <template #right-icon >
				<span class="iconfont icon-saoyisao" @click="showBottom"></span>
			</template>
			</van-search>
		</section>

		<section class="detail ">
			<!-- <div class="img-main">
				<img src="@/assets/images/add/nall.png" alt="">
			</div> -->
			<dbDetailList></dbDetailList>
			<van-popup
				v-model="show"
				round
				position="bottom"
				:style="{ height: '75%' }"
				class="popup-main"
			>
				<header class="header">
					<div class="title">调版选择</div>
					<div class="swiper-container">
						<div class="swiper-wrapper">
						<div class="swiper-slide row" v-for="(item,index) in 10" :key="index">
							<span class="iconfont icon-xuanzhongyuandian1"></span>
						</div>
						</div>
					</div>
						
				</header>
				<main class="mian-detail-contain">
					<div class="top">
						<span class="b-bian">布编：ASD3421</span>
						<span class="b-mi">￥98.00 / 码；￥98.00 / 米</span>
					</div>
					<span class="name">调版类型 <span class="focus">请选择调版类型</span></span>
					
					<div class="block">
						<div class="block-main">A4 Swatch</div>
						<div class="block-main"> Swatch</div>
						<div class="block-main">A4 Swatch</div>
						<div class="block-main">A4 Swatch</div>
					</div>
					<span class="name">备注类型</span>
					<div class="beizhu">
						<span>价格备注</span>
						<input type="text" placeholder="选填，请先客户协商一致" class="text">
					</div>
					<div class="beizhu">
						<span>其他备注</span>
						<input type="text" placeholder="选填，请先客户协商一致" class="text">
					</div>
				</main>
				<footer class="footer">
					<Button>
						<span class="ml">面料详情</span>
						<span class="ml focus">添加调版</span>
					</Button>
				</footer>
			</van-popup>
		</section>
		<!-- 地址 -->
		<!-- <jbAddress/> -->
	</div>
</template>

<script>
	import Nav from '@/components/common/Nav' 
	import Calculator from '@/components/calculator' 
	import dbDetailList from '@/components/dbDetailList'
	import jbAddress from '@/components/common/jbAddress'

	import Swiper from 'swiper';

	export default {
		name: 'dbDetail',
		components: {
			Calculator,
			Nav,
			dbDetailList,
			jbAddress
		},
		data() {
			return{
				show: false,
				swiper: null,
				showCalculator: false
			}
		},
		mounted() {
		   var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
			});
		},
		methods: {
			toback() {
				this.showCalculator = true
				console.log('换起来计算器吧')
			},
			showBottom() {
				this.show = true
			}
		}
	}
</script>


<style scoped lang='less'>
@import '../../styles/common.less';
 .swiper-container {
    //   width: 1200px;
      height: 100%;
	}
	.swiper-wrapper{
		// display: flex;
	}
    /deep/.swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
	  align-items: center;
	  width: 2.4rem;
	  height: 2.4rem;
    }

.dbDetail{
	height: 100%;
	background: @bg_h;
	.flex-column;

	.search{
		padding: 0 .16rem;

		.van-search{
			background: none;
			padding: .2rem 0;

			.van-search__content{
				height: .6rem;
				.flex-row;
				padding-left: .4rem;
			}
		}
		.iconfont{
			padding-right: .2rem;
		}
	}

	.w{
		background: #ffffff;
	}
	
	.detail{
		margin: 0 .16rem;
		flex: 1;
		

		.img-main{
			padding-top: 2.06rem;
			.flex-row;
			justify-content: center;
			img{
				width: 3.4rem;
				height: 2.9rem;
			}
		}
	}

	.popup-main{
		padding: 0 .16rem;
	}

	.header{
		.title{
			color: #333333;
			font-size: .3rem;
			text-align: center;
			margin: .2rem 0;
		}

		.row{
			width: 2.4rem;
			height: 2.4rem;
			// background: #E9EDF4;
			background: url(../../assets/images/cs/img_fabric.png) no-repeat;
			background-size: 100% 100%;
			position: relative;

			.iconfont{
				position: absolute;
				top: .1rem;
				right: .1rem;
			}
		}
	}

	.mian-detail-contain{
		.top{
			font-size: .24rem;
			.b-bian{
				color: #333333;
			}
			.b-mi{
				padding-left: 2.43rem;
				color: #cccccc;
			}
		}

		.name{
			color: #333333;
			font-size: .24rem;
			position: relative;
			margin: .4rem 0 .4rem .1rem;
			display: block;
		    text-indent: .04rem;
		}
		.name:before{
			position: absolute;
			top: 0.04rem;
			left: -0.05rem;
			background-color: #108EE9;
			width: .06rem;
			height: .2rem;
			border-radius:.03rem;
			content: "";
		}
		.focus{
			color: #108EE9;
			font-size: .2rem;
		}
		.block{
			.flex-row;
			.block-main{
				height: .6rem;
				line-height: .6rem;
				background: #E9EDF4;
				border-radius: .06rem;
				font-size: .24rem;
				color: #333333;
				text-align: center;
				margin-right: .35rem;
				width: 1.74rem;
			}
		}

		.beizhu{
			color: #333333;
			font-size: .24rem;
			margin-bottom: .2rem;
			
			.text{
				margin-left: .5rem;
				height: .6rem;
			}
		}
	}

	.footer{
		margin-right: .32rem ;
		.flex-row;

		Button{
			border: 0 none;
			background: none;
			height: .7rem;
			border-radius: .35rem;
			flex: 1;
			.flex-row;
		}

		.ml{
			height: .7rem;
			line-height: .7rem;
			display: block;
			flex: 1;
			border:1px solid rgba(0,152,255,1);
			text-align: center;
			border-radius:.35rem 0px 0px .35rem;
			color: #0098FF;
			font-size: .3rem;
		}
		.focus{
			background: #0098FF;
			border-radius:0px .35rem .35rem 0px;
			color: #ffffff;
		}
	}
	
}
</style>
