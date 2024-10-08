<script setup lang="ts">
import { ref } from "vue"
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
const activeIndex = ref('1')
const handleOpen = (key: String, keyPath: string[]) => {
    // console.log(key);
    switch (key) {
        case '1':
            router.push({ path: '/homepage/repository/recently' })
            break;
        case '2':
            router.push({ path: '/homepage/repository/all' })
            break;
        case '3':
            router.push({ path: '/homepage/repository/open' })
            break;

    }
}
</script>

<template>
    <div class="w-[85vw] flex flex-col justify-center items-center">
        <div class="w-[100%] h-[100%]">
            <el-menu class="el-menu-popper-demo" mode="horizontal" @select="handleOpen" :default-active="activeIndex">
                <el-menu-item index="1">最近访问</el-menu-item>
                <el-menu-item index="2">
                    所有代码
                </el-menu-item>
                <el-menu-item index="3">
                    开源代码
                </el-menu-item>
            </el-menu>
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>
<style scoped></style>