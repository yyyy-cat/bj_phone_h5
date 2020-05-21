<template>
	<div class="info">
		<Nav title='基本信息' :border="false" :backPage="toback"/>
		<section>
			<div class="main">
				<div class="top">
					名片资料
				</div>
				<div class="carame">
					<van-uploader multiple ref="checked" :after-read='onRead' :accept="'image/*'">
						<img src="@/assets/images/login-img.png" alt="">
						<!-- <div class="phone" icon="photo">
							<span>新增图片</span>
						</div> -->
					</van-uploader>
					<div class="showImg">
						<div class="img">

						</div>
					</div>
				</div>
				<div class="top">
					其他信息
				</div>
				<div class="row">
					<label for="" class="name">展会信息</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">客户名称</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">客户性质</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">客户营销品牌</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">国家地区</label>
					<input type="text" class="text">
				</div>
				<div class="row two">
					<div class="people">
					<div class="name">客户联系人</div>
					<input type="text" class="text">
				</div>
				<div class="phone">
					<div class="name">职位</div>
					<input type="text" class="text">
				</div>
				</div>
				<div class="row">
					<label for="" class="name">联系人职务</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">联系人电话</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">联系邮箱</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">客户</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">地址</label>
					<input type="text" class="text">
				</div>
				<div class="row">
					<label for="" class="name">备注</label>
					<input type="text" class="text">
				</div>
			</div>
			<div class="row">
				<Remarks/>
			</div>
			
		</section>
	</div>
</template>

<script>
import {uploadPic,getPicuuid} from '@/api/Add/index'
import Nav from '@/components/common/Nav'
import Remarks from '@/components/common/Remarks'
	export default {
		name: 'Info',
		components: {
			Nav,
			Remarks
		},
		data() {
			return{
				imgData: [],
				customID: ''
			}
		},
		created() {
			getPicuuid().then((res) => {
				this.customID = res.data.data
			})
		},
		methods:{
			toback() {
				console.log('1234')
			},
			onRead(e) {
				let params = new URLSearchParams();
				let files = new FormData()
      			files.append('file', e.file)
				params.append("customID", this.customID)
				params.append("kind", '1')
				uploadPic(
					files
				).then((res) => {
					console.log(res)
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
.info{
	padding-bottom: .8rem;
	background: @bg_h;

	section{
		width: 7.18rem;
		height: 100%;
		margin: .15rem auto 0;
		background: #ffffff;
		padding-bottom: .15rem;

		.two{
			.flex-row;
			.people{
				.flex-row;
				flex: 1;
			}
			.phone{
				.flex-row;
			}
		}

		.main{
			width: 100%;

			.carame{
				.flex-row;
				justify-content: center;
				height: 1.68rem;

				.van-uploader{
					.flex-column;
					justify-content: center;
					align-items: center;
					width: 1.4rem;
					height: 1.06rem;
					img{
						width: 100%;
						height: 100%;
					}
				}

				.showImg{
					.img{
						margin-left: .2rem;
						width: 1.81rem;
						height: 1.02rem;
						background: pink;
					}
				}
			}
			.top{
				position: relative;
				height: .7rem;
				line-height: .7rem;
				padding-left: .32rem;
				font-size: .24rem;
				color: #333333;
				background: pink;
			}
			.top:before{
				position: absolute;
				top: .23rem;
				left: .16rem;
				background-color: #108EE9;
				width: .06rem;
				height: .2rem;
				border-radius:.03rem;
				content: "";
			}

			.row{
				margin: 0 .2rem;
				line-height: 1.2rem;
				height: 1.2rem;
				border-bottom: .01rem solid #999999;

				.name{
					color: #999999;
					font-size: .22rem;
				}

				.text{
					height: .7rem;
					font-size: .22rem;
				}
			}
		}
	}



}
</style>
