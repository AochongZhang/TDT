<template>
  <div id="panel">
    <div class="list" :style="{width: global.listWidth + 'px'}">
      <List />
      <div class="base drag-line" @mousedown="listMouseDown"></div>
    </div>
    <Console 
      class="base console" 
      :style="{left: global.listWidth + 'px', width: global.clientWidth - global.leftBarWidth - global.listWidth + 'px'}" />
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
  },
  data() {
    return {
      global: this.Global,
      listMouseX: 0
    };
  },
  methods: {
    listMouseDown(e) {
      //阻止默认事件
      e.preventDefault();
      this.listMouseX = e.clientX - this.global.leftBarWidth - this.global.listWidth;
      document.onmousemove = this.listMouseMove;
      document.onmouseup = this.listMouseUp;
    },
    listMouseMove(e) {
      let width = e.clientX - this.global.leftBarWidth - this.listMouseX
      width = width < this.global.listMinWidth ? this.global.listMinWidth : width;
      width = width > this.global.listMaxWidth ? this.global.listMaxWidth : width;
      this.global.listWidth = width;
    },
    listMouseUp() {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
};
</script>

<style>
#panel {
  color: #ccc;
  -webkit-app-region: drag;
}

.list {
  position: absolute;
}

.drag-line {
  width: 5px;
  right: 0;
  top: 0;
  cursor: col-resize;
}
</style>