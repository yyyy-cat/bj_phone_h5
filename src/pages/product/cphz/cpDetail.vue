<template>
  <div>
    <!--  头部  -->
    <div class="header">
      <div class="iconfont icon-xiangzuojiantou" @click="tuihou"></div>
      <h2 class="cloth">
        布编：
        <span>E0004A</span>
      </h2>
    </div>
    <!--  轮播  -->
    <van-swipe class="my-swipe" indicator-color="white" @change="onChange">
      <van-swipe-item>
        <span class="img_wrap">
          <img src="@/assets/images/product/cpt.jpg" alt />
        </span>
      </van-swipe-item>
      <van-swipe-item>
        <span class="img_wrap">
          <img src="@/assets/images/product/cpt1.jpg" alt />
        </span>
      </van-swipe-item>
      <van-swipe-item>
        <span class="img_wrap">
          <img src="@/assets/images/product/cpt2.jpg" alt />
        </span>
      </van-swipe-item>
      <van-swipe-item>
        <span class="img_wrap">
          <img src="@/assets/images/product/cpt3.jpg" alt />
        </span>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
    <div class>
      <div class="popup_wrap">
        <div class="popup_top">
          <div class="series"></div>
          <h2>面料工艺信息</h2>
        </div>
        <div class="popup_bottom">
          <div class="small_box">
            <div>布编</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>后整</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>经纱规格</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>成品幅宽</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>纬纱规格</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>洗前克重</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>成品经密</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>洗后克重</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>成品纬密</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>经向缩率</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>组织</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>纬向缩率</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>成分</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>产品风险及隐患</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>颜色(color)</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>推荐产品</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>起版依据</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>吊牌说明</div>
            <p>111</p>
          </div>
          <div class="small_box">
            <div>市场价格(员/码)</div>
            <p>111</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "cpDetail",
  components: {
    Swipe,
    SwipeItem
  },
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    // 退回
    tuihou() {
      this.$router.go(-1);
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  background: #e9edf4;
  height: 0.88rem;
  line-height: 0.88rem;
  display: flex;
  position: fixed;
  padding: 0 0.2rem;
  z-index: 9;
  .cloth {
    margin: 0 0 0 2.2rem;
    font-size: 0.3rem;
    font-family: Noto Sans S Chinese;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
  }
}
.my-swipe {
  width: 100%;
  height: 100%;
  background: url("../../../assets/images/product/lbbg.png") no-repeat;
  background-size: 100% 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 1.5rem;
  text-align: center;
  margin-top: 0.88rem;
}
.custom-indicator {
  width:.6rem;
  text-align: center;
  position: absolute;
  right: 0.05rem;
  bottom: 0.05px;
  padding: 0.02px 0.05px;
  font-size: 0.12px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.4);
}
.img_wrap {
  img {
    width: 5.34rem;
    height: 8rem;
    border-radius: 0.2rem;
    margin-top: 0.2rem;
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
      font-size: 0.24rem;
      font-family: Noto Sans S Chinese;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 0.18rem;
      margin-left: 0.2rem;
    }
  }

  .popup_bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 0.1rem;
    margin-top: 0.19rem;
    .small_box {
      width: 3rem;
      p {
        height: 0.5rem;
        font-size: 0.22rem;
        font-family: Noto Sans S Chinese;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 0.5rem;
      }
      div {
        font-size: 0.22rem;
        font-family: Noto Sans S Chinese;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}
</style>