<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <div class="footer-top">
                    <img
                        class="top-logo"
                        src="../assets/img/lab-logo.png"
                        alt=""
                    >
                    <div class="top-box">
                        <div class="top-title">上海交通大学实验室</div>
                        <div class="top-content">Jiaotong University Laboratory</div>
                    </div>
                </div>
                <div class="footer-bottom-list">
                    <div class="footer-bottom-item">
                        <div class="footer-bottom-item-back"></div>
                        <div class="footer-bottom-item-text">微博</div>
                    </div>
                    <div class="footer-bottom-item">
                        <div class="footer-bottom-item-back"></div>
                        <div class="footer-bottom-item-text">微信</div>
                    </div>
                    <div class="footer-bottom-item">
                        <div class="footer-bottom-item-back"></div>
                        <div class="footer-bottom-item-text">微博</div>
                    </div>
                </div>

            </div>
            <div class="footer-right">
                <div
                    class="footer-right-item"
                    v-for="item in menu"
                    :key="item.label"
                >
                    <div class="footer-right-item-title">{{item.label}}</div>
                    <ul
                        class="footer-right-item-list"
                        v-if="item.children"
                    >
                        <li
                            v-for="row in item.children"
                            :key="row.label"
                        >{{row.label}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-content">
            <div class="footer-content-normal">版权所有&nbsp;&nbsp;上海交通大学实验室</div>
            <div class="footer-content-normal">沪公安网备31009102000045</div>
            <div class="footer-content-normal default">文保网安备案号1101080018 &nbsp;&nbsp;&nbsp;&nbsp;地址：上海市闵行区学院路37号 &nbsp;&nbsp;&nbsp;&nbsp;邮编：100191 &nbsp;&nbsp;&nbsp;&nbsp;电话：82317114</div>
        </div>
    </div>
</template>

<script>
import { menu } from "../assets/util/menu";
export default {
  data() {
    return {
      menu
    };
  }
};
</script>

<style lang="less" scoped>
.footer {
  padding: 30px 0 18px 0;
  .footer-container {
    display: flex;

    align-items: flex-start;
    .footer-left {
      .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 250px;
        .top-logo {
          width: 60px;
          height: 60px;
        }
        .top-box {
          width: 180px;
          color: #c0c4cc;
          font-weight: 500;
          .top-title {
            height: 21px;
            line-height: 21px;
            font-size: 16px;
            text-align: center;
          }
          .top-content {
            margin-top: 5px;
            height: 21px;
            line-height: 21px;
            font-size: 12px;
          }
        }
      }
      .footer-bottom-list {
        width: 250px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .footer-bottom-item {
          margin-top: 40px;
          .footer-bottom-item-back {
            width: 32px;
            height: 32px;
            background-color: #d8d8d8;
            transition: all 0.6s ease;
            &:hover {
              transform: translateY(-10px);
              cursor: pointer;
              + .footer-bottom-item-text {
                text-decoration: underline;
                opacity: 1;
              }
            }
          }
          .footer-bottom-item-text {
            margin-top: 10px;
            height: 17px;
            line-height: 17px;
            font-size: 12px;
            font-weight: 400;
            color: #fff;
            opacity: 0.58;
          }
        }
      }
    }
    .footer-right {
      margin-left: 100px;
      margin-top: 10px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 650px;
      height: 165px;
      .footer-right-item {
        color: #fff;
        text-align: center;
        .footer-right-item-title {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          font-weight: 500;
          opacity: 0.8;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .footer-right-item-list {
          list-style: none;
          margin-top: 20px;
          li {
            opacity: 0.58;
            font-weight: 500;
            margin-bottom: 10px;
            &:hover {
              opacity: 1;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .footer-content {
    margin-top: 40px;
    display: flex;
    align-items: center;
    .footer-content-normal {
      font-size: 12px;
      color: #fff;
      opacity: 0.6;
      margin-right: 40px;
    }
    .default {
      opacity: 1;
    }
  }
}
</style>