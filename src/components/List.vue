<template>
  <div id="list">
    <el-scrollbar>
      <el-menu
        default-active="2"
        class="el-list"
        background-color="#1e1e1e"
        text-color="#ccc"
        active-text-color="#1c8bf0"
      >
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.xxxx.com:8000</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "List"
};
</script>

<style>
#list {
  /* width: 210px; */
  /* overflow: auto; */
}

.el-list {
  height: 100vh;
}

.item {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>