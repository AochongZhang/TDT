<template>
  <div id="left-bar">

    <div id="logo"></div>
    <div class="btn">
      <img class="icon" src="../assets/server.svg" alt />
    </div>

    <div class="btn">
      <i class="el-icon-s-platform"></i>
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
  width: 20px;
}

.router-link {
  color: #ccc;
}

.router-link-active {
  color: #1c8bf0;
}
</style>