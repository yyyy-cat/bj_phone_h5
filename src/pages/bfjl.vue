<template>
  <div class="records">
    <Nav title="拜访纪录" rightText="新增" :showLeft="true" :backPage="toAdd" />
    <section>
      <div class="main-s">
        <div class="search">
          <span class="iconfont icon-sousuo"></span>
          <span>搜索</span>
        </div>
      </div>
      <div class="content" v-for="(data, index) in 5" :key="index">
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
            <div class="gb">挂卡版布挂卡版布</div>
            <span class="count">共100件</span>
          </div>
        </div>
        <div class="footer">等待完善调版单</div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/common/Nav";
import Swiper from "swiper";
export default {
  name: "bfjl",
  components: {
    Nav
  },
  data() {
    return {
      value: "我的搜索框",
      active: 1,
      swiper: null
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      slidesPerColumn: 2
    });
  },
  methods: {
    toAdd() {
      this.$router.push("/add");
    }
  }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
}
</style>

<style lang="less" scoped>
@import "../styles/common.less";

.swiper-container {
  width: 6rem;
  overflow: hidden;
  margin-bottom: 0.4rem;
}
.swiper-slide {
  text-align: center;
  background: #fff;
  width: 1.48rem !important;
  display: inline-block;
  margin-right: 0.1rem;
}
.records {
  height: 100%;
  background: @bg_h;
  section {
    .main-s {
      padding: 0.15rem 0;
      width: 7.18rem;
      margin: 0 auto;
    }
    .search {
      height: 0.6rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.3rem;
      color: rgba(0, 56, 86, 1);
      font-size: @fl_size;
      text-align: center;
      line-height: 0.6rem;

      .iconfont {
        font-size: 0.26rem;
      }
    }

    .content {
      margin: 0.1rem auto;
      width: 7.18rem;
      height: 2.92rem;
      background: rgba(255, 255, 255, 1);
      border-radius: 0.16rem;
      .flex-column;
      padding: 0 0.16rem;

      .top {
        .flex-row;
        justify-content: space-between;
        height: 0.6rem;
        span {
          font-size: 0.24rem;
          color: #333333;
        }
        .ljt {
          font-size: 0.3rem;
          background: #e9edf4;
          padding: 0.1rem;
          border-radius: 50%;
        }
      }

      .main {
        .flex-row;
        .left {
          display: flex;
          align-items: flex-end;
          width: 1.48rem;
          height: 1.48rem;
          background: rgba(233, 237, 244, 1);
          border-radius: 4px;

          .name {
            background: rgba(0, 0, 0, 0.4);
            color: #fff;
            font-size: 0.18rem;
            height: 0.36rem;
            line-height: 0.36rem;
            text-align: center;
            width: 100%;
          }
        }

        .right {
          margin-top: -0.4rem;
          width: 1.2rem;
          height: 1.48rem;
          background: url("../assets/images/shadow.png") no-repeat;
          background-size: 100% 100%;
          text-align: center;
          .gb {
            margin-top: 0.34rem;
            width: 0.6rem;
            font-size: 0.18rem;
            color: #333333;
            margin-left: 0.4rem;
            .textOne;
          }

          .count {
            color: #999999;
            font-size: 0.18rem;
            margin-left: 0.2rem;
          }
        }
      }

      .footer {
        font-size: 0.24rem;
        color: #fe001e;
      }
    }
  }
}
</style>