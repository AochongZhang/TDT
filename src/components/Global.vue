<script>
export default {
  client: {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  },
  leftBar: {
    width: 70
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

.el-input__inner {
  background: #676869;
  color: #f5f7f7;
  border: none;
  box-shadow: 0px -1px 1px 0px #848484;
}

.el-button {
  background: #0000;
  color: #409eff;
  border: 1px solid #409eff;
}
.el-button:focus,
.el-button:hover {
  color: #0f87ff;
  border-color: #0f87ff;
  background-color: #0000;
}

.el-checkbox__inner {
  background-color: #0000;
}

.el-input-group__append,
.el-input-group__prepend {
  padding: 0 10px;
  background: #676869;
  color: #f5f7f7;
  border: none;
  box-shadow: 0px -1px 1px 0px #848484;
}
</style>