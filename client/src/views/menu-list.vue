<template>
  <var-row class="menu-list">
    <var-col class="tabbar" :span="7">
      <div class="tabbar-content">
        <div
          class="tabbar-item"
          v-for="(list, index) in tabBarList"
          :key="list.name"
          @click="changeTab(list, index)"
          :class="{
            active: list.name === activeTab,
            'pre-active': index == activeIndex - 1,
            'next-active': index == activeIndex + 1,
          }">
          {{ list.name }}
        </div>
      </div>
    </var-col>
    <var-col class="content" style="padding: 10px" :span="17" direction="column">
      <div class="menu-group" v-for="list in menuList" :key="list.label" style="width: 100%">
        <label ref="refGroup" class="menu-group-label">{{ list.label }}</label>
        <var-row class="menu-group-item" v-for="menu in list.menu" :key="menu.name" :gutter="[-20, 0]">
          <!-- 图片 -->
          <var-col :span="9">
            <var-image fit="fill" :radius="5" src="https://varlet.pages.dev/cat.jpg" />
          </var-col>
          <!-- info -->
          <var-col :span="15" direction="column" justify="space-between" class="menu-group-item-info">
            <div class="menu-group-item-info-name">
              {{ menu.name }}
            </div>
            <var-row justify="space-between">
              <div class="menu-group-item-info-price">
                <span>￥</span>
                {{ menu.price }}
              </div>
              <var-counter v-model="menu.num" button-size="20" input-text-size="12" input-width="20" min="0" />
            </var-row>
          </var-col>
        </var-row>
      </div>
    </var-col>
  </var-row>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('新品上市');
let activeIndex = ref(0);
const refGroup = ref([]);
const tabBarList = ref([
  {
    name: '新品上市',
    total: 0,
  },
  {
    name: '俩杯套餐',
    total: 0,
  },
  {
    name: '热门套餐',
    total: 0,
  },
]);
const changeTab = (list, index) => {
  activeTab.value = list.name;
  activeIndex.value = index;
  console.log('refGroup', refGroup);
  refGroup.value[index].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};

const menuList = ref([
  {
    label: '新品上市',
    total: 0,
    menu: [
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
    ],
  },
  {
    label: '俩杯套餐',
    total: 0,
    menu: [
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
      {
        name: '万里木兰',
        price: 10,
        num: 0,
      },
      {
        name: '木兰辞',
        price: 10,
        num: 0,
      },
      {
        name: '伯牙',
        price: 10,
        num: 0,
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
$themeColor: #673ab7;
$tabItemHeight: 40px;
$tabItemFontSize: 14px;
.menu-list {
  width: 100%;
  height: calc(100vh - var(--tabs-item-horizontal-height));
  background-color: #fff;
  .tabbar {
    height: 100%;
    overflow: scroll;
    background-color: WhiteSmoke;
    & .tabbar-content {
      width: 100%;
      & .tabbar-item {
        width: 100%;
        min-height: $tabItemHeight;
        background-color: #fff;
        font-size: $tabItemFontSize;
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: WhiteSmoke;
        color: #ccc;
      }
      & .active {
        background-color: #fff;
        color: #000;
      }
      & .pre-active {
        position: relative;

        border-bottom-right-radius: 5px;
        &::after {
          content: '';
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: -1;
        }
      }

      & .next-active {
        border-top-right-radius: 5px;
      }
    }
  }
  .content {
    height: 100%;
    overflow-y: scroll;
    & .menu-group {
      width: 100%;
      background-color: #fff;
      font-size: $tabItemFontSize;
      & .menu-group-label {
        font-size: $tabItemFontSize;
        padding: 10px;
        font-weight: bold;
        color: #000;
        display: block;
        text-align: left;
        padding-left: 5px;
      }
      & .menu-group-item {
        height: 80px;
        & .menu-group-item-info {
          height: 100%;
          & .menu-group-item-info-name {
            font-size: 16px;
            padding-left: 10px;
            font-weight: bold;
            color: #000;
            text-align: left;
          }
          & .menu-group-item-info-price {
            padding-left: 10px;
            color: red;
            font-weight: bold;
            & > span {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
