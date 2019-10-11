<template>
    <div class="index-menu">
        <div class="index-left">

            <img
                class="left-logo"
                src="../assets/img/lab-logo.png"
                alt=""
            >

            <div class="left-box">
                <div class="left-title">交通大学实验室</div>
                <div class="left-content">Jiaotong University Laboratory</div>
            </div>
        </div>
        <div class="index-right">
            <div class="right-search">
                <div class="change-btn">English</div>

                <transition name="fade">
                    <Input
                        class="search-input"
                        suffix="ios-search"
                        placeholder="请输入关键字"
                        clearable
                        :autofocus="true"
                        @on-clear="searching=false"
                        @on-blur="searching=false"
                        v-if="searching"
                    />
                </transition>
                <Button
                    type="text"
                    shape="circle"
                    icon="ios-search"
                    size="large"
                    ghost
                    @click="searching=true"
                    transition="fade"
                    v-show="!searching"
                >
                </Button>

            </div>
            <CommonMenu></CommonMenu>
        </div>

    </div>
</template>

<script>
import CommonMenu from "./CommonMenu";
export default {
  components: {
    CommonMenu
  },
  data() {
    return {
      searching: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  width: 200px;
  opacity: 1;
  transition: width 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  width: 0;
}

.index-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .index-left {
    width: 320px;
    margin-top: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-logo {
      width: 60px;
      height: 60px;
    }
    .left-box {
      .left-title {
        height: 45px;
        font-size: 32px;
        font-weight: 500;
        color: #fff;
        line-height: 45px;
      }
      .left-content {
        height: 32px;
        font-size: 16px;
        color: #fff;
        line-height: 32px;
      }
    }
  }
  .index-right {
    width: 750px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .right-search {
      margin-bottom: 20px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      //   max-width: 300px;
      min-width: 140px;
      max-width: 300px;
      .search-input {
      }
      .change-btn {
        margin-right: 40px;
        color: #fff;
        font-weight: 500;
        font-size: 18px;
        height: 25px;
        line-height: 25px;
      }
    }
  }
}
</style>