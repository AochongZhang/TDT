<template>
  <div id="app" class="base">
    <LeftBar class="base" :style="{width: global.leftBar.width}" />
    <router-view
      class="base"
      :style="{width: global.client.width - global.leftBar.width + 'px', left: global.leftBar.width + 'px'}"
    />
  </div>
</template>

<script>
import LeftBar from "./components/LeftBar";

export default {
  name: "app",
  components: {
    LeftBar
  },
  data() {
    return {
      global: this.Global
    };
  },
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.Global.client.width = document.documentElement.clientWidth;
      _this.Global.client.height = document.documentElement.clientHeight;
    };
  }
};
</script>

<style>
#app {
  width: 100%;
  overflow: hidden;
}
</style>
