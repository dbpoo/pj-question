<template>
  <div class="step">
    <h2>{{ curArr.tit }}</h2>
    <p><img :src="curArr.src" alt="" /></p>
    <ul>
      <li
        v-for="(item, index) in curArr.que"
        :key="index"
        @click="select(item.key)"
      >
        {{ `${item.key}.${item.con}` }}
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
      curArr: [],
      itemArr: [
        {
          tit: "1、梁波同志是在什么时间牺牲的?",
          src: require("../assets/s1_1.jpg"),
          que: [
            {
              key: "A",
              con: "1947年9月"
            },
            {
              key: "B",
              con: "1948年9月"
            },
            {
              key: "C",
              con: "1949年9月"
            },
            {
              key: "D",
              con: "1947年8月"
            }
          ]
        },
        {
          tit: "1、救命松救了谁的命?",
          src: require("../assets/s2_1.jpg"),
          que: [
            {
              key: "A",
              con: "聂荣臻"
            },
            {
              key: "B",
              con: "纪亭榭"
            },
            {
              key: "C",
              con: "张友恒"
            },
            {
              key: "D",
              con: "梁波"
            }
          ]
        },
        {
          tit: "1、梁波同志是平西站的第几任站长？",
          src: require("../assets/s3_1.jpg"),
          que: [
            {
              key: "A",
              con: "第三任"
            },
            {
              key: "B",
              con: "第四任"
            },
            {
              key: "C",
              con: "第五任"
            },
            {
              key: "D",
              con: "第六任"
            }
          ]
        },
        {
          tit: "1、苏静同志是在哪一年被派往妙峰山从事发报工作的？",
          src: require("../assets/s4_2.jpg"),
          que: [
            {
              key: "A",
              con: "1943年"
            },
            {
              key: "B",
              con: "1945年"
            },
            {
              key: "C",
              con: "1949年"
            },
            {
              key: "D",
              con: "1950年"
            }
          ]
        }
      ]
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
    this.curArr = this.itemArr[this.q - 1];
  }
};
</script>

<style scoped lang="less">
@import "../css/step";
</style>
