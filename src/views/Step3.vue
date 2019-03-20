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
          tit: "1、梁波同志是在什么时间牺牲的?",
          src: require("../assets/s3_1.jpg"),
          que: [
            {
              key: "A",
              con: "1947年9月"
            },
            {
              key: "B",
              con: "1947年9月"
            },
            {
              key: "C",
              con: "1947年9月"
            },
            {
              key: "D",
              con: "1947年9月"
            }
          ]
        },
        {
          tit: "2、梁波同志是在什么时间牺牲的?",
          src: require("../assets/s3_2.jpg"),
          que: [
            {
              key: "A",
              con: "1947年9月"
            },
            {
              key: "B",
              con: "1947年9月"
            },
            {
              key: "C",
              con: "1947年9月"
            },
            {
              key: "D",
              con: "1947年9月"
            }
          ]
        },
        {
          tit: "3、梁波同志是在什么时间牺牲的?",
          src: require("../assets/s3_3.jpg"),
          que: [
            {
              key: "A",
              con: "1947年9月"
            },
            {
              key: "B",
              con: "1947年9月"
            },
            {
              key: "C",
              con: "1947年9月"
            },
            {
              key: "D",
              con: "1947年9月"
            }
          ]
        },
        {
          tit: "4、梁波同志是在什么时间牺牲的?",
          src: require("../assets/s3_4.jpg"),
          que: [
            {
              key: "A",
              con: "1947年9月"
            },
            {
              key: "B",
              con: "1947年9月"
            },
            {
              key: "C",
              con: "1947年9月"
            },
            {
              key: "D",
              con: "1947年9月"
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
.step {
  width: 750px;
  height: 100%;
  h2 {
    padding: 120px 30px 120px 30px;
    font-size: 36px;
  }
  p {
    display: flex;
    justify-content: center;
    padding-bottom: 80px;
    img {
      width: 588px;
      height: 400px;
      border-radius: 20px;
      border: 20px solid rgba(221, 199, 161, 0.5);
    }
  }
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    li {
      width: 600px;
      height: 81px;
      background: url("../assets/btnbg.png") no-repeat 0 0;
      background-size: 600px 81px;
      margin-bottom: 15px;
      font-weight: bold;
      color: #ede0c9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
