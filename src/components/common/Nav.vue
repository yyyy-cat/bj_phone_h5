<template>
    <div class="nav">
        <van-nav-bar
        :title="title"
        :border='border'
        :right-text="rightText"
        left-arrow
        @click-right='back'
        >
         <template #right v-if="jsq">
            <img src="@/assets/images/add/icon_counter.png" alt="" class="img">
        </template>
         <template #left v-if="showLeft">
            <span class="iconfont icon-xiangzuojiantou"></span>
        </template>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props:{
        title:{
            type: String
        },
        border:{
            type: Boolean
        },
        backPage:{
            type: Function
        },
        rightText: {
            type: String
        },
        jsq: {
            type: Boolean
        },
        showLeft: {
            type: Boolean
        }
    },
    methods: {
        back() {
            this.$props.backPage();
        }
    }
}
</script>

<style lang="less" scoped>

.nav{
    .van-nav-bar{
		height: .88rem;
		background: #ffffff;
	}
}

.img{
    width: .36rem;
    height: .36rem;
}
</style>