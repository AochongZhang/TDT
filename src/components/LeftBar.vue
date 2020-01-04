<template>
  <div id="left-bar">left bar</div>
</template>

<script>
export default {
  name: "LeftBar"
};
</script>

<style>
#left-bar {
  float: left;
  width: 70px;
  height: 100vh;
  padding: 20px 10px;
  box-sizing: border-box;
  text-align: center;
  color: #ccc;
  background-color: #2a2a2a;
  -webkit-app-region: drag;
}
</style>