<template>
    <div class="base main">
        <CommonSearchBar></CommonSearchBar>
        <div class="base-menu main">
            <div class="container">
                <CommonMenu
                    :index="index"
                    @refetch="handleRefetch"
                ></CommonMenu>
            </div>
        </div>
        <div class="body container">
            <CommonLeftMenu
                :info="info"
                :child="child"
                @refetch="handleRefetch"
            ></CommonLeftMenu>
            <div class="body-right">

                <Breadcrumb
                    v-if="info"
                    class="body-header"
                >
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem
                        :to="`${`/${$route.path.split('/')[1]}/index`}?index=${$route.query.index}&child=1`"
                        @click="child==1"
                    >{{info.label}}</BreadcrumbItem>
                    <BreadcrumbItem>{{info.children[child-1].label}}</BreadcrumbItem>
                </Breadcrumb>

                <Divider />
                <!-- :class="{'my-router':changed}" -->
                <router-view :class="{'animated pulse':changed}" />

            </div>
        </div>
    </div>
</template>

<script>
import CommonSearchBar from "../components/CommonSearchBar";
import CommonMenu from "../components/CommonMenu";
import CommonLeftMenu from "../components/CommonLeftMenu";
import { menu } from "../assets/util/menu";
export default {
  components: {
    CommonSearchBar,
    CommonMenu,
    CommonLeftMenu
  },
  data() {
    return {
      info: null,
      child: 1,
      transitionName: "slide-right",
      changed: true,
      index: this.$route.query.index
    };
  },
  created() {
    this.info = menu[this.$route.query.index];
    this.child = this.$route.query.child || this.child;
  },
  methods: {
    handleRefetch(active) {
      this.changed = false;

      if (active.child) {
        this.child = active.child;
      } else {
        this.child = 1;
      }
      if (active.index) {
        this.index = active.index;
        this.info = menu[active.index];
      }

      this.$nextTick(() => {
        this.changed = true;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes fadeA {
  0% {
    opacity: 0;

    transform: translate(-100%, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.my-router {
  animation: fadeA 0.3s linear;
}
.base-menu {
  margin-top: 40px;
  background-color: #193b90;
}
.body {
  margin-top: 40px;
  display: flex;
  .body-right {
    margin-left: 40px;
    flex-grow: 1;
    .body-header {
      display: flex;
      justify-content: flex-start;
    }
  }
}
</style>