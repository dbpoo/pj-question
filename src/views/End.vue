<template>
  <div class="step">
    <div class="end-tit"></div>
    <ul>
      <li>第一题：{{ step1 }}</li>
      <li>第二题：{{ step2 }}</li>
      <li>第三题：{{ step3 }}</li>
    </ul>
    <div class="end-tips"></div>
  </div>
</template>

<script>
import storage from "good-storage";

export default {
  name: "StepEnd",
  data() {
    return {
      step1: "",
      step2: "",
      step3: ""
    };
  },
  mounted() {
    const q = storage.get("q");
    this.step1 = storage.get("step" + q + "_1");
    this.step2 = storage.get("step" + q + "_2");
    this.step3 = storage.get("step" + q + "_3");
  }
};
</script>

<style scoped lang="less">
.step {
  width: 750px;
  height: 100%;
  background: url("../assets/end.jpg") repeat center 0;
  background-size: 750px 1333px;
  padding-top: 380px;
  ul li {
    font-size: 42px;
    margin-bottom: 10px;
  }
}
.end-tit {
  width: 750px;
  height: 345px;
  background: url("../assets/end_tit.png") no-repeat 0 0;
  background-size: contain;
}
.end-tips {
  width: 750px;
  height: 81px;
  background: url("../assets/end_tips.png") no-repeat 0 0;
  background-size: contain;
  position: absolute;
  bottom: 5%;
  left: 0;
}
</style>
