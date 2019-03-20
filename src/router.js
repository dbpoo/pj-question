import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Step1 from "./views/Step1.vue";
import Step2 from "./views/Step2.vue";
import Step3 from "./views/Step3.vue";
import End from "./views/End.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "q1",
      meta: {
        index: 0
      },
      component: Home
    },
    {
      path: "/step1",
      name: "step1",
      meta: {
        index: 1
      },
      component: Step1
    },
    {
      path: "/step2",
      name: "step2",
      meta: {
        index: 3
      },
      component: Step2
    },
    {
      path: "/step3",
      name: "step3",
      meta: {
        index: 4
      },
      component: Step3
    },
    {
      path: "/end",
      name: "end",
      meta: {
        index: 5
      },
      component: End
    }
  ]
});
