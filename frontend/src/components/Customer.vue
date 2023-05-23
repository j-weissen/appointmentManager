<template>
  <tr>
    <td>{{ customer.title }}</td>
    <td>{{ customer.first_name }}</td>
    <td>{{ customer.last_name }}</td>
    <td class="edit clickable"><router-link :to="'/customers/' + customer.id">Edit</router-link></td>
    <td @click="remove()" class="del clickable">Delete</td>
  </tr>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import {type Customer} from "@/models/customer";
import {useCustomerStore} from '@/stores/customer'

const props = defineProps<{
  customer: Customer
}>();

const customerStore = useCustomerStore();

function remove() {
  if (props.customer.id) {
    customerStore.remove(props.customer.id);
  }
}
</script>

<style scoped>
.clickable {
  text-decoration: underline;
  cursor: pointer;
}

.del {
  color: var(--gruv-red);
}

.edit * {
  color: var(--gruv-yellow);
}
</style>
