<script setup>
import {  onMounted } from 'vue'
import { getPermissionInfo } from '@/services/permission/index';
import { useLoginStore } from '@/stores/login/loginStore'; 
import { usePermissionStore } from '@/stores/permission/permissionStore'

const fetchPermission = async () => {
  let res = await getPermissionInfo()
  const { data:{menu,module,page,project,userInfo} } = res
  const loginStore = useLoginStore()
  const permStore = usePermissionStore()
  const { useInfoAction } = loginStore
  const { useProjectAction,useModuleAction,useMenuAction,usePageAction } = permStore
  useInfoAction(userInfo)
  useProjectAction(project)
  useModuleAction(module)
  useMenuAction(menu)
  usePageAction(page)
}


onMounted(() => {
  fetchPermission();
})

</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">

</style>
