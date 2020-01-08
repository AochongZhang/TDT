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

.el-button,
.el-input__inner {
    border-radius: 5px;
}

.el-button,
.el-button:hover,
.el-button:focus,
.el-input__inner,
.el-input__inner:hover {
  background: #676869;
  color: #f5f7f7;
  border: 2px solid #0000;
  box-shadow: 0px -1px 1px 0px #848484;
}

.el-input__inner:focus {
  border: 2px solid #1c8bf0;
}

.el-textarea__inner,
.el-textarea__inner:hover,
.el-textarea__inner:focus {
    height: 100%;
    background-color: #1e1e1e;
    color: #ccc;
    border: none;
    box-shadow: 1px 1px 2px 0px #4e4e4e;
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