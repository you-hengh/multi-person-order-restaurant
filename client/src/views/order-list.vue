<template>
  <div class="wrapper">
    <div class="list-wrapper">
      <div class="title">桌号： 888</div>
      <div class="list-box">
        <div v-for="item in 20" :key="item" class="list-item">
          <div class="img">菜品图片</div>
          <div class="info">
            <span class="one-row-text">
              菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名菜名
            </span>
            <span class="fs12">x1</span>
          </div>
          <span class="price">
            ￥
            <strong>188.88</strong>
          </span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btn">再次点餐</div>
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
.fs12 {
  font-size: 12px;
}
.wrapper {
  padding: 10px 10px 0;
  width: 100%;
  height: calc(100vh - var(--tabs-item-horizontal-height));
  box-sizing: border-box;
  overflow: hidden;
  font-size: 14px;
  background-color: #efefef;

  display: grid;
  grid-template-rows: 1fr 60px;

  .list-wrapper {
    overflow-y: auto;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;

    .title {
      height: 40px;
      line-height: 40px;
      justify-self: center;
      font-size: 20px;
      font-weight: bold;
      width: 100%;
      border-bottom: 1px solid #efefef;
      margin-bottom: 10px;
    }

    // 更改滚动条样式
    &::-webkit-scrollbar {
      display: none;
    }

    .list-box {
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      .list-item {
        display: flex;
        border-radius: 6px;

        &:not(:last-child) {
          margin-bottom: 20px;
        }

        .img {
          width: 60px;
          height: 60px;
          border-radius: 3px;
          background-color: $themeColor;
        }

        .info {
          max-width: 62vw;
          box-sizing: border-box;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 60px;
          font-size: 14px;
        }

        .price {
          display: flex;
        }
      }
    }
  }

  .footer {
    width: 100%;
    padding: 10px 10px 0;
    justify-self: center;
    display: flex;
    justify-content: space-around;

    .btn {
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      color: #fff;
      flex: 1;
      background-color: #b388ff;
    }
  }
}
</style>
