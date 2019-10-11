<template>
    <div class="achievements">
        <div
            class="achievements-item"
            v-for="(item,index) in data"
            :key="index"
        >
            <div class="achievements-item-img scale-container">
                <img
                    :src="item.src"
                    alt=""
                >
            </div>
            <div class="achievements-item-right">
                <div class="achievements-item-right-container">
                    <div class="achievements-item-right-title">{{item.title}}</div>
                    <div class="achievements-item-right-content row5-ellipse">{{item.content}}</div>
                </div>

                <div class="more">查看更多</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          src:
            "https://pte.yibaicdn.com/97e89db0-ebf5-11e9-afce-c363fe40d718.png",
          content:
            "Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的基于『确定』和『自然』的设计价值观和模块化的"
        },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          src:
            "https://pte.yibaicdn.com/a7539b60-ebf5-11e9-afce-c363fe40d718.png",
          content:
            "Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的"
        },
        {
          title: "高分辨率SAR目标检测与识别软件系统",
          src:
            "https://pte.yibaicdn.com/a2cc3e80-ebf5-11e9-afce-c363fe40d718.png",
          content:
            "Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的Ant Design是一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.achievements {
  .achievements-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    .achievements-item-img {
      width: 303px;
      height: 164px;
      img {
        width: 303px;
        height: 164px;
      }
    }
    .achievements-item-right {
      max-width: 590px;
      margin-left: 40px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 164px;

      .achievements-item-right-container {
        text-align: left;
        .achievements-item-right-title {
          height: 22px;
          font-size: 16px;
          font-weight: bold;
          color: #000;
          line-height: 22px;
          margin-bottom: 20px;
        }
        .achievements-item-right-content {
          font-size: 14px;
          line-height: 19px;
          color: #000;
          font-weight: 400;
        }
      }
      .more {
        color: #2c8dfc;
      }
    }
  }
}
</style>