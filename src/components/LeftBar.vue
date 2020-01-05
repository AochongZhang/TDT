<template>
  <div id="left-bar">
    <div id="logo"></div>

    <div class="btn">
      <router-link to="/client" class="router-link" active-class="router-link-active">
        <i class="el-icon-s-platform"></i>
      </router-link>
    </div>

    <div class="btn">
      <router-link to="/server" class="router-link" active-class="router-link-active">
        <svg class="icon svg-icon" aria-hidden="true">
          <use xlink:href="#icon-server" />
        </svg>
      </router-link>
    </div>

    <div class="btn">
      <i class="el-icon-plus"></i>
    </div>

    <div id="btn-group">
      <div class="btn">
        <router-link to="/about" class="router-link" active-class="router-link-active">
          <i class="el-icon-warning-outline"></i>
        </router-link>
      </div>
      <div class="btn">
        <router-link to="/setting" class="router-link" active-class="router-link-active">
          <i class="el-icon-setting"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/iconfont"

export default {
  name: "LeftBar"
};
</script>

<style>
#left-bar {
  float: left;
  width: 70px;
  height: 100vh;
  padding: 20px 10px;
  box-sizing: border-box;
  text-align: center;
  color: #ccc;
  background-color: #2a2a2a;
  -webkit-app-region: drag;
}

#logo {
  width: 50px;
  height: 50px;
  margin: 25px 0;
  border-radius: 25px;
  background-color: #ffffff;
}

#btn-group {
  position: fixed;
  bottom: 10px;
}

.btn {
  font-size: 26px;
  margin: 14px 12px;
}

.icon {
  width: 0.8em;
    height: 0.8em;
    fill: currentColor;
    overflow: hidden;
}

.router-link {
  color: #ccc;
}

.router-link-active {
  color: #1c8bf0;
}
</style>