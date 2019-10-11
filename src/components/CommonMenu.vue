<template>
    <div class="menu">
        <div
            class="menu-list"
            v-for="(item,index) in menu"
            :key="item.label"
        >
            <div
                class="list-title click-op "
                :class="{'active':active==index}"
                @click="goTo(item.src,index)"
            >
                {{item.label}}
            </div>
            <div
                class="list-ul"
                v-if="item.children"
            >
                <div
                    class="list-li click-op"
                    v-for="(row,j) in item.children"
                    :key="row.label"
                    @click="goTo(row.src,index,j+1)"
                >{{row.label}}</div>

            </div>
        </div>

    </div>
</template>

<script>
import { menu } from "../assets/util/menu";
export default {
  props: ["index"],
  data() {
    return {
      menu,
      active: this.index
    };
  },
  created() {
    if (this.$route.path == "/index") {
      this.active = 0;
    }
  },
  methods: {
    goTo(path, index = null, child = null) {
      if (!path) return;
      if (path == "/index") {
        return this.$router.push({ path });
      }

      if (child) {
        this.$emit("refetch", { index, child });
      } else {
        this.$emit("refetch", { index });
      }

      this.$router.push({ path, query: { index, child } });
    }
  },
  watch: {
    index(val) {
      this.active = val;
    }
  }
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .menu-list {
    position: relative;
    transition: all 0.3s linear;

    &:hover {
      .list-title {
        color: #2c8dfc;
        background: #fff;
        cursor: pointer;
        font-weight: 600;
      }
    }
    .list-title {
      //   height: 25px;
      font-size: 18px;
      font-weight: 500;
      line-height: 25px;
      color: #fff;
      padding: 20px;
      transition: all 0.3s linear;
      &:hover {
        color: #2c8dfc;
        background: #fff;
        cursor: pointer;
        font-weight: 600;
      }
    }
    .active {
      color: #2c8dfc;
      background: #fff;
      cursor: pointer;
      font-weight: 600;
    }
    &:hover {
      cursor: pointer;
      .list-ul {
        display: block;
      }
    }
    @keyframes showMenu {
      0% {
        opacity: 0;
        transform: translate(-5px, -5px);
        height: 0;
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
        height: auto;
      }
    }
    .list-ul {
      z-index: 999;
      position: absolute;
      top: 65px;
      left: 0;
      background: #fff;
      display: none;
      width: 200px;
      animation: showMenu 0.6s linear;
      .list-li {
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        padding: 20px;
        text-align: left;
        transition: all 0.2s linear;
        &:hover {
          color: #2c8dfc;
          cursor: pointer;
          font-weight: 600;
        }
      }
      &:hover {
        .list-title {
          color: #2c8dfc;
          background: #fff;
          cursor: pointer;
          font-weight: 600;
        }
      }
    }
  }
}
</style>