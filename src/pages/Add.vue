<template>
	<div class="add">
		<Nav title="新增展会记录" :showLeft='true'/>
		<section>
			<div class="info distance" v-for="(item, idx) in addInfo" :key="idx" @click="toInfoDetail(item.route)">
				<div class="left">
					<img :src="item.icon" alt="">
				</div>
				<div class="right">
					<div class="text">{{item.name}}</div>
					<div class="name">
						<span class="ws">去完善</span>
						<span class="iconfont icon-arrowright"></span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Nav from '@/components/common/Nav';
import blInfo from '@/bl/info'
	export default {
		name: 'Add',
		components: {
			Nav
		},
		data() {
			return{
				addInfo: []
			}
		},
		methods: {
			toInfoDetail(route) {
				this.$router.push(route)
			}
		},
		created() {
			this.addInfo = blInfo.ADD
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
.add{
	height: 100%;
	background: @bg_h;
	
	.distance{
		margin-bottom: .12rem;
	}

	.b{
		border-bottom: 1px solid #E6E6E6;
	}
	.info{
		height: .88rem;
		background: #ffffff;
		padding: 0 .32rem;
		.flex-row;

		img{
			width: .36rem;
			height: .36rem;
		}

		.right{
			.flex-row;
			justify-content: space-between;
			flex: 1;
			margin-left: .32rem;

			.text{
				font-size: @fl_size;
				color: @pt_color;
			}

			.name{
				.ws{
					font-size: .22rem;
					color: #CCCCCC;
				}
			}
		}
	}
}
</style>
