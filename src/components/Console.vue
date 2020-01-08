<template>
  <div id="console">
    <div class="title">
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
    <div class="content" :style="{height: contentHeight + 'px'}">
      <div class="send-wrap">
        <div class="control-bar">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <el-switch v-model="value" active-color="#1c8bf0" inactive-color="#ccc"></el-switch>
            </el-col>
            <el-col :span="7">
              <el-button size="mini">发送</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">清空</el-button>
            </el-col>
          </el-row>
        </div>
        <el-input class="control-text" :style="{height: textWrapHeight + 'px'}" resize="none" type="textarea" :rows="5" v-model="textarea"></el-input>
      </div>
      <div class="recive-wrap">
        <div class="control-bar">
          <el-row type="flex" justify="space-between">
            <el-col :span="12">
              <el-switch v-model="value" active-color="#1c8bf0" inactive-color="#ccc"></el-switch>
            </el-col>
            <el-col :span="7">
              <el-button size="mini">发送</el-button>
            </el-col>
            <el-col :span="3">
              <el-button size="mini">清空</el-button>
            </el-col>
          </el-row>
        </div>
        <el-input class="control-text" :style="{height: textWrapHeight + 'px'}" resize="none" type="textarea" :rows="5" v-model="textarea"></el-input>
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
      global: this.Global
    };
  },
  computed: {
    contentHeight() {
      return this.global.client.height - 90
    },
    textWrapHeight() {
      return (this.contentHeight - 120) / 2
    }
  }
};
</script>

<style>
#console {
  height: 100vh;
  padding: 20px;
  background-color: #2a2a2a;
  color: #ccc;
}

.title {
  margin-bottom: 20px;
}

.control-bar {
  margin: 0 0 20px 0;
}

.control-text {
  margin: 0 0 20px 0;
}
</style>