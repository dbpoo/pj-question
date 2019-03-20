<template>
  <div class="step">
    <a href="javascript:;" @click="start">开始答题12123</a>
  </div>
</template>

<script>
import storage from "good-storage";
import { getUrlPar } from "../js/uitls";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    start() {
      this.$router.push({
        path: "/step1"
      });
    }
  },
  mounted() {
    storage.set("q", getUrlPar("q"));
  }
};
</script>

<style scoped lang="less">
.step {
  width: 750px;
  height: 100%;
  background: url('../assets/start.jpg') no-repeat center 0;
  background-size: 750px 1333px;
  a {
    display: block;
    height: 100px;
    background-color: #ff0000;
    margin-bottom: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
