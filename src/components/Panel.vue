<template>
  <div id="panel">
    <List />
  </div>
</template>

<script>
import List from "../components/List";

export default {
  name: "Panel",
  components: {
    List
  }
};
</script>

<style>
#panel {
  height: 100vh;
  color: #ccc;
  /* background-color: #1e1e1e; */
  -webkit-app-region: drag;
}
</style>