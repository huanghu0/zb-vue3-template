import { defineStore } from "pinia";
import { ref } from 'vue'
export const usePermissionStore = defineStore('permission',() =>{
  const project = ref({});
  const module = ref([]);
  const menu = ref([]);
  const page = ref([]);
  const activeMenu = ref({});
  const useProjectAction = (data) => {
    project.value = {
      ...data
    }
  }
  const useModuleAction = (data) => {
    module.value = [...data]
  }
  const useMenuAction = (data) => {
    menu.value = [...data]
  }
  const usePageAction = (data) => {
    page.value = [...data]
  }
  const useActiveMenuAction = (data) => {
    activeMenu.value = {
      ...data
    }
  }
  return { project,module,menu,page,activeMenu,useProjectAction,useModuleAction,useMenuAction,usePageAction,useActiveMenuAction }
})