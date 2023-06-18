<template>
    <div>
        <Header></Header>
        <div class="layout-menu-content">            
            <div class="layout-menu">
                <el-menu :default-active="activeUrl" :default-openeds="subIndexData" :unique-opened="false" router>
                    <el-sub-menu v-for="(menu, index) in menuData" :key="menu.oid" :index="menu.menuUrl">
                        <template #title>
                            <span slot="title">{{ menu.menuName }}</span>
                        </template>    
                        <el-menu-item v-for="(subMenu, subIndex) in menu.children" :key="subMenu.oid" :index="subMenu.menuUrl">
                            <span>{{ subMenu.menuName }}</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="layout-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref,watch } from 'vue'
import Header from '@/components/header/header.vue'
import { usePermissionStore } from '@/stores/permission/permissionStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const permissionStore = usePermissionStore()
const { activeMenu,menu } = storeToRefs(permissionStore)
const menuData = ref([])
const route = useRoute() 
let activeUrl = route.path

onMounted(() => {
    getMenuData()
})

const getMenuData = () => {
    const { moduleId } = activeMenu.value
    let temp = []
    menu.value.forEach((v) => {
        if(v.moduleId === moduleId){
            temp.push(v)
        }
    })
    console.log(temp,'temp')
    menuData.value = temp
}


// 监听路由变化 重新获取菜单信息 和 active路由
watch(route,(to,from) => {
    getMenuData()
    activeUrl = to.path
})

watch(menu,(newValue,oldValue) => {
    getMenuData()
})

let subIndexData = computed(() => {
    let temp = []
    menuData.value.forEach((menu) => {
        temp.push(menu.menuUrl)
    })
    return temp
})


</script>

<style lang="scss" scoped>

</style>