<template>
	<div class="login">
		<header>
			<div class="img-login">
				<div class="change-vip">
					<div :class=" loginType == 0 ? 'common focus' : 'common'" @click="toChangeLogin(0)">登录</div>
					<div :class=" loginType == 1 ? 'common focus' : 'common'" @click="toChangeLogin(1)">VIP登录</div>
				</div>
			</div>
		</header>

		<section>
			<div class="input-zh">
				<span class="iconfont icon-wode"></span>
				<input type="text" v-model="user"  placeholder="请输入登录账号/手机号码/邮箱">
			</div>
			<div class="input-psw">
				<span class="iconfont icon-IOTtubiao_huabanfuben"></span>
				<input type="text" v-model="password" placeholder="请输入登录密码">
			</div>
			<div class="to-login" @click="toLogin" >登录</div>
		</section>

		<div class="footer">
			<div class="remeber">记住密码</div>
			<div class="forget">忘记密码?</div>
		</div>
	</div>
</template>

<script>
	import {login, getPicuuid} from '@/api/Login';
	import Globle from '@/utils/global'

	export default {
		name: 'Login',
		components: {},
		data() {
			return{
				loginType: 0,
				user: '',
				password: ''
			}
		},
		methods:{
			toLogin() {
				let params = new URLSearchParams();
				params.append("name", this.user)
				params.append("password", this.password)
				login(params).then((res) => {
					getPicuuid().then((res) => {
						Globle.set('customID', res.data.data)
						this.$router.push('/')
					})
				})
			},
			toChangeLogin(type) {
				this.loginType = type
			}
		}
	}
</script>

<style lang='less' scoped>
@import '../styles/common.less';
.login{
	width: 6.07rem;
	margin: 0 auto;
}

header{
	.img-login{
		margin-top: .73rem ;
		width: 100%;
		height: 5.05rem;
		background: url("../assets/images/login-img.png");
		background-size: cover;
		display: flex;
		align-items: flex-end;

		.change-vip{
			.flex-row;
			margin: 0 auto;
			width:4.32rem;
			height:.76rem;
			background:rgba(0,0,0,0.5);
			border-radius:.37rem;
			padding: 0 .1rem;

			.common{
				width:2.16rem;
				height:.6rem;
				border-radius:.3rem;
				font-size: .3rem;
				text-align: center;
				line-height: .6rem;
				color: #ffffff;
			}

			.focus{
				background:rgba(255,255,255,1);
				color: #333333;
			}
			
		}
	}
}

section{
	margin: .3rem auto 0;
	width:5.64rem;
	height:3.6rem;
	background:rgba(255,255,255,1);
	box-shadow:0px 6px 9px 0px rgba(0, 0, 0, 0.2);
	border-radius:.12rem;

	input{
		width: 3.92rem;
		padding-bottom: .2rem ;
		border-bottom: 1px solid #E6E6E6;
		
	}

	.input-zh{
		margin-bottom: .72rem;
		padding-top: .72rem;
		.flex-row;
		justify-content: center;
		align-items: center;
		font-size: .26rem;
		.iconfont{
			width: .3rem;
			height: .32rem;
			margin-right: .2rem;
		}
		
	}

	.input-psw{
		.flex-row;
		justify-content: center;
		align-items: center;
		font-size: .26rem;

		.iconfont{
			width: .28rem;
			height: .38rem;
			margin-right: .2rem;
		}
	}

	.to-login{
		margin: .6rem auto 0;
		width:4.32rem;
		height:.96rem;
		background:linear-gradient(0deg,rgba(0,152,255,1) 0%,rgba(0,192,255,1) 100%);
		border-radius:.48rem;
		text-align: center;
		font-size: .3rem;
		color: #ffffff;
		line-height: .96rem;

	}
}

.footer{
	color: #333333;
	font-size: .26rem;
	.flex-row;
	justify-content: space-between;
	margin-top: 1rem;
	width: 6.07rem;

	.forget{
		text-decoration:underline;
	}
}
</style>
