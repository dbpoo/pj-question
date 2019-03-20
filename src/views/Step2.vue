<template>
  <div class="step">
    <h2>Step2</h2>
    <ul>
      <li v-for="(item, index) in seletArr" :key="index" @click="select(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "good-storage";

export default {
  name: "Step2",
  data() {
    return {
      seletArr: ["A", "B", "C", "D"]
    };
  },
  methods: {
    select(item) {
      const q = storage.get("q");
      storage.set("step" + q + "_2", item);
      this.$router.push({
        path: "/step3"
      });
    }
  }
};
</script>

<style scoped lang="less">
.step {
  width: 750px;
  height: 100%;
  background: url('../assets/bg.jpg') repeat center 0;
  background-size: 750px 1333px;
  ul li {
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
