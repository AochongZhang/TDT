<script>
export default {
  leftBarWidth: 70,
  listWidth: 260,
  listMinWidth: 50,
  listMaxWidth: 400,
  clientWidth: document.documentElement.clientWidth,
  clientHeight: document.documentElement.clientHeight
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
  color: #ccc;
  background: #0000 !important;
}

.el-button {
  background: #0000;
  color: #409eff;
  border: 1px solid #409eff;
}
.el-button:focus, .el-button:hover {
  color: #0f87ff;
  border-color: #0f87ff;
  background-color: #0000;
}

.el-checkbox__inner {
    background-color: #0000;
}

</style>