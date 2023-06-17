<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="@/assets/img/logo.png">
        <h1>xxxxx平台</h1>
      </div>
      <nav class="nav">
        <span v-for="(menu,index) in module" :class="['menu-item',menu.oid === activeMenu.moduleId ? 'active-menu':'']" :key="menu.oid"  @click="handleSelect(menu)">{{ menu.moduleName }}</span>
      </nav>
      <div class="user">
        <img src="@/assets/img/head.png">
        <el-dropdown trigger="click">
          <div class="user-dropdown">
            <span>{{ userInfo.userName }}</span>
            <el-icon>
              <i-ep-arrow-down></i-ep-arrow-down>
            </el-icon>          
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>            
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePermissionStore } from '@/stores/permission/permissionStore'
import { useLoginStore } from '@/stores/login/loginStore'
import { storeToRefs } from 'pinia'
const permissionStore = usePermissionStore()
const userStore = useLoginStore()
const { module,activeMenu,menu } = storeToRefs(permissionStore)
const { userInfo } = storeToRefs(userStore)
const { useActiveMenuAction } = permissionStore

const handleSelect = (m) => {
  // 找到模块下面第一个菜单
  let temp = []
  menu.value.forEach((v) => {
    if (v.moduleId === m.oid) {
      temp.push(v)
    }
  })
  // 跳到菜单第一个页面
  if (temp.length > 0) {
    useActiveMenuAction(temp[0].children[0])
    // this.$router.push(temp[0].children[0].menuUrl)
  } else {
    useActiveMenuAction({ ...m, moduleId: m.oid })
    // this.$router.push(menu.moduleUrl)
  }
}

</script>

<style lang="scss" scoped>

</style>