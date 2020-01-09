<template>
  <div id="console">
    <el-container :style="{height: containerHeight + 'px'}">
      <el-header height="30px">
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
      </el-header>
      <el-main class="main">
        <el-container class="container">
          <el-header height="30px" class="header">a</el-header>
          <el-main class="main">b</el-main>
        </el-container>
        <!-- <div class="control-bar">
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
        <el-scrollbar class="control-text" :style="{height: textWrapHeight + 'px'}">
          <el-input :autosize="{ minRows: 15}" resize="none" type="textarea" v-model="textarea"></el-input>
        </el-scrollbar>-->
      </el-main>
      <el-main class="main">
        <el-container class="container">
          <el-header height="30px" class="header">a</el-header>
          <el-main class="main">b</el-main>
        </el-container>
        <!-- <div class="control-bar">
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
        <el-input class="control-text" :style="{height: textWrapHeight + 'px'}" resize="none" type="textarea" :rows="5" v-model="textarea"></el-input>-->
      </el-main>
    </el-container>
    <!-- <div class="title">
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
        <el-scrollbar class="control-text" :style="{height: textWrapHeight + 'px'}">
          <el-input :autosize="{ minRows: 15}" resize="none" type="textarea" v-model="textarea"></el-input>
        </el-scrollbar>
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
    </div>-->
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
    containerHeight() {
      return this.global.client.height - 40;
    }
  }
};
</script>

<style>
#console {
  padding: 20px;
  background-color: #2a2a2a;
  color: #ccc;
  -webkit-app-region: drag;
}

#title {
  /* margin-bottom: 20px; */
}

.control-bar {
  /* margin: 0 0 20px 0; */
}

.control-text {
  /* margin: 0 0 20px 0; */
}

.header {
  /* margin-bottom: 20px; */
  border: 1px solid;
}

.main {
  margin-top: 20px;
  border: 1px solid;
}

.container {
  height: 100%;;
}
</style>