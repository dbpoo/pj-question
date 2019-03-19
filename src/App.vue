<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import "css/reset";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px; /*no*/
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
</style>
