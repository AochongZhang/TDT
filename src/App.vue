<template>
  <div id="app">
    <LeftBar />
    <router-view />
  </div>
</template>

<script>
import LeftBar from "./components/LeftBar";

export default {
  name: "app",
  components: {
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
  width: 100%;
  height: 100vh;
}
</style>
