<template>
	<div class="browser">
		<Nav title="新增展会记录" :showLeft='true'/>
		<section>
			<van-collapse v-model="activeNames">
				<van-collapse-item title="标题1" name="1" :icon="require('@/assets/images/add/icon_add_basic.png')">
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
				</van-collapse-item>
			</van-collapse>
			<van-collapse v-model="activeNames">
				<van-collapse-item title="调版详情" name="2" :icon=" require('../assets/images/add/icon_add_db.png')">
					<section class="dh">
						<header>
							<span>调版单号</span>
							<span class="focus">5634375867867866</span>
						</header>
						<div class="main-list">
							<div class="list">
								<div class="left">
									<span>布编：ASD3421</span>
									<div class="img"></div>
								</div>
								<div class="right">
									<div class="name">
										<span>调版类型</span>
										<span>样衣</span>
									</div>
								</div>
							</div>
						</div>
					</section>
				</van-collapse-item>
			</van-collapse>
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
<style lang="less">
html,body{
	height: 100%;
}
</style>
<style scoped lang='less'>
@import '../styles/common.less';
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
	section{
		width: 7.18rem;
		margin: .2rem auto;
		background: #ffffff;
		border-radius: .12rem .12rem 0px 0px;
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
				width: 6.8rem;
				justify-content: space-between;
				padding: 0 .12rem;
			}
			.main-list{
				.list{
					.flex-row;
				}
				.left{
					.img{
						width: 2.2rem;
						height: 2.2rem;
						border-radius: .04rem;
						background: url(../assets/images/cs/img_fabric.png) no-repeat;
					}
				}
				.right{
					width: 4.14rem;
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
