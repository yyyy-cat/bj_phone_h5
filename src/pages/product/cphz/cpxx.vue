<template>
  <div class="cpxx_wrap">
    <div class="header">
      <span class="iconfont icon-xiangzuojiantou" @click="tuihou"></span>
      <div class="middle">
        <van-dropdown-menu class="middle_left" active-color="#ee0a24">
          <van-dropdown-item v-model="value1" :options="option" />
        </van-dropdown-menu>
        <van-search class="middle_right" shape="round" v-model="value2" placeholder="请输入搜索关键词" />
      </div>
      <span class="img_wrap" @click="showPopup">
        <img src="@/assets/images/product/filter.png" alt />
      </span>
    </div>
    <div class="box">
      <ul class="content_main">
        <li class="content" v-for="(data,index) in 29" :key="index" @click="detailClick">
          <span class="con_top">
            <!-- <img src="@/assets/images/product/cpt.jpg" alt class="cpt" /> -->
            <img v-for="(img,index) in imageList" v-lazy="img" :key="index" alt class="cpt">
          </span>
          <div class="con_bottom">
            <h2 class="cloth">
              布编：
              <span>E0004A</span>
            </h2>
            <p class="modelNo">
              款号：
              <span>W-190341</span>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <van-popup
      v-model="show"
      position="right"
      :style="{ height:'100%',width: '90%' }"
      closeable
      :closeOnClickOverlay="false"
    >
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>系列</h2>
        </div>
        <div class="popup_bottom">
          <span>牛仔布</span>
          <span>染色布</span>
          <span>色织布</span>
        </div>
      </div>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>性能</h2>
        </div>
        <div class="popup_bottom">
          <span>弹力</span>
          <span>非弹力</span>
        </div>
      </div>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>材料</h2>
        </div>
        <div class="popup_bottom">
          <span>天丝</span>
          <span>棉</span>
          <span>混纺</span>
        </div>
      </div>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>功能性</h2>
        </div>
        <div class="popup_bottom">
          <span>是</span>
          <span>否</span>
        </div>
      </div>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>推荐</h2>
        </div>
        <div class="popup_bottom">
          <span>是</span>
          <span>否</span>
        </div>
      </div>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>产品卖点</h2>
        </div>
        <div class="popup_bottom">
          <span>T-400</span>
          <span>Organic</span>
          <span>Tencel</span>
          <span>Dualfx</span>
          <span>Lycra</span>
          <span>Bi-Stretch</span>
          <span>Selvage</span>
        </div>
      </div>
      <div class="button_two">
        <van-button round class="reset" @click="resetClick">重置</van-button>
        <van-button round class="screen" @click="screenClick">筛选</van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant';


export default {
  name: "cpxx",
  data() {
    return {
      value1: "面料",
      value2: "",
      show: false,
      option: [
        { text: "面料", value: "面料" },
        { text: "款号", value: "款号" }
      ],
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    };
  },
  components: {
      Toast,
  },
  methods: {
    // 退回
    tuihou() {
      this.$router.go(-1);
    },
    // 点击查看产品详情
    detailClick() {
      this.$router.push('/cpDetail')
    },
    // 弹窗
    showPopup() {
      this.show = true;
    },
    // 重置
    resetClick(){
        // console.log("重置")
        Toast('重置');
    },
    // 筛选
    screenClick(){
        console.log("筛选")
    },
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  .iconfont {
    width: .36rem;
    height: .32rem;
    margin-left: 0.2rem;
  }
  .middle {
    height: 0.6rem;
    margin: auto;
    overflow: hidden;
    border: 1px solid rgba(102, 102, 102, 1);
    border-radius: 0.3rem;
    display: flex;
    .middle_left {
      width: 1.5rem;
    }
  }
  .img_wrap {
    margin: 0 .2rem;
    img {
      width: 0.32rem;
      height: 0.32rem;
    }
  }
}
.box {
  padding-top: 0.88rem;
  .content_main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.1rem;
    .content {
      width: 3.54rem;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(227, 227, 227, 1);
      border-radius: 0px 0px 12px 12px;
      margin-top: 0.1rem;
      .con_top {
        .cpt {
          width: 3.54rem;
          height: 5.31rem;
          border-radius: 0.12rem 0.12px 0px 0px;
        }
      }
      .con_bottom {
        width: 3.54rem;
        height: 0.7rem;
        text-align: center;
        .cloth {
          font-size: 0.24rem;
        }
        .modelNo {
          font-size: 0.2rem;
        }
      }
    }
  }
}
.popup_wrap {
  padding: 0.2rem;
  margin-bottom: 0.25rem;
  .popup_top {
    display: flex;
    align-items: center;
    height: 0.4rem;
    .series {
      width: 0.06rem;
      height: 0.26rem;
      background-color: #0098ff;
    }
    h2 {
      font-size: 0.3rem;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 0.18rem;
      margin-left: 0.2rem;
    }
  }
  .popup_bottom {
    span {
      padding: 0.1rem 0.3rem;
      width: 1.42rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border: 1px solid rgba(229, 229, 229, 1);
      border-radius: 0.06rem;
      font-size: 0.22rem;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
  }
}
.button_two {
    position: fixed;
    bottom: .3rem;
    left: .4rem;
  .reset {
    width: 2.98rem;
    height: .6rem;
    border: 1px solid rgba(0, 152, 255, 1);
    border-radius: .3rem;
    font-size: .3rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(0, 152, 255, 1);
  }
  .screen {
    width: 2.98rem;
    height: .6rem;
    background: rgba(0, 152, 255, 1);
    border-radius: .3rem;
    font-size: .3rem;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
</style>