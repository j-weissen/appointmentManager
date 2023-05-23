<template>
  <div class="component">
    <label>Title (optional)</label><br />
    <input type="text" v-model="customer.title"><br />
    <label>First name</label><br />
    <input type="text" v-model="customer.first_name"><br />
    <label>Last name</label><br />
    <input type="text" v-model="customer.last_name"><br />
    <button @click="addCustomer(customer)">Add</button><br />
  </div>
</template>

<script setup lang="ts">
import {ref, type Ref} from 'vue';
import {useCustomerStore} from '@/stores/customer';
import {type Customer} from '@/models/customer';

const customerStore = useCustomerStore();
const cleanCustomer: Customer = {
  title: "",
  first_name: "",
  last_name: "",
};
const customer: Ref<Customer> = ref(structuredClone(cleanCustomer));

async function addCustomer(customer: Customer) {
  if (customer.title === "") {
    delete customer.title;
  }
  const created = await customerStore.add(customer);
  if (created) {
    console.log("success");
    clearCustomer();
  } else {
    console.error("geht ned");
  }
}

function clearCustomer() {
  customer.value = structuredClone(cleanCustomer);
}
</script>

<style scoped>
.component {
  padding: 20px;
}

input, button {
  background-color: var(--gruv-grey-dark);
  margin-bottom: 10px;
  width: 100%;
}
</style>
