import { defineStore } from "pinia";
import { ref } from 'vue'
export const usePermissionStore = defineStore('permission',() =>{
  const project = ref({});
  const module = ref([]);
  const menu = ref([]);
  const page = ref([]);
  const activeMenu = ref({});
  const usePermissionAction = (data) => {
    project.value = {
      ...data.project
    }    
    module.value = [...data.module]
    menu.value = [...data.menu]
    page.value = [...data.page]
  }
  const useActiveMenuAction = (data) => {
    activeMenu.value = {
      ...data
    }
  }
  return { project,module,menu,page,activeMenu,usePermissionAction,useActiveMenuAction }
})