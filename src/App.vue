<template>
  <div id="app">
    <LeftBar />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LeftBar from "./components/LeftBar";

export default {
  name: "app",
  components: {
    HelloWorld,
    LeftBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  background-color: bisque;
  width: 100%;
  height: 100vh;
}
</style>
