<template>
  <div id="app">
    <LeftBar />
    <Panel />
  </div>
</template>

<script>
import LeftBar from "./components/LeftBar";
import Panel from "./components/Panel";

export default {
  name: "app",
  components: {
    LeftBar,
    Panel
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
