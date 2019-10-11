<template>
    <div class="search-bar main">
        <div class="search-bar-container container">
            <div class="search-bar-left">

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
            <div class="search-bar-right">
                <Input
                    suffix="ios-search"
                    placeholder="搜索"
                    style="width:190px;margin-right:40px;background-color:#fofofo"
                />
                <Button type="text">English</Button>
            </div>
        </div>

    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.search-bar {
  background-color: #fff;
  .search-bar-container {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-bar-left {
      width: 320px;

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
          color: #193b90;
          line-height: 45px;
        }
        .left-content {
          height: 32px;
          font-size: 16px;
          color: #193b90;
          line-height: 32px;
        }
      }
    }
    // .search-bar-right{
    //     dis
    // }
  }
}
</style>