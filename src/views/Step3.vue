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
  name: "Step3",
  data() {
    return {
      q: 1,
      curArr: [],
      itemArr: [
        {
          tit: "3、请选出与梁波同志事迹最吻合的词语。",
          src: require("../assets/s1_3.jpg"),
          que: [
            {
              key: "A",
              con: "爱党、敬业、奉献"
            },
            {
              key: "B",
              con: "隐忍、奉献、守纪"
            },
            {
              key: "C",
              con: "机智、大局、豪情 "
            },
            {
              key: "D",
              con: "拥护党、维护党、服务党"
            }
          ]
        },
        {
          tit: "3、救命松的故事告诉我们，谁就是“救命松”。",
          src: require("../assets/s2_3.jpg"),
          que: [
            {
              key: "A",
              con: "赵万庆"
            },
            {
              key: "B",
              con: "共产党"
            },
            {
              key: "C",
              con: "人民群众"
            },
            {
              key: "D",
              con: "苏静"
            }
          ]
        },
        {
          tit: "3、京西革命史上第一位烈士是？",
          src: require("../assets/s3_3.jpg"),
          que: [
            {
              key: "A",
              con: "杨思忠"
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
              con: "赵万庆"
            }
          ]
        },
        {
          tit: "3、苏静同志曾在环境恶劣的山洞中坚守了多长时间？",
          src: require("../assets/s4_3.jpg"),
          que: [
            {
              key: "A",
              con: "3年"
            },
            {
              key: "B",
              con: "4年"
            },
            {
              key: "C",
              con: "5年"
            },
            {
              key: "D",
              con: "6年"
            }
          ]
        }
      ]
    };
  },
  methods: {
    select(item) {
      storage.set("step" + this.q + "_3", item);
      this.$router.push({
        path: "/end"
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
