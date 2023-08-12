<!--
 * @Author: junw wo1261931780@gmail.com
 * @Date: 2023-08-12 19:24:39
 * @LastEditors: junw wo1261931780@gmail.com
 * @LastEditTime: 2023-08-12 20:26:11
 * @FilePath: \vue3project\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <DemoHeader></DemoHeader>
    <DemoMain></DemoMain>
    <!-- 这个组件，就直接注册即可 -->
    <!-- 不需要在下面import一次 -->
    <CommonButton></CommonButton>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import DemoHeader from "./components/DemoHeader.vue";
import DemoMain from "./components/DemoMain.vue";
// 导出的是，当前组件的配置项
export default {
  name: "App",
  //   对当前组件的注册
  //   使用大驼峰的形式
  components: {
    // HelloWorld,
    DemoHeader: DemoHeader,
    // 简写和非简写都是一样的效果
    DemoMain,
  },
};
</script>
<!-- 看到的内容，实际都在这里做编写 -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
