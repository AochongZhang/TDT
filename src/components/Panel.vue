<template>
  <div id="panel">
    <el-row>
      <el-col :span="6">
        <List />
      </el-col>
      <el-col :span="18">
        <Console />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from "../components/List";
import Console from "../components/Console";

export default {
  name: "Panel",
  components: {
    List,
    Console
  }
};
</script>

<style>
#panel {
  color: #ccc;
  -webkit-app-region: drag;
}
</style>