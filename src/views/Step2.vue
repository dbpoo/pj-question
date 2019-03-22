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
  name: "Step2",
  data() {
    return {
      q: 1,
      curArr: [],
      itemArr: [
        {
          tit: "2、梁波同志的原名?",
          src: require("../assets/s1_2.jpg"),
          que: [
            {
              key: "A",
              con: "刘宝光"
            },
            {
              key: "B",
              con: "赵万庆"
            },
            {
              key: "C",
              con: "杨思忠"
            },
            {
              key: "D",
              con: "张友恒"
            }
          ]
        },
        {
          tit: "2、七七事变后，在北平西郊一带活跃着一支名叫国民抗日军的游击队 ，后被改编为?",
          src: require("../assets/s2_2.jpg"),
          que: [
            {
              key: "A",
              con: "八路军第四支队"
            },
            {
              key: "B",
              con: "八路军第五支队"
            },
            {
              key: "C",
              con: "八路军第六支队"
            },
            {
              key: "D",
              con: "八路军第七支队"
            }
          ]
        },
        {
          tit: "2、梁波同志是何时加入的中国共产党？",
          src: require("../assets/s3_2.jpg"),
          que: [
            {
              key: "A",
              con: "1936"
            },
            {
              key: "B",
              con: "1937"
            },
            {
              key: "C",
              con: "1938"
            },
            {
              key: "D",
              con: "1939"
            }
          ]
        },
        {
          tit: "2、苏静同志曾在环境恶劣的山洞中坚守了多长时间？",
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
      storage.set("step" + this.q + "_2", item);
      this.$router.push({
        path: "/step3"
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
