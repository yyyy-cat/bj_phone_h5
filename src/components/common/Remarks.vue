<template>
   	<div class="remarks">
        <div class="name">备注信息</div>
        <div class="main">
            <div class="row-info">
                <label for="">联系人</label>
                <input type="text" class="text">
            </div>
            <div class="row-info">
                <label for="">联系人</label>
                <input type="text" class="text">
            </div>
            <div class="row-info">
                <label for="">联系人</label>
                <input type="text" class="text">
            </div>

            <div class="opera">
                <div class="qk">清空</div>
                <div class="data right-data">名片资料</div>
                <div class="data">
                    <span>123</span>
                    识别
                </div>
            </div>
        </div>
			
	</div>
</template>

<script>
export default {
    name: 'Remarks',
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';

.remarks{
    width: 6.82rem;
    height: 2.5rem;
    background: #E9EDF4;
    margin: .4rem .16rem 0;

    .name{
        padding: .2rem .2rem .1rem;
        color: #0098FF;
        font-size: .24rem;
    }

    .main{
        margin: 0 auto;
        width: 6.42rem;
        height: 1.78rem;
        background: #ffffff;

        
    }

}
    
.row-info{
    padding: .05rem;
    .flex-row;
    color: #333333;
    font-size: .22rem;

    .text{
        flex: 1;
        height: 0.3rem;
    }


}

.opera{
    .flex-row;
    justify-content: space-between;

    .qk{
        color: #0098FF;
        font-size: .22rem;
    }

    .right-data{
        margin-left: 3.2rem;
    }
    .data{
        margin-top: .1rem;
        color: #0098FF;
        width:1.2rem;
        height:.4rem;
        border:1px solid rgba(0,152,255,1);
        border-radius:.2rem;
        font-size: .2rem;
        text-align: center;
        line-height: .4rem;
    }
}
</style>