<template>
  <div id="app" class="base">
    <LeftBar class="base" :style="{width: leftBarwidth}" />
    <router-view
      class="base"
      :style="{width: rightContentWidth + 'px', left: leftBarwidth + 'px'}"
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
  computed: {
    leftBarwidth() {
      return this.global.leftBar.width
    },
    rightContentWidth() {
      return this.global.client.width - this.leftBarwidth
    }
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
