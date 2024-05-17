<template>
  <div>
    <var-tabs v-model:active="activeTab" fixed-bottom>
      <var-tab name="menu">菜单</var-tab>
      <var-tab name="order">订单</var-tab>
    </var-tabs>
    <var-tabs-items v-model:active="activeTab">
      <var-tab-item name="menu"></var-tab-item>
      <var-tab-item name="order">
        <order-list></order-list>
      </var-tab-item>
    </var-tabs-items>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const OrderList = defineAsyncComponent(() => import("./order-list.vue"));

const activeTab = ref("order");
</script>
