<template>
<div class="component">
  <table>
    <tr>
      <td>Title</td>
      <td>First name</td>
      <td>Last name</td>
    </tr>
    <Customer v-for="customer in customerStore.customers" :customer="customer"/>
  </table>
</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useCustomerStore} from "@/stores/customer";
import Customer from "@/components/Customer.vue";

const customerStore = useCustomerStore();

onMounted(() => {
  customerStore.fetchAll();
});
</script>

<style>
td {
  padding: 20px;
}

tr:nth-child(1) td {
  font-weight: bold;
  border-bottom: var(--gruv-beige) 3px solid;
  border-collapse: collapse;
}


</style>
