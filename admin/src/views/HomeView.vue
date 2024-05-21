<script setup lang="ts">
import { ref } from 'vue';

const tables = new Array(20).fill(0).map((_, index) => index + 1);
const modalVisible = ref(false);
const currentTable = ref(1);
const openModal = (table: number) => {
  currentTable.value = table;
  modalVisible.value = true;
};
</script>

<template>
  <main class="home-view">
    <h1>多人点餐后台管理点餐台</h1>
    <div class="hv-grid" v-for="table in tables" :key="table" @click="openModal(table)">
      {{ table }}号桌
    </div>
    <article v-if="modalVisible" title="点餐台详情" @click="modalVisible = false">
      <div class="hv-card" @click.stop>
        <div class="hv-card-close" @click="modalVisible = false">❌</div>
        <div class="hv-card-title">{{ currentTable }}号桌</div>
        <div class="hv-card-people">当前人数：20</div>
        <div class="hv-card-order">当前订单：</div>
        <div class="hv-card-submit" @click="modalVisible = false">提交订单</div>
      </div>
    </article>
  </main>
</template>

<style scoped>
.home-view {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(max-content, 1fr));
  justify-content: space-around;
  gap: 1rem;
  .hv-grid {
    cursor: pointer;
    align-content: center;
    text-align: center;
    border-radius: 0.3rem;
    background: var(--color-background-mute);
    padding: 2rem;
    box-shadow: inset 0 0 20px 10px #0c40bab0;
    font-size: 3em;
    transition: background 0.3s;
    &:hover {
      background: #2f70e0;
    }
  }
  h1 {
    font-size: xx-large;
    font-weight: bolder;
    align-content: center;
    text-align: center;
    background: #0c40bab0;
    grid-column: span 4;
  }
  article {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 5% 30% 0;
    transition: background-color 0.3s;
    backdrop-filter: blur(1px);
    font-size: large;
    @starting-style {
      background-color: rgba(0, 0, 0, 0);
    }
    .hv-card {
      display: grid;
      padding: 2rem;
      border-radius: 0.3rem;
      background: #2f70e0;
      grid-template-columns: repeat(3, minmax(max-content, 1fr));
      grid-template-areas:
        '. . close'
        'title title title'
        'people people people'
        'order order order'
        '. . submit';
      .hv-card-close {
        grid-area: close;
        cursor: pointer;
        background-color: rgb(33, 33, 33);
        color: rgb(255, 255, 255);
        caret-color: rgb(255, 255, 255);
        width: 2em;
        height: 2em;
        text-align: center;
        align-content: center;
        border-radius: 0.3rem;
        margin: auto 0 0 auto;
      }
      .hv-card-title {
        grid-area: title;
      }
      .hv-card-people {
        grid-area: people;
      }
      .hv-card-order {
        grid-area: order;
      }
      .hv-card-submit {
        cursor: pointer;
        background-color: rgb(33, 33, 33);
        color: rgb(255, 255, 255);
        caret-color: rgb(255, 255, 255);
        width: 6em;
        height: 3em;
        grid-area: submit;
        text-align: center;
        align-content: center;
        border-radius: 0.3rem;
        margin: auto 0 0 auto;
      }
    }
  }
}
</style>
