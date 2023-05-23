<template>
  <tr>
    <td>{{ appointment.title }}</td>
    <td>{{ appointment.start.substring(0, 19) }}</td>
    <td>{{ appointment.end.substring(0, 19) }}</td>
    <td>{{ appointment.expand.customer.first_name + " " + appointment.expand.customer.last_name}}</td>
    <td class="edit clickable"><router-link :to="'/appointments/' + appointment.id">Edit</router-link></td>
    <td @click="remove()" class="del clickable">Delete</td>
  </tr>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import {useAppointmentStore} from "@/stores/appointment";
import {type Appointment} from "@/models/appointment";

const props = defineProps<{
  appointment: Appointment
}>();

const appointmentStore = useAppointmentStore();

function remove() {
  if (props.appointment.id) {
    appointmentStore.remove(props.appointment.id);
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
