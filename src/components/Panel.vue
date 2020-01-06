<template>
  <div id="panel">
    <!-- <div class=""> -->
      <List class="list" />
      <!-- <div class="base drag-line"></div> -->
    <!-- </div> -->
    
    <!-- <Console /> -->
  </div>
</template>

<script>
import List from "../components/List";
// import Console from "../components/Console";

export default {
  name: "Panel",
  components: {
    List
  }
};
</script>

<style>
#panel {
  color: #ccc;
  /* background-color: #1e1e1e; */
  -webkit-app-region: drag;
}

.list {
  width: 250px;
}

.drag-line {
  width: 5px;
  background-color: red;
  right: 0;
}
</style>