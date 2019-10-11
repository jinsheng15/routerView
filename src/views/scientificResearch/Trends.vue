<template>
    <div class="trends-container">
        <div
            class="trends-item"
            v-for="(item,index) in trends"
            :key="index"
        >
            <div class="trends-title ellipse click-op">{{item.title}}</div>
            <div class="trends-time"> <Time
                    :time="item.time"
                    type="date"
                /></div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      trends: [
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 13460 * 3 * 1000
        },
        {
          title: "三维电磁仿真与建模软件",
          time: new Date().getTime() - 1260 * 3 * 1000
        },
        {
          title: "交大实验室高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 12360 * 3 * 1000
        },
        {
          title: "三维电磁仿真与建模软件",
          time: new Date().getTime() - 666660 * 3 * 1000
        },
        {
          title: "三维电磁仿真与建模软件",
          time: new Date().getTime() - 1260 * 3 * 1000
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.trends-container {
  .trends-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 16px;
    .trends-title {
      max-width: 400px;
      font-weight: 400;
      &:hover {
        font-weight: bold;
        color: #193b90;
        cursor: pointer;
      }
    }
    .trends-time {
      color: #909399;
    }
  }
}
</style>