<template>
    <div class="notice">

        <div class="news-list">
            <div
                class="news-item"
                v-for="(item,index) in news.slice(0,4)"
                :key="index"
            >
                <div class="news-item-content ellipse click-op">{{item.title}}</div>
                <div class="news-item-time">
                    <Time
                        :time="item.time"
                        type="date"
                    />
                </div>
            </div>
            <div class="more click-op">查看更多</div>
        </div>
        <div class="notice-img scale-container">
            <img
                src="../../assets/img/notice-banner.png"
                alt=""
            >
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 60 * 3 * 1000
        },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 86400 * 3 * 1000
        },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 60 * 3 * 1000
        },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 86400 * 3 * 1000
        },
        { title: "高分辨率SAR目标检测与识别软件系统", time: new Date() },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          time: new Date().getTime() - 60 * 3 * 1000
        },
        { title: "高分辨率SAR目标检测与识别软件系统", time: new Date() }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.notice {
  display: flex;
  justify-content: space-between;
  .news-list {
    width: 450px;
    height: 277px;
    .news-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      padding: 8px 0;
      border-bottom: 1px solid #ccc;

      .news-item-content {
        max-width: 310px;
        font-weight: bold;
      }
      .news-item-time {
        color: #909399;
        font-weight: 400;
      }
      &:hover .news-item-content {
        color: #193b90;
        cursor: pointer;
      }
    }
  }
  .notice-img {
    width: 399px;
    height: 190px;
  }
}
</style>