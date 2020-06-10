<template>
    <div class="dbDetailList">
        <div class="list">
            <van-swipe-cell>
               <section>
                   <div class="left">
                       <span>布编:</span><span>ASD3421</span>
                       <div class="img">
                           <span class="txt">布编:ASD3421</span>
                       </div>
                   </div>
                   <div class="right">
                       
                   </div>
               </section>
                <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" />
                </template>
            </van-swipe-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dbDetailList'
}
</script>

<style lang="less" scoped>
.list{
    section{
        background: #ffffff;
        height: 3.12rem;
        width: 7.18rem;
        border-radius: .16rem;
    }

    
}
</style>