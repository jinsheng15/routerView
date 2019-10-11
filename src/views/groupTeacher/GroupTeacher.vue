<template>

    <div class="group">
        <div class="group-list">
            <div
                class="group-item"
                v-for="item in options"
                :key="item.src"
            >
                <img
                    class="group-avator"
                    :src="item.src"
                >
                <div class="group-item-right">
                    <div class="group-item-title">{{item.name}}</div>

                    <div class="group-content">
                        <span>职务：</span>{{item.zhiwu}}
                    </div>
                    <div class="group-content"><span>职称：</span>{{item.zhicheng}}</div>
                    <div class="group-content"><span>导师类型：</span>{{item.type}}</div>
                    <div class="group-content"><span>个人主页：</span>{{item.page}}</div>

                </div>
            </div>
        </div>
        <Page
            :total="total"
            :current="pageNum"
            :page-size="pageSize"
            @on-change="handleChange"
        />
    </div>

</template>

<script>
export default {
  data() {
    return {
      total: 0,
      pageSize: 6,
      pageNum: 1,
      options: [
        {
          src:
            "https://pte.yibaicdn.com/b1fc98b0-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        },
        {
          src:
            "https://pte.yibaicdn.com/b1fbd560-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        },
        {
          src:
            "https://pte.yibaicdn.com/b1fcbfc0-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        },
        {
          src:
            "https://pte.yibaicdn.com/b1fc71a0-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        },
        {
          src:
            "https://pte.yibaicdn.com/b1fcbfc0-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        },
        {
          src:
            "https://pte.yibaicdn.com/b1fc4a90-eb3b-11e9-baff-dfdd3a2891e1.jpg",
          name: "番茄",
          zhiwu: "院长",
          zhicheng: "教授",
          type: "博导",
          page: "http://djsagdu2873892"
        }
      ]
    };
  },
  methods: {
    handleChange(page) {
      this.pageNum = page;
      this.$emit("fetch-data", this.pageNum);
    }
  }
};
</script>

<style lang="less" scoped>
.group-list {
  display: flex;
  flex-wrap: wrap;
  .group-item {
    margin-bottom: 40px;
    flex-grow: 1;
    display: flex;
    .group-avator {
      width: 144px;
      height: 190px;
    }
    .group-item-right {
      margin-left: 40px;
      .group-item-title {
        text-align: left;
        color: #193b90;
        font-size: 24px;
        font-weight: 500;
        height: 33px;
        line-height: 33px;
        margin-bottom: 39px;
      }
      .group-content {
        text-align: left;
        margin-top: 10px;
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        span {
          font-weight: bold;
        }
      }
    }
  }
}
</style>