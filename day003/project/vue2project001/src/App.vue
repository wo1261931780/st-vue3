<!--
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2023-08-13 15:21:24
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2023-08-13 15:43:28
 * @FilePath: \vue2project001\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->

<template>
  <div class="App">
    <!-- 快捷链接 -->
    <XtxShortCut></XtxShortCut>
    <!-- 顶部导航 -->
    <XtxHeaderNav></XtxHeaderNav>
    <!-- 轮播区域 -->
    <XtxBanner></XtxBanner>
    <!-- 新鲜好物 -->
    <XtxNewGoods></XtxNewGoods>
    <!-- 热门品牌 -->
    <XtxHotBrand></XtxHotBrand>
    <!-- 最新专题 -->
    <XtxTopic></XtxTopic>
    <!-- 版权底部 -->
    <XtxFooter></XtxFooter>
  </div>
</template>

<script>
import XtxShortCut from "./components/XtxShortCut.vue";
import XtxHeaderNav from "./components/XtxHeaderNav.vue";
import XtxBanner from "./components/XtxBanner.vue";
import XtxNewGoods from "./components/XtxNewGoods.vue";
import XtxHotBrand from "./components/XtxHotBrand.vue";
import XtxTopic from "./components/XtxTopic.vue";
import XtxFooter from "./components/XtxFooter.vue";

export default {
  components: {
    XtxShortCut,
    XtxHeaderNav,
    XtxBanner,
    XtxNewGoods,
    XtxHotBrand,
    XtxTopic,
    XtxFooter,
  },
};
</script>

<style>
</style>