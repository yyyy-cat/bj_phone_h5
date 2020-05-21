<template>
	<div class="addressAdd">
		<Nav title='编辑地址' :border="false" :backPage="toback"/>
		<section>
			<div class="top">
				地址信息
			</div>
			<div class="row two">
				<div class="people">
					<div class="name">姓名</div>
					<input type="text" class="text" v-model="receiver">
				</div>
				<div class="phone">
					<div class="name">联系电话</div>
					<input type="text" class="text" v-model="contact">
				</div>
			</div>
			<div class="row">
				<div class="name">联系邮箱</div>
				<input type="text" class="text" v-model="emails">
			</div>
			<div class="row" @click="toShowCity">
				<div class="name">城市区域</div>
				<input type="text" class="text" v-model="cityName">
				  <van-popup v-model="name" round
					position="bottom" 
					:lock-scroll="false"
					:style="{ height: '30%' }" class="text">
					<div class="button-main">
						<van-button class="change-city-button">默认按钮</van-button>
						<van-button class="change-city-button" @click="tochange">主要按钮</van-button>
					</div>
					<van-area
						 @confirm='Onconfirm'
						v-show="name"
						:area-list="cityData"
						:columns-placeholder="['请选择', '请选择', '请选择']"
					/>
					</van-popup>
			</div>
			<div class="row">
				<div class="name">详细街道（如**街**号）</div>
				<input type="text" class="text" v-model="address" @input='join'>
			</div>
			<div class="top" @click="toback">
				智能填写
			</div>
		</section>
		<div class="delete">
			<van-button round>删除地址</van-button>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/Nav'
	import Globle from '@/utils/global'
	import {addAddress} from '@/api/Add'

	export default {
		name: 'AddressAdd',
		components: {
			Nav
		},
		data() {
			return{
				receiver: '',
				contact: '',
				name: false,
				cityName: '',
				customID: '',
				emails: '',
				address: '',
				cityData: {
				province_list: {
					110000: '北京市',
					120000: '天津市'
				},
				city_list: {
					110100: '北京市',
					110200: '县',
					120100: '天津市',
					120200: '县'
				},
				county_list: {
					110101: '东城区',
					110102: '西城区',
					110105: '朝阳区',
					110106: '丰台区',
					120101: '和平区',
					120102: '河东区',
					120103: '河西区',
					120104: '南开区',
					120105: '河北区'
				}
				}
			}
		},
		created() {
			this.customID = Globle.get('customID')
		},
		methods:{
			toback() {
				console.log('123555')
				let params = new URLSearchParams();
				params.append("customID", this.customID)
				params.append("receiver", this.receiver)
				params.append("emails", this.emails)
				params.append("contact", this.contact)
				params.append("address", this.cityName + this.address)

				addAddress(params).then((res)=>{
					console.log(res,"我的数据")
				})
			},
			join(e) {

				this.address = e.target.value
			},
			Onconfirm(res) {
				let str = ''
				window.event? window.event.cancelBubble = true : e.stopPropagation();
				for(let key in res){
					str = res[0].name + res[1].name + res[2].name
				}
				this.cityName = str;
				this.name = false
			},
			toShowCity() {

				this.name = true;
			},
			 tochange() {
			this.cityData = {
			province_list: {
				110000: '北京市1123',
				120000: '天津市233'
			},
			city_list: {
				110100: '北京市',
				110200: '县',
				120100: '天津市',
				120200: '县'
			},
			county_list: {
				110101: '东城区',
				110102: '西城区',
				110105: '朝阳区',
				110106: '丰台区',
				120101: '和平区',
				120102: '河东区',
				120103: '河西区',
				120104: '南开区',
				120105: '河北区'
			}
			}
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
@import '../styles/list.less';
.addressAdd{
	height: 100%;
	background: @bg_h;
}
 section{
	 background: #ffffff;
 }
.two{
	.flex-row;
	.people{
		margin-right: .31rem;
		flex: 1;
	}
	.phone{
		flex: 1;
	}
}

.text{
    overflow: hidden;
  }
     .button-main{
       display: flex;
      justify-content: center;
      position: absolute;
      z-index: 200;
      left: 100px;
    .change-city-button{
    font-size: .3rem;
    border: 0 none;
    text-align: center;
  }
  }

  .delete{
	  .flex-row;
	  justify-content: center;
	  margin-top: 1.2rem;

	  .van-button{
		  background: none;
		  width: 2.6rem;
		  height: .7rem;
		  border: 1px solid #FE001E;
		  color: #FE001E;
	  }
  }
</style>
