<template>
  <div class="step">
    <h2>结果如下</h2>
    <ul>
      <li>{{ step1 }}</li>
      <li>{{ step2 }}</li>
      <li>{{ step3 }}</li>
    </ul>
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
}
</style>
