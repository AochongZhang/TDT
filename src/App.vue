<template>
  <div id="app" class="base">
    <LeftBar class="base" :style="{width: leftBarWidth}" />
    <router-view
      class="base"
      :style="{width: clientWidth - leftBarWidth + 'px', left: leftBarWidth + 'px'}"
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
      leftBarWidth: 70,
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight
    };
  },
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.clientWidth = document.documentElement.clientWidth;
      _this.clientHeight = document.documentElement.clientHeight;
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.base {
  height: 100vh !important;
  position: absolute !important;
}

#app {
  width: 100%;
}
</style>
