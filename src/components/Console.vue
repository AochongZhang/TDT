<template>
  <div id="console">
    <div :style="{height: containerHeight + 'px'}">
      <div class="title-bar">
        <el-row type="flex" justify="space-between">
          <el-col :span="12">
            <el-input v-model="host" size="mini">
              <template slot="prepend">目标IP</template>
            </el-input>
          </el-col>
          <el-col :span="7">
            <el-input v-model="port" size="mini">
              <template slot="prepend">目标端口</template>
            </el-input>
          </el-col>
          <el-col :span="3" style="text-align: right">
            <el-button size="mini">连接</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="content-top" :style="{height: contentTopHeight + 'px'}">
        <el-divider content-position="left">发送区</el-divider>
        <div class="control-bar">
          <el-row type="flex" justify="space-between">
            <el-col :span="5">
              <el-radio-group v-model="radio4" size="mini">
                <el-radio-button label="文本"></el-radio-button>
                <el-radio-button label="16进制"></el-radio-button>
              </el-radio-group>
            </el-col>
            <el-col :span="5">
              <el-input v-model="port" size="mini">
                <template slot="prepend">间隔</template>
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">自动发送</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">发送</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">清空</el-button>
            </el-col>
          </el-row>
        </div>
        <el-input
          resize="none"
          :style="{height: contentTopHeight - 65 + 'px'}"
          type="textarea"
          v-model="textarea"
        ></el-input>
      </div>

      <div class="drag-line" @mousedown="dragLineMouseDown">
        <svg class="icon svg-icon" aria-hidden="true">
          <use xlink:href="#icon-tuodong" />
        </svg>
      </div>
      <div class="content-bottom" :style="{height: contentBottomHeight + 'px'}">
        <el-divider content-position="left">接收区</el-divider>
        <div class="control-bar">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <el-switch v-model="value" active-color="#1c8bf0" inactive-color="#ccc"></el-switch>
            </el-col>
            <el-col :span="7">
              <el-button size="mini">接收</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">清空</el-button>
            </el-col>
          </el-row>
        </div>
        <el-input
          resize="none"
          :style="{height: contentBottomHeight - 65 + 'px'}"
          type="textarea"
          v-model="textarea"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {
      host: "tcptest.home.zhangaochong.com",
      port: "65535",
      localPort: "",
      value: false,
      textarea: "aaaaaa",
      global: this.Global,
      dragListMouseY: 0,
      contentTopHeight: 0,
      contentHeightMin: 100,
      radio4: "文本"
    };
  },
  computed: {
    // 容器高度 = 页面高度 - 页面内边距 * 2
    containerHeight() {
      return this.global.client.height - 10 * 2;
    },
    contentAllHeight() {
      return this.containerHeight - 24 - 20 * 2 - 15;
    },
    // 接收区高度 = 内容区总高度 - 发送区高度
    contentBottomHeight() {
      return this.contentAllHeight - this.contentTopHeight;
    }
  },
  watch: {
    // 窗口高度改变时，修改发送区高度
    containerHeight(oldVal, newVal) {
      this.contentTopHeight += (oldVal - newVal) / 2;
    },
    // 限制发送区高度范围
    contentTopHeight(val) {
      let max = this.contentAllHeight - this.contentHeightMin;
      val = val < this.contentHeightMin ? this.contentHeightMin : val;
      val = val > max ? max : val;
      this.contentTopHeight = val;
    }
  },
  methods: {
    dragLineMouseDown(e) {
      //阻止默认事件
      e.preventDefault();
      this.dragListMouseY = e.clientY - 20 * 2 - 10 - this.contentTopHeight;
      document.onmousemove = this.dragLineMouseMove;
      document.onmouseup = this.dragLineMouseUp;
    },
    dragLineMouseMove(e) {
      this.contentTopHeight = e.clientY - 20 * 2 - 10 - this.dragListMouseY;
    },
    dragLineMouseUp() {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  },
  mounted() {
    this.contentTopHeight = this.contentAllHeight / 2;
  }
};
</script>

<style>
#console {
  padding: 10px;
  background-color: #2a2a2a;
  color: #ccc;
  -webkit-app-region: drag;
}

.title-bar {
  -webkit-app-region: drag;
}

.control-bar {
  margin-bottom: 10px;
}

.drag-line {
  height: 10px;
  cursor: row-resize;
  text-align: center;
  background: #444;
  line-height: 10px;
  font-size: 10px;
  border-radius: 5px;
  width: 60px;
  margin: 0 auto;
  margin-top: 5px;
}
</style>