<template>
  <div class="index-page">
    <van-tree-select
      height="100vh"
      width="1.96rem"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <Offside />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Offside from "../components/Offside";
export default {
  name: "IndexPage",
  components: {
    Offside
  },
  data() {
    return {
      items: [
        {
          text: "客户"
        },
        {
          text: "产品"
        },
        // {
        //   text: "销售"
        // },
        // {
        //   text: "数据"
        // }
      ],
      activeId: 1,
      activeIndex: 0
    };
  }
};
</script>

<style scoped>
.van-sidebar-item {
  height: 0.98rem;
  line-height: 0.98rem;
  text-align: center;
  color: #333333;
  font-size: 0.26rem;
}
.van-sidebar-item--select::before {
  width: 0.06rem;
  height: 0.26rem;
  background-color: #0098ff;
}
</style>
