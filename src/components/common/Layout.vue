<template>
    <div>
        <Header></Header>
        <div class="page-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/header/header.vue'
</script>

<style lang="scss" scoped>

</style>