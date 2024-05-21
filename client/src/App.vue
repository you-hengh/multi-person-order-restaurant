<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
