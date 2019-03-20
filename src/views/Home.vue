<template>
  <div class="step">
    <div class="startBtn">
      <a href="javascript:;" @click="start"></a>
    </div>
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
  background: url("../assets/start.jpg") no-repeat center 0;
  background-size: 750px 1333px;
}

.startBtn {
  width: 100%;
  height: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
  left: 0;
  a {
    width: 421px;
    height: 133px;
    display: inline-block;
    background: url("../assets/btn.png") no-repeat center 0;
    background-size: 421px 133px;
  }
}
</style>
