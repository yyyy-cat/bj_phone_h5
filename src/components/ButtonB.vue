<template>
    <div :class="toshow ? 'button b' : 'button h'" @click="submit">
        {{name}}
    </div>
</template>

<script>
export default {
    name: 'ButtonB',
    data() {
        return{
        }
    },
    props:{
        name:{
            type: String
        },
        toshow:{
            type: Boolean
        },
        toSubmit: {
            type: Function
        }

    },
    methods:{
        submit() {
            this.$props.toSubmit()
        }
    }
}
</script>

<style lang="less" scoped>

.button{
    margin: 0 auto;
    width:6.86rem;
    height:.88rem;
    line-height: .88rem;
    border-radius:.44rem;
    font-size: .3rem;
    text-align: center;
}

.b{
     background:rgba(0,152,255,1);
     color: #ffffff;
}

.h{
    background:rgba(233,237,244,1);
    color: #AFC0D2;
}
</style>