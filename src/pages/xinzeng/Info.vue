<template>
  <div class="info">
    <Nav title="基本信息" :border="false" :backPage="toback" rightText="保存" />
    <section>
      <div class="main">
        <div class="top">名片资料</div>
        <div class="carame">
          <van-uploader multiple ref="checked" :after-read="onRead" :accept="'image/*'">
            <img src="@/assets/images/icon_add_camera.png" alt />
            <!-- <div class="phone" icon="photo">
							<span>新增图片</span>
            </div>-->
          </van-uploader>
          <div class="showImg">
            <div class="img"></div>
          </div>
        </div>
        <div class="top">其他信息</div>
        <div class="row">
          <label for class="name">展会名称</label>
          <input type="text" class="text" v-model="customSource" />
        </div>
        <div class="row">
          <label for class="name">客户名称</label>
          <input type="text" class="text" v-model="companyName" />
        </div>
        <div class="row">
          <label for class="name">客户性质</label>
          <input type="text" class="text" v-model="customNature" />
        </div>
        <div class="row">
          <label for class="name hx">客户营销品牌</label>
          <input type="text" class="text" v-model="marketingBrand" />
        </div>
        <div class="row">
          <label for class="name">国家地区</label>
          <input type="text" class="text" v-model="area" />
        </div>
        <div class="row">
          <label for class="name hx">客户联系人</label>
          <input type="text" class="text" v-model="linkman" />
          <!-- <div class="people">
					<div class="name">客户联系人</div>
          <input type="text" class="text" v-model="linkman">-->
        </div>
        <!-- <div class="phone">
					<div class="name">职位</div>
					<input type="text" class="text">
				</div>
        </div>-->
        <div class="row">
          <label for class="name">联系人职务</label>
          <input type="text" class="text" v-model="position" />
        </div>
        <div class="row">
          <label for class="name">联系人电话</label>
          <input type="text" class="text" v-model="phone" />
        </div>
        <div class="row">
          <label for class="name">联系邮箱</label>
          <input type="text" class="text" v-model="email" />
        </div>
        <div class="row">
          <label for class="name">客户地址</label>
          <input type="text" class="text" v-model="address" />
        </div>
        <div class="row">
          <label for class="name">备注</label>
          <input type="text" class="text" v-model="remark" />
        </div>
      </div>
      <div class="row">
        <Remarks />
      </div>
    </section>
  </div>
</template>

<script>
import { uploadPic, getPicuuid, addCustom } from "@/api/Add/index";
import Nav from "@/components/common/Nav";
import Remarks from "@/components/common/Remarks";
export default {
  name: "Info",
  components: {
    Nav,
    Remarks
  },
  data() {
    return {
      imgData: [],
      customID: "",
      customSource: "",
      customNature: "",
      marketingBrand: "",
      linkman: "",
      position: "",
      area: "",
      phone: "",
      address: "",
      remark: "",
      companyName: "",
      email: "",
      fileList: [
        { url: "@/assets/images/login-img.png" },
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  created() {
    getPicuuid().then(res => {
      this.customID = res.data.data;
    });
  },
  methods: {
    toback() {
      // !this.marketingBrand && !this.linkman
      if (this.marketingBrand == "" && this.linkman == "") {
        this.$toast("请填写客户营销品牌，客户联系人");
        return;
      }
      let files = new FormData();
      files.append("customSource", this.customSource);
      files.append("customNature", this.customNature);
      files.append("marketingBrand", this.marketingBrand);
      files.append("linkman", this.linkman);
      files.append("position", this.position);
      files.append("area", this.area);
      files.append("phone", this.phone);
      files.append("address", this.address);
      files.append("remark", this.remark);
      files.append("companyName", this.companyName);
      files.append("email", this.email);
      addCustom(files).then(res => {
        if (res.data.data == true) {
          this.$router.go(-1);
        }
      });
    },
    onRead(e) {
      let files = new FormData();
      files.append("file", e.file);
      files.append("customID", this.customID);
      files.append("kind", "1");
      uploadPic(files).then(res => {
        console.log(res);
      });
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
<style scoped lang='less'>
@import '../../styles/common.less';
/deep/.van-toast{
	height: 1rem!important;
}
.info {
  padding-bottom: 0.8rem;
  background: @bg_h;

  section {
    width: 7.18rem;
    height: 100%;
    margin: 0.15rem auto 0;
    background: #ffffff;
    padding-bottom: 0.15rem;

    .two {
      .flex-row;
      .people {
        .flex-row;
        flex: 1;
      }
      .phone {
        .flex-row;
      }
    }

    .main {
      width: 100%;

      .carame {
        .flex-row;
        justify-content: center;
        height: 1.68rem;

        .van-uploader {
          .flex-column;
          justify-content: center;
          align-items: center;
          width: 1.4rem;
          height: 1.06rem;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .showImg {
          .img {
            margin-left: 0.2rem;
            width: 1.81rem;
            height: 1.02rem;
            background: pink;
          }
        }
      }
      .top {
        position: relative;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.32rem;
        font-size: 0.24rem;
        color: #333333;
        background: pink;
      }
      .top:before {
        position: absolute;
        top: 0.23rem;
        left: 0.16rem;
        background-color: #108ee9;
        width: 0.06rem;
        height: 0.2rem;
        border-radius: 0.03rem;
        content: "";
      }

      .row {
        margin: 0 0.2rem;
        line-height: 1.2rem;
        height: 1.2rem;
        border-bottom: 0.01rem solid #999999;

        .name {
          color: #999999;
          font-size: 0.22rem;
        }

        .text {
          height: 0.7rem;
          font-size: 0.22rem;
        }
      }
      .hx {
        position: relative;
      }
      .hx::after {
        position: absolute;
        color: red;
        content: "*";
      }
    }
  }
}
</style>
