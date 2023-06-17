import { defineStore } from "pinia";
import { ref } from 'vue'
export const useLoginStore = defineStore('login',() =>{
  const userInfo = ref({})
  const userInfoAction = (info) => {
    userInfo.value = {
      ...info
    }
  }
  return { userInfo,userInfoAction }
})