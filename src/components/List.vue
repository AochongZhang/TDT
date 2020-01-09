<template>
  <div id="list">
    <el-scrollbar style="height: 100%">
      <el-menu
        default-active="2"
        class="el-list"
        background-color="#1e1e1e"
        text-color="#ccc"
        active-text-color="#1c8bf0"
      >
        <el-menu-item class="item" index="1">
          <i class="el-icon-video-play"></i>
          <span slot="title">127.0.0.1:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="2">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="3">
          <i class="el-icon-video-pause"></i>
          <span slot="title">aaa.bbbbbbbbbbbbbb.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="4">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.cccc.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="5">
          <i class="el-icon-video-pause"></i>
          <span slot="title">aa.bbb.ccc.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="6">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="7">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="8">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="9">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="10">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="11">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="12">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="13">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
        </el-menu-item>
        <el-menu-item class="item" index="14">
          <i class="el-icon-video-pause"></i>
          <span slot="title">www.aaaaa.com:8000</span>
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
.el-list {
  height: 100vh;
}

.el-menu {
  border-right: none;
}

.item {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>