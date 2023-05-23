<template>
  <div class="component">
    <label>Title</label><br />
    <input type="text" v-model="appointment.title"><br />
    <label>Start</label><br />
    <input type="datetime-local" v-model="appointment.start"><br />
    <label>End</label><br />
    <input type="datetime-local" v-model="appointment.end"><br />
    <label>Customer</label><br />
    <select v-model="appointment.customer">
      <option v-for="customer in customerStore.customers" :value="customer.id">
        {{ customer.title ? customer.title + " " : "" }}{{ customer.first_name }} {{ customer.last_name }}
      </option>
    </select> <br />
    <button @click="addAppointment(appointment)">Add</button><br />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, type Ref} from 'vue';
import {useCustomerStore} from '@/stores/customer';
import {useAppointmentStore} from "@/stores/appointment";
import {type Appointment} from "@/models/appointment";

const appointmentStore = useAppointmentStore();
const customerStore = useCustomerStore();

const cleanAppointment: Appointment = {
  title: "",
  start: (new Date()).toISOString(),
  end: (new Date()).toISOString(),
  customer: "",
};

const appointment: Ref<Appointment> = ref(structuredClone(cleanAppointment));

onMounted(() => {
  customerStore.fetchAll();
})

async function addAppointment(appointment: Appointment) {
  if (!await appointmentStore.validateAppointment(appointment)) {
    return
  }
  const created = await appointmentStore.add(appointment);
  if (created) {
    console.log("success");
    clearAppointment();
  } else {
    console.error("geht ned");
  }
}

function clearAppointment() {
  appointment.value = structuredClone(cleanAppointment);
}
</script>

<style scoped>
.component {
  padding: 20px;
}

input, select, button {
  background-color: var(--gruv-grey-dark);
  margin-bottom: 10px;
  width: 100%;
}

select {
  background-color: var(--gruv-grey-dark);
}
</style>
