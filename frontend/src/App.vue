<template>
  <div class="component">
    <HeaderBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue';
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
