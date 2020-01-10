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
  -webkit-app-region: no-drag;
}

.base {
  height: 100vh !important;
  position: absolute !important;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.el-button,
.el-input__inner {
  border-radius: 5px;
  text-overflow: ellipsis;
  padding: 0 4px;
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

.el-button--mini,
.el-button--mini.is-round {
  padding: 4px 8px;
}

.el-input__inner:focus {
  border: 2px solid #1c8bf0;
}

.el-input--mini .el-input__inner {
  height: 24px;
  line-height: 24px;
}

.el-textarea__inner,
.el-textarea__inner:hover,
.el-textarea__inner:focus {
  height: 100%;
  background-color: #1e1e1e;
  color: #f5f7f7;
  border: none;
  box-shadow: 1px 1px 2px 0px #4e4e4e;
}

.el-input-group__append,
.el-input-group__prepend {
  padding: 0 8px;
  background: #676869;
  color: #f5f7f7;
  border: none;
  box-shadow: 0px -1px 1px 0px #848484;
}

.el-radio-button__inner {
  background: #676869;
  color: #f5f7f7;
  border: none;
  /* box-shadow: 0px -1px 1px 0px #848484; */
}

.el-radio-button--mini .el-radio-button__inner {
  padding: 4px 8px;
  margin: 2px 0;
}

.el-radio-button:first-child .el-radio-button__inner {
  border-left: none;
}

.el-radio-button__inner:hover {
  color: #f5f7f7;
}

.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.el-divider--horizontal {
  margin: 20px 0;
}

.el-divider {
  background-color: #676869;
}

.el-divider__text {
  border-radius: 10px;
  color: #f5f7f7;
  background-color: #676869;
  font-size: 10px;
  font-weight: lighter;
}
</style>