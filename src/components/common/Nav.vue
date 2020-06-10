<template>
    <div class="nav">
        <van-nav-bar
        :title="title"
        :border='border'
        :right-text="rightText"
        left-arrow
        @click-right='back'
        @click-left='backLeftname'
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
        },
        backLeftname() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scoped>

.nav{
    position: relative;
    height: .88rem;
    border:1px solid rgba(233, 237, 244, 1);
box-shadow:0px 0px 6px 0px rgba(50,50,50,0.11);
    .van-nav-bar{
		height: .88rem;
        background: #ffffff;
        position: fixed;
        width: 100%;
	}
}

.img{
    width: .36rem;
    height: .36rem;
}
</style>