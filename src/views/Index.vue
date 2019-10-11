<template>
    <div class="main">
        <div class="top-menu">
            <IndexMenu class="container"></IndexMenu>
        </div>
        <div class="body"></div>
        <div class="footer">
            <CommonFooter class="container"></CommonFooter>
        </div>
    </div>
</template>
<script>
import IndexMenu from "../components/IndexMenu";
import CommonFooter from "../components/CommonFooter";
export default {
  components: {
    IndexMenu,
    CommonFooter
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/css/common.less");
.top-menu {
  width: 100%;
  height: 700px;
  background-image: url("../assets/img/backimage.jpg");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.body {
  min-height: 800px;
}
.footer {
  background-color: #054773;
  height: 285px;
}
</style>
