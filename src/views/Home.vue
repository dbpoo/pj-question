<template>
  <div class="home">
    <div class="bg"></div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: "home"
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style lang="less" scoped>
.bg {
  width: 750px;
  height: 100px;
  background-color: #ff0000;
}
</style>
