<template>
  <div>
    <button @click="demo--">-</button>
    <span>{{ demo }}</span>
    <button @click="demo++">+</button>
  </div>
</template>

<script>
export default {
  // data必须是一个函数形式
  // 从而保证每个组件实例都是独立维护数据的
  data() {
    return {
      demo: 111,
    };
  },
};
</script>

<style>
</style>