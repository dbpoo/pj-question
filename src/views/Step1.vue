<template>
  <div class="step">
    <h2 :class="`h2_${q}`">Step1</h2>
    <p :class="`p_${q}`"></p>
    <ul>
      <li
        v-for="(item, index) in seletArr"
        :key="index"
        @click="select(item)"
        :class="`li${q}_${index}`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import storage from "good-storage";

export default {
  name: "Step1",
  data() {
    return {
      q: 1,
      seletArr: ["A", "B", "C", "D"]
    };
  },
  methods: {
    select(item) {
      storage.set("step" + this.q + "_1", item);
      this.$router.push({
        path: "/step2"
      });
    }
  },
  mounted() {
    this.q = storage.get("q");
  }
};
</script>

<style scoped lang="less">
.step {
  width: 750px;
  height: 100%;
  background: url("../assets/bg.jpg") repeat center 0;
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
