<template>
    <div
        class="left-menu"
        v-if="info"
    >
        <div class="back-area">{{info.label}}</div>
        <div
            class="menu-list"
            v-if="info.children"
        >
            <div
                class="menu-item click-op"
                :class="{'active':active==index+1}"
                v-for="(item,index) in info.children"
                :key="item.label"
                @click="handleClick(index)"
            >
                {{item.label}}
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: ["info", "child"],
  data() {
    return {
      active: this.child || 1
    };
  },

  methods: {
    handleClick(index) {
      if (!this.info.children[index].src) return;
      this.active = index + 1;
      this.$router.push({
        path: this.info.children[index].src,
        query: { index: this.$route.query.index, child: this.active }
      });
      this.$emit("refetch", { child: this.active });
    }
  },
  watch: {
    child(val) {
      this.active = val;
    }
  }
};
</script>

<style lang="less" scoped>
.left-menu {
  position: relative;
  width: 220px;
  height: 400px;
  .back-area {
    width: 210px;
    height: 388px;
    padding-top: 20px;
    padding-left: 30px;
    background: #193b90;
    color: #fff;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
  }
  .menu-list {
    position: absolute;
    top: 68px;
    left: 15px;
    width: 201px;
    height: 340px;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.12);
    .menu-item {
      height: 68px;
      line-height: 68px;
      width: 100%;
      font-size: 20px;
      font-weight: 400;
      padding-left: 20px;
      text-align: left;
      border-left: 6px solid #fff;
      &:hover {
        cursor: pointer;
        background-color: #f7b500;
        color: #fff;
        font-weight: bold;
      }
    }
    .active {
      color: #f7b500;
      border-left: 6px solid #f7b500;
    }
  }
}
</style>