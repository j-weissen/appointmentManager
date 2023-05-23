import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { type Appointment } from "@/models/appointment";
import {usePocketbaseStore} from "@/stores/pocketbase";


export const useAppointmentStore = defineStore('appointments', () => {
  const COLLECTION_NAME = 'appointments';
  const pb = usePocketbaseStore().pb;

  const appointments: Ref<Appointment[]> = ref([]);

  async function fetchAll(): Promise<void> {
    appointments.value = await pb.collection(COLLECTION_NAME).getFullList<Appointment>({
      expand: "customer"
    });
  }

  async function validateAppointment(appointment: Appointment): Promise<boolean> {
    const {title, start, end, customer} = appointment;

    const fieldsSet = title && start && end && customer;
    if (!fieldsSet) {
      return false;
    }

    if (end <= start) {
      return false;
    }

    const overlappingAppointments = await pb.collection(COLLECTION_NAME).getFullList<Appointment>({
      filter: `customer = "${customer}" && 
      "${convertToPbDate(new Date(start))}" <= end && 
      "${convertToPbDate(new Date(end))}" >= start`,
    });

    // no overlapping appointments exist for this user => valid true
    return overlappingAppointments.length === 0;

  }

  function convertToPbDate(date: Date): string {
    return date.toISOString().replace('T', ' ');
  }

  async function add(appointment: Appointment) {
    appointment.start = convertToPbDate(new Date(appointment.start))
    appointment.end = convertToPbDate(new Date(appointment.end))
    console.log(appointment);
    return await pb.collection(COLLECTION_NAME).create(appointment);
  }

  async function remove(id: string) {
    await pb.collection(COLLECTION_NAME).delete(id);
    appointments.value = appointments.value.filter(e => e.id !== id);
  }

  return { appointments, fetchAll, validateAppointment, add, remove }
})  
