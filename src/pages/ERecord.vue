<template>
    <div class="records">
        <Nav title="展会纪录" rightText='新增' :showLeft='true' :backPage='toAdd'/>
        <section>
           <div class="main-s">
               <div class="search">
                    <span class="iconfont icon-sousuo"></span>
                    <span>搜索</span>
                </div>
           </div>
        <div class="change-main">
            <span>待提交</span>
            <span>待审批</span>
        </div>
        <div class="content" v-for="(data, index) in 2" :key="index">
            <div class="top">
                <span>Inditex_Oysho</span>
                <span class="iconfont icon-lajitong ljt"></span>
            </div>
            <div class="main">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide row" v-for="(item,index) in 3" :key="index">
                        <div class="left">
                            <div class="name">请完善调版订单</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="right">
                    <div class="gb">挂卡 版布 挂卡</div>
                    <span class="count">共100件</span>
                </div>
            </div>
            <div class="footer">等待提交审批</div>
        </div>
        </section>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Swiper from 'swiper';
export default {
    name: 'ERecord',
    components: {
        Nav
    },
    data() {
        return{
            value: '我的搜索框',
            active: 1,
            swiper: null
        }
    },
    mounted() {
        this.swiper = new Swiper('.swiper-container', {
				 slidesPerView: 1,
				 slidesPerColumn: 2,
		 })
    },
    methods: {
        toAdd() {
           this.$router.push('/add')
        }
    }
}
</script>
<style lang="less">
html, body{
    height: 100%;
}
</style>

<style lang="less" scoped>
@import '../styles/common.less';

 .swiper-container {
      width: 6rem;
	  overflow: hidden;
	  margin-bottom: .4rem;
	}
    .swiper-slide {
      text-align: center;
	  background: #fff;
	  width: 1.48rem !important;
	  display: inline-block;
	  margin-right: .1rem;

    }
.records{
    height: 100%;
    background: @bg_h;
    section{
        .main-s{
            padding: .15rem 0;
            width:7.18rem;
            margin: 0 auto;

        }
        .search{
            
            height:.6rem;
            background:rgba(255,255,255,1);
            border-radius:.3rem;
            color:rgba(0,56,86,1);
            font-size: @fl_size;
            text-align: center;
            line-height: .6rem;

            .iconfont{
                font-size: .26rem;
            }
        }

        .change-main{
            text-align: center;
            height: .7rem;
            line-height: .7rem;
            background: #ffffff;
            font-size: .26rem;
            color: #333333;
            span{
                padding: .45rem;
            }
        }

        .content{
            margin: .1rem auto;
            width:7.18rem;
            height:2.92rem;
            background:rgba(255,255,255,1);
            border-radius:.16rem;
            .flex-column;
            padding: 0 .16rem;

            .top{
                .flex-row;
                justify-content: space-between;
                height: .6rem;
                span{
                    font-size: .24rem;
                    color: #333333;
                }
                .ljt{
                    font-size: .3rem;
                    background: #E9EDF4;
                    padding: .1rem;
                    border-radius: 50%;
                }
            }

            .main{
                .flex-row;
                .left{
                    display: flex;
                    align-items: flex-end;
                    width:1.48rem;
                    height:1.48rem;
                    background:rgba(233,237,244,1);
                    border-radius:4px;

                    .name{
                        background:rgba(0,0,0,0.4);
                        color: #fff;
                        font-size: .18rem;
                        height: .36rem;
                        line-height: .36rem;
                        text-align: center;
                        width: 100%;
                    }
                }

                .right{
                    margin-top: -.4rem;
                    width: 1.2rem;
                    height: 1.48rem;
                    background: url('../assets/images/shadow.png') no-repeat;
                    background-size: 100% 100%;
                    text-align: center;
                    .gb{
                        margin-top: .34rem;
                        width:.4rem;
                        font-size:.18rem;
                        color: #333333;
                        margin-left: .6rem;
                        .textOne;
                    }

                    .count{
                        color: #999999;
                        font-size: .18rem;
                        margin-left: .2rem;
                    }
                }
            }

            .footer{
                font-size: .24rem;
                color: #FE001E;
            }
        }
    }
}
</style>