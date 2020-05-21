<template>
	<div class="index-page">
		<van-tree-select
			height="100vh"
			width='1.96rem'
			:items="items"
			:active-id.sync="activeId"
			:main-active-index.sync="activeIndex"
		>
		<template slot="content">
			<Offside/>
		</template>
		</van-tree-select>
	</div>
</template>

<script>
	import Offside from '../components/Offside' 
	export default {
		name: 'IndexPage',
		components: {
			Offside
		},
		data() {
			return{
				items:[{
					text: '客户'
				},{
					text: '产品',
				},{
					text: '销售',
				},{
					text: '数据',
				}],
				activeId: 1,
				activeIndex: 0,
			}
		}
	}
</script>

<style scoped>
.van-sidebar-item{
	height: .98rem;
	line-height: .98rem;
	text-align: center;
	color: #333333;
	font-size: .26rem;
}
</style>
