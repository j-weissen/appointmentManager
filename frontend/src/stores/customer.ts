import { defineStore } from "pinia";
import {usePocketbaseStore} from "@/stores/pocketbase";
import {ref, type Ref} from "vue";
import {type Customer} from "@/models/customer";


export const useCustomerStore = defineStore('customer', () => {
    const COLLECTION_NAME = "customers";
    const pb = usePocketbaseStore().pb;

    const customers: Ref<Customer[]> = ref([]);

    async function fetchAll(): Promise<void> {
        customers.value = await pb.collection(COLLECTION_NAME).getFullList<Customer>();
    }

    async function add(customer: Customer) {
        console.log(customer);
        return await pb.collection(COLLECTION_NAME).create(customer);
    }

    async function remove(id: string) {
        await pb.collection(COLLECTION_NAME).delete(id);
        customers.value = customers.value.filter(e => e.id !== id);
    }

    return { customers, fetchAll, add, remove }

})