<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup>
import {  onMounted, watch } from 'vue'
import { getPermissionInfo } from '@/services/permission/index';
import { useLoginStore } from '@/stores/login/loginStore'; 
import { usePermissionStore } from '@/stores/permission/permissionStore'
import { useRoute,useRouter } from 'vue-router';
import { checkPms,checkUrl,getFirstUrl } from '@/utils/index'

const route = useRoute()
const router = useRouter()

const fetchPermission = async () => {
  let res = await getPermissionInfo()
  const { data:{menu,module,page,project,userInfo} } = res
  const loginStore = useLoginStore()
  const permStore = usePermissionStore()
  const { userInfoAction } = loginStore
  const { usePermissionAction,useActiveMenuAction } = permStore
  usePermissionAction({
    project,
    module,
    menu,
    page
  })
  userInfoAction(userInfo)
  let url = route.path
  if(module && module.length !== 0){
    if(url === '/' || checkPms(url,menu,useActiveMenuAction) || checkUrl(url,module,page)){
      let isModuleUrl = module.find((v) => v.moduleUrl === url)
      if(url === '/'){
        const targetUrl = getFirstUrl(module?.[0] || {},menu,useActiveMenuAction)
        router.push(targetUrl)
      }else if(isModuleUrl){
        getFirstUrl(isModuleUrl,menu,useActiveMenuAction)
      }
    }else{
      router.push('/404')
    }
  }   
}


onMounted(() => {
  fetchPermission();
})

</script>

<style scoped lang="scss">

</style>
