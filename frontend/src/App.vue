<template>
  <div class="component">
   <HeaderBar />
   <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue';
</script>

<style scoped>

</style>
