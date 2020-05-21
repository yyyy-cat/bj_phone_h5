<template>
    <div class="tab">
        <span class="iconfont icon-xiangzuojiantou"> 左边箭头</span>
        <span class="text">{{topName}}</span>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    props:{
        topName:{
            type: String
        }
    },
}
</script>

<style lang="less" scoped>

.tab{

    height: .5rem;
    line-height: .36rem;
    padding-top: .33rem;

    .iconfont{
        margin-left: .25rem;
    }

    .text{
        font-size: .36rem;
        margin-left: 2.4rem;
        font-weight:500;
        color: #ffffff;
    }
}
</style>