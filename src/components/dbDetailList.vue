<template>
    <div class="dbDetailList">
        <div class="list">
            <van-swipe-cell v-for="(item, idx) in 6" :key="idx">
                 	<section class="dh">
						<div class="main-list">
							<div class="list">
								<div class="left">
									<div class="bb">布编：ASD3421</div>
									<div class="img">
										<div class="fd">款号：HM-1154</div>
									</div>
								</div>
								<div class="right">
									<div class="name">
										<span class="title">样衣</span>
										<span class="iconfont icon-35_xiangxiajiantou"></span>
									</div>
                                    <div class="name">
										<span class="title">寄板地址</span>
										<span class="iconfont icon-35_xiangxiajiantou"></span>
									</div>
                                    <div class="name">
										<span class="title">寄板地址</span>
										<van-stepper v-model="value" />
									</div>
								</div>
							</div>
						</div>
					</section>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dbDetailList',
    data() {
        return{
            value: 1
        }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/common.less';

/deep/.van-stepper__input{
    width: .9rem;
}
.list{

    .dh{
			.main-list{
				width: 6.86rem;
				margin: 0 auto;
				.list{
                    padding: .2rem 0;
					margin-bottom: .1rem;
					.flex-row;
					align-items: flex-start;
					border:1px solid rgba(233, 237, 244, 1);
					box-shadow:0px 0px 6px 0px rgba(50,50,50,0.11);
                    border-radius:.16rem;
                    background: #ffffff;
				}
				.left{
					padding: 0 .2rem;
					.bb{
						padding-bottom: 0.2rem;
                        color: #333;
                        font-size: .24rem;
					}
					.img{
						.flex-row;
						align-items: flex-end;
						width: 1.7rem;
						height: 1.7rem;
						border-radius: .04rem;
						background: url(../assets/images/cs/img_fabric.png) no-repeat;

						.fd{
                            color: #fff;
                            font-size: .18rem;
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
					margin-top: .45rem;
					width: 4.14rem;
					.title{
						color: #333333;
                        font-size: .22rem;
                    }
                    
					.name{
						.flex-row;
                        justify-content: space-between;
                        height: .6rem;
                        line-height: .6rem;
                    }
                    
                    .iconfont{
                        color: #999;
                    }
				}
			}
		}

    
}
</style>