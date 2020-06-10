<template>
	<div class="browser">
		<Nav title="新增展会记录" :showLeft='true'/>
		<section>
			<div class="main-list">
			<van-collapse v-model="activeNames">
				<van-collapse-item title="基本信息" name="1" :icon="require('@/assets/images/add/icon_add_basic.png')">
				<header>
					<span class="title">名片资料</span>
				</header>
				<div class="main">
					<div class="swiper-container">
						<div class="swiper-wrapper">
						<div class="swiper-slide row" v-for="(item,index) in 3" :key="index">
							<img src="@/assets/images/add/icon_add_basic.png" alt="">
						</div>
                    </div>
                </div>
				</div>
				<header>
					<span class="title">其他资料</span>
				</header>
				<div class="jbxx">
					<div class="left"></div>
					<div class="right"></div>
				</div>
				</van-collapse-item>
			</van-collapse>
			<van-collapse v-model="activeNames">
				<van-collapse-item title="调版详情" name="2" :icon=" require('../../assets/images/add/icon_add_db.png')">
					<section class="dh">
						<header>
							<span>调版单号</span>
							<span class="focus">5634375867867866</span>
						</header>
						<div class="main-list">
							<div class="list" v-for="(item, idx) in 3" :key="idx">
								<div class="left">
									<div class="bb">布编：ASD3421</div>
									<div class="img">
										<div class="fd">款号：HM-1154</div>
									</div>
								</div>
								<div class="right">
									<div class="name">
										<span class="title">调版类型</span>
										<span class="tex">样衣<span class="focus">x1</span></span>
									</div>
									<div class="address">
										<div class="title">寄板地址</div>
										<div class="dz">
											<p class="tex">Lisa 17777777777</p>
											<p class="tex">广州省 广州市 白云区黑土街道犄角旮旯办事处1234号负一楼仓库</p>
										</div>
									</div>
									<div class="jgbz">
										<span class="title">价格备注</span>
										<span class="tex">68.61 / 码</span>
									</div>
									<div class="qtbz">
										<span class="title">其他备注</span>
										<div class="tex">库存暂无，到货后发货</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</van-collapse-item>
			</van-collapse>
			<div class="tj">
				<van-button plain type="info">朴素按钮</van-button>
			</div>
			</div>
		</section>
	</div>
</template>

<script>
import Nav from '@/components/common/Nav';
import blInfo from '@/bl/info'
import Swiper from 'swiper';
	export default {
		name: 'DbddBrowser',
		components: {
			Nav
		},
		data() {
			return{
				activeNames: ['2'],
			}
		},
	mounted() {
        this.swiper = new Swiper('.swiper-container', {
				 slidesPerView: 1,
				 slidesPerColumn: 2,
		 })
    },
		created() {

		}
	}
</script>

<style scoped lang='less'>
@import '../../styles/common.less';
 .swiper-container {
      width: 6rem;
	  overflow: hidden;
	  margin-bottom: .4rem;
	}
    .swiper-slide {
      text-align: center;
	  background: #fff;
	  width: 1.48rem !important;
	  display: inline-block;
	  margin-right: .1rem;

    }
.browser{
	height: 100%;
	background: @bg_h;
	/deep/.van-collapse-item__content{
		padding: 0;
	}
	section{
		width: 7.18rem;
		margin: .2rem auto;
		// background: @bg_h;
		border-radius: .12rem .12rem 0px 0px;
		.main-list{
			background: #ffffff;
		}
		/deep/.van-cell{
			height: .88rem;
			line-height: .88rem;
			font-size: @dbs_size;
			color: @pt_color;
			justify-content: space-between;
			/deep/.van-cell__title{
				flex: none;
			}
			/deep/.van-cell__right-icon, .van-cell__left-icon{
				height: .88rem;
				line-height: .88rem;
				font-size: .36rem;
			}
			
		}

		header{
			.title{
				position: relative;
				font-size: .24rem;
				color: @pt_color;
				padding-left: .2rem;
			}
			.title:before{
				position: absolute;
				 top: .02rem;
				left: -0.01rem;
				background-color: #108EE9;
				width: .06rem;
				height: .2rem;
				border-radius:.03rem;
				content: "";
			}
		}

		.dh{
			header{
				.flex-row;
				justify-content: space-between;
				padding: .2rem .3rem;
			}
			.main-list{
				width: 6.86rem;
				margin: 0 auto;
				.list{
					margin-bottom: .1rem;
					.flex-row;
					align-items: flex-start;
					border:1px solid rgba(233, 237, 244, 1);
					box-shadow:0px 0px 6px 0px rgba(50,50,50,0.11);
					border-radius:.16rem;
				}
				.left{
					padding: 0 .2rem;
					.bb{
						height: .62rem;
						line-height: .62rem;
					}
					.img{
						.flex-row;
						align-items: flex-end;
						width: 2.2rem;
						height: 2.2rem;
						border-radius: .04rem;
						background: url(../../assets/images/cs/img_fabric.png) no-repeat;

						.fd{
							height: .52rem;
							line-height: .52rem;
							background:rgba(0,0,0,0.4);
							text-align: center;
							color: #ffffff;
							width: 100%;
						}
					}
				}
				.right{
					margin-top: .62rem;
					width: 4.14rem;
					.jgbz{
						.flex-row;
						justify-content: space-between;
					}
					.focus{
							color: #108EE9;
						}
					.title{
						color: @pt_color;
						font-size: @fl_small_size;
						
					}
					.tex{
						color: @h;
						font-size: @fl_small_title_size;
					}
					.name{
						.flex-row;
						justify-content: space-between;
					}
				}
			}
		}

		.tj{
			.flex-row;
			height: 1.76rem;
			align-items: center;

			.van-button{
				color: #fff;
				width: 2.4rem;
				background: #1989fa;
				height: 0.7rem;
				border-radius: 0.35rem;
				margin: 0 auto;
			}
		}
	}

}
</style>
