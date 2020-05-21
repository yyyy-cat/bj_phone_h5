<template>
    <div class="offside">
      <section v-for="(item, idx) in list" :key="idx">
          <div class="top">
              <span>————</span>
              <div class="title">{{item.text}}</div>
              <span>————</span>
          </div>
          
          <div class="main">
              <div class="item" v-for="(data, index) in item.content" :key="index" @click="toDetail">
                  <img :src="data.icon" alt="">
                  <span>{{data.name}}</span>
              </div>
          </div>
      </section>
    </div>
</template>

<script>
import offsideData from '@/config/varible'
export default {
    name: 'Offside',
    components:{
    },
    data() {
        return{
            list: {}
        }
    },
    created() {
        this.list = offsideData.SELECT_INDEX
        console.log(this.list)
    },
    methods: {
      toDetail() {
          this.$router.push('/eRecord')
      }
    }
}
</script>

<style lang="less" scoped>
@import '../styles/common.less';
.offside{
    section{
        .top{
            height: 1rem;
            .flex-row;
            justify-content: center;
            span{
                color: #E6E6E6;
            }
            .title{
                padding: 0 .2rem;
                font-size: @fl_size;
                color: @pt_color;
            }
        }

        .main{
            .flex-row;
            flex-wrap: wrap;
            padding: 0 .28rem;
            .item{
                font-size: .22rem;
                .flex-column;
                width: 1.48rem;
                height: 1.48rem;
                justify-content: center;
                align-items: center;
                img{
                    width: .4rem;
                    height: .4rem;
                    margin-bottom: .14rem;
                }
            }
        }
    }
}
</style>