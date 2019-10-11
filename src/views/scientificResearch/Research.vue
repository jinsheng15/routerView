<template>

    <div class="research">
        <div class="title">学术新闻</div>
        <div class="news-container ">
            <div class="scale-container news-img">
                <img
                    src="../../assets/img/research-banner.png"
                    alt=""
                >
            </div>

            <div class="news-list">
                <div
                    class="news-item"
                    v-for="(item,index) in news.slice(0,6)"
                    :key="index"
                >
                    <div class="news-item-content ellipse">{{item.title}}</div>
                    <div class="news-item-time">
                        <Time
                            :time="item.time"
                            type="date"
                        />
                    </div>
                </div>
                <div class="more click-op">查看更多</div>
            </div>
        </div>
        <div class="title">学术交流</div>
        <div class="exchange-container">
            <div class="exchange-item">
                <div class="exchange-item-img scale-container">
                    <img
                        src="../../assets/img/research-img.png"
                        alt=""
                    >
                </div>

                <div class="exchange-title">学术会议</div>
                <div class="exchange-text row2-ellipse">简要介绍清华大学具有战略性、前沿性创新性的高水平的学术论坛</div>
            </div>
            <div class="exchange-item">
                <div class="exchange-item-img scale-container">
                    <img
                        src="../../assets/img/research-img.png"
                        alt=""
                    >
                </div>
                <div class="exchange-title">学术会议</div>
                <div class="exchange-text">简要介绍清华大学具有战略性、前沿性创新性的高水平的学术论坛</div>
            </div>
            <div class="exchange-item">
                <div class="exchange-item-img scale-container">
                    <img
                        src="../../assets/img/research-img.png"
                        alt=""
                    >
                </div>
                <div class="exchange-title">学术会议</div>
                <div class="exchange-text">简要介绍清华大学具有战略性、前沿性创新性的高水平的学术论坛</div>
            </div>
        </div>
        <div class="title">学术讲坛</div>
        <div class="bema-container">
            <div class="bema-item header">
                <div class="bema-item-time">
                    日期
                </div>
                <div class="bema-item-name">演讲人</div>
                <div class="bema-item-identify">身份</div>
                <div class="bema-item-title">演讲题目</div>
                <div class="bema-item-address">地点</div>
            </div>
            <div
                class="bema-item"
                v-for="(item,index) in bema"
                :key="index"
            >
                <div class="bema-item-time">
                    <Time
                        :time="item.time"
                        type="date"
                    /></div>
                <div class="bema-item-name">{{item.name}}</div>
                <div class="bema-item-identify row3-ellipse">{{item.identify}}</div>
                <div class="bema-item-title row3-ellipse">{{item.title}}</div>
                <div class="bema-item-address row3-ellipse">{{item.address}}</div>
            </div>
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
      ],
      bema: [
        {
          time: new Date().getTime() - 60 * 3 * 1000,
          name: "文汉德",
          identify: "科德宝特种化工集团总裁兼首席执行官",
          title: "经济全球化时代里的跨文化对话与理解",
          address: "博文苑807室"
        },
        {
          time: new Date().getTime() - 86460 * 3 * 1000,
          name: "文汉德",
          identify: "科德宝特种化工集团总裁兼首席执行官",
          title: "经济全球化时代里的跨文化对话与理解",
          address: "博文苑807室"
        },
        {
          time: new Date().getTime() - 123360 * 3 * 1000,
          name: "文汉德",
          identify: "科德宝特种化工集团总裁兼首席执行官",
          title: "经济全球化时代里的跨文化对话与理解",
          address: "博文苑807室"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.research {
  .title {
    margin-bottom: 20px;
    width: 130px;
    height: 37px;
    line-height: 37px;
    background-color: #193b90;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    padding-left: 20px;
  }
  .news-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .news-img {
      width: 461px;
      height: 277px;
      // img {
      //   width: 461px;
      //   height: 277px;
      // }
    }
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
      }
    }
  }
  .exchange-container {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .exchange-item {
      margin-right: 20px;
      background: #f2f7fe;
      height: 294px;
      .exchange-item-img {
        width: 100%;
        height: 194px;

        img {
          width: 100%;
          height: 194px;
        }
      }

      .exchange-title {
        width: 100%;
        height: 20px;
        font-size: 14px;
        margin: 10px 0;
        font-weight: bold;
        color: #193b90;
        line-height: 20px;
      }
      .exchange-text {
        width: 263px;
        margin: 0 auto;
        line-height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #303133;
        text-align: left;
      }
    }
  }
  .bema-container {
    .bema-item {
      display: flex;
      align-items: center;
      text-align: left;
      border-bottom: 1px solid #c3c3c3;
      padding: 9px 0;
      font-size: 14px;
      .bema-item-time {
        width: 80px;
      }
      .bema-item-name {
        width: 70px;
      }
      .bema-item-identify {
        width: 220px;
      }
      .bema-item-title {
        width: 220px;
      }
      .bema-item-address {
        flex-grow: 1;
      }
      div {
        margin-right: 40px;
      }
    }
    .header {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>