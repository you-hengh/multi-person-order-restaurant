<template>
  <div class="wrapper">
    <div class="title">桌号： 888 订单</div>
    <div class="list-box">
      <div v-for="item in 20" :key="item" class="list-item">
        <div class="img">菜品图片</div>
        <div class="info">
          <span class="one-row-text">
            菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名
          </span>
          <span>￥<strong>188.88</strong></span>
          <span>*1</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="next-btn btn">再次点餐</div>
      <div class="over-btn btn">柜台结账</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$themeColor: #673ab7;
.one-row-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.wrapper {
  padding: 10px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 14px;

  display: grid;
  grid-template-rows: 60px 1fr 60px;

  .title {
    height: 60px;
    line-height: 60px;
    justify-self: center;
    font-size: 20px;
    font-weight: bold;
  }

  .list-box {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .list-item {
      display: flex;
      border: 1px solid $themeColor;
      border-radius: 6px;
      background: linear-gradient(to right bottom, #b39ddb, #d1c4e9, #ede7f6);

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      .img {
        width: 100px;
        height: 100px;
        border-radius: 6px;
        background-color: $themeColor;
      }

      .info {
        width: 62vw;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        strong {
          font-size: 18px;
        }
      }
    }
  }

  .footer {
    width: 100%;
    padding: 10px;
    justify-self: center;
    display: flex;
    justify-content: space-around;

    .btn {
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      width: 180px;
      color: #fff;
    }

    .next-btn {
      background-color: #b388ff;
    }

    .over-btn {
      background-color: $themeColor;
    }
  }
}
</style>
