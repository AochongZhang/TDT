<template>
  <div id="console">
    <div class="title">
      <div class="input-left">
        <div style="float: left;">
          <span class="input-margin">远端地址</span>
          <el-input class="host-input input-margin" size="mini" v-model="host"></el-input>
        </div>
        <div style="float: left;">
          <span class="input-margin">远端端口</span>
          <el-input class="port-input input-margin" size="mini" v-model="port"></el-input>
          <span class="input-margin">本地端口</span>
          <el-input
            class="port-input input-margin"
            size="mini"
            v-model="localPort"
            placeholder="随机"
          ></el-input>
        </div>
      </div>
      <div class="input-right">
        <el-button class="input-margin" size="mini">连接</el-button>
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
      localPort: ""
    };
  }
};
</script>

<style>
#console {
  background-color: #2a2a2a;
  color: #ccc;
}

.title {
  margin: 20px;
  text-align: center;
  /* background-color: #1e1e1e; */
}

.host-input {
  width: 220px;
}

.port-input {
  width: 68px;
}

.input-margin {
  margin: 5px;
}

.input-left {
  position: absolute;
  left: 20px;
  margin-right: 90px;
}

.input-right {
  position: absolute;
  right: 20px;
}
</style>