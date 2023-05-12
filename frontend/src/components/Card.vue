<template>
  <div class="component">
  <h3>{{title}}</h3>
  <p v-for="property in properties">
    <strong>{{ property.key }}: </strong>
    {{ property.value }}
  </p>
  </div> 
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import {Card} from '@/model/card.ts';

const props = defineProps<{
  card: Card,
}>()

const title = computed(() => props.title);
const properties = computed(() => props.properties); 
</script>
