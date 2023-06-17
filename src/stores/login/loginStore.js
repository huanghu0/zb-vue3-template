import { defineStore } from "pinia";
import { ref } from 'vue'
export const useLoginStore = defineStore('login',() =>{
  const useInfo = ref({})
  const useInfoAction = (info) => {
    useInfo.value = {
      ...info
    }
  }
  return { useInfo,useInfoAction }
})