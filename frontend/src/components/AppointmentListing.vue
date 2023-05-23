<template>
<div class="component">
  <table>
    <tr>
      <td>Title</td>
      <td>Start</td>
      <td>End</td>
      <td>Customer</td>
    </tr>
    <Appointment v-for="appointment in appointmentStore.appointments" :appointment="appointment"/>
  </table>
</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useAppointmentStore} from "@/stores/appointment";
import Appointment from "@/components/Appointment.vue";

const appointmentStore = useAppointmentStore();

onMounted(() => {
  appointmentStore.fetchAll();
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
