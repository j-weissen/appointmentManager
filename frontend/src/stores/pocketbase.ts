import { defineStore } from "pinia";
import PocketBase from 'pocketbase';


export const usePocketbaseStore = defineStore('pb', () => {
  const pb = new PocketBase("http://localhost");
  return {pb};
})
