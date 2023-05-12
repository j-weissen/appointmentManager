import { defineStore } from "pinia";
import {ref, type Ref} from "vue";
import {Appointment} from "@/models/appointment.ts";


const useAppointmentStore = defineStore(() => {
  const appointments: Ref<Appointment[]> = ref([
    {
      id: 1,
      title: "Besprechung",
    }
  ])
})
