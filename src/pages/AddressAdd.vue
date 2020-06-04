<template>
	<div class="addressAdd">
		<Nav title='编辑地址' :border="false" :backPage="toback" right-text='保存'/>
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
			<div class="sb">
				<Remarks/>
			</div>
			<div class="mrdz">
				<div class="top">设置默认地址</div>
				<div class="tx">提醒：每次调版会默认推荐使用该地址</div>
				<van-switch v-model="isDefault" />
			</div>
			<div class="delete">
				<van-button round>删除地址</van-button>
			</div>
		</section>
		
	</div>
</template>

<script>
	import Nav from '@/components/common/Nav'
	import Globle from '@/utils/global'
	import {addAddress} from '@/api/Add'
	import area from '@/bl/area'
	import Remarks from '@/components/common/Remarks'

	export default {
		name: 'AddressAdd',
		components: {
			Nav,
			Remarks
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
				cityData: {},
				isDefault: false
			}
		},
		created() {
			this.cityData = area;
			this.customID = Globle.get('customID')
		},
		methods:{
			toback() {
				let isDefault = 0;
				if(this.isDefault){
					isDefault = 1
				}else{
					isDefault = 0
				}
				let params = new URLSearchParams();
				params.append("customID", this.customID)
				params.append("receiver", this.receiver)
				params.append("emails", this.emails)
				params.append("contact", this.contact)
				params.append("isDefault", isDefault)
				params.append("address", this.cityName + this.address)

				addAddress(params).then((res)=>{
					this.$router.go(-1)
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

			}
		}
	}
</script>
<style scoped lang='less'>
@import '../styles/common.less';
@import '../styles/list.less';
/deep/.van-picker__toolbar{
	height: .5rem;
}
.addressAdd{
	background: @bg_h;
}
 section{
	 margin: .16rem;
	 background: #ffffff;

	 .sb{
		 padding-bottom: .4rem;
		 border-bottom: 1px solid #E9EDF4;
	 }
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
	  margin-top: .6rem;
	  padding-bottom: .99rem;

	  .van-button{
		  background: none;
		  width: 2.6rem;
		  height: .7rem;
		  border: 1px solid #FE001E;
		  color: #FE001E;
	  }
  }

  .mrdz{
	  position: relative;
	  padding-bottom: .2rem;
	  border-bottom: 1px solid #E9EDF4;
	  .tx{
		  color: #999999;
		  font-size: .22rem;
		  padding-left: .23rem;
	  }

	  .van-switch{
		  position: absolute;
		  top: .45rem;
		  right: .35rem;
		  font-size: .3rem;
	  }
  }
</style>
