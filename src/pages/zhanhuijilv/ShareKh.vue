<template>
	<div class="browser">
		<Nav title="分享" :showLeft='true'/>
		<section>
			<div class="main-list">
				<div class="title">雕版信息</div>
			<div class="long">
				<div class="left-list" >
					<span class="name">公司名称</span>
					<span class="text">街道犄角旮旯办事处</span>
				</div>
				<div class="left-list" >
					<span class="name">营销品牌</span>
					<span class="text">街道犄角旮旯办事处</span>
				</div>
			</div>
			   <div class="jbxx">
					<div class="left">
						<div class="left-list" >
							<span class="name">客户来源</span>
							<span class="text">街道犄</span>
						</div>
						<div class="left-list" >
							<span class="name">客户来源</span>
							<span class="text">街道</span>
						</div>
					</div>
					<div class="right">
						<div class="right-list" >
							<span class="name">客户来源</span>
							<span class="text">街道犄角旮旯办事处</span>
						</div>
						<div class="right-list" >
							<span class="name">客户来源</span>
							<span class="text">街道犄角旮旯办事处</span>
						</div>
					</div>
				</div>
				<div class="long">
					<div class="left-list" >
						<span class="name">备注</span>
						<span class="text">高尚18888888888中国广州省广州市白云区黑土街道犄角旮旯办事处</span>
					</div>
				</div>
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
								</div>
							</div>
						</div>
					</section>
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

			.title{
				text-align: center;
				height: 1rem;
				line-height: 1rem;
				color: #333333;
				font-size: .3rem;
			}

			.text{
				color: #999;
				font-size: .22rem;
			}

			.name{
				color: #333;
				font-size: .22rem;
			}

			.left-list, .right-list{
				height: 1rem;
			}

			.jbxx{
			.flex-row;
			padding:0 .3rem;

			.left, .right{
				width: 3.29rem
			}
			
			
		}

		.long{
			padding: 0 .3rem;
		}
		}
		.dh{
			header{
				.flex-row;
				justify-content: space-between;
				padding: .2rem .3rem;
				font-size: .24rem;

				.focus{
					color: #0098FF;
				}
			}
			.main-list{
				width: 6.86rem;
				margin: 0 auto;
				.list{
					height: 3.22rem;
					margin-bottom: .1rem;
					.flex-row;
					align-items: flex-start;
					border:1px solid rgba(233, 237, 244, 1);
					box-shadow:0px 0px 6px 0px rgba(50,50,50,0.11);
					border-radius:.16rem;
				}
				.left{
					padding: 0 .2rem;
					font-size: 0.24rem;
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
	}

}
</style>
