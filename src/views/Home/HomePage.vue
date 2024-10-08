<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { RouterView } from 'vue-router'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)

}
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
}
</script>
<template>
    <div class="w-[100vw] flex">
        <el-row class="tac">
            <el-col :span="3.5">
                <el-menu default-active="5" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <div class="w-[100%]  flex flex-col justify-center items-center m-auto">
                            <Icon icon="ri:computer-line" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <el-icon>
                                <Icon icon="bi:folder" width="1rem" height="1rem" />
                            </el-icon>
                        </div>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="carbon:ai-generate" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="mdi:event-note-outline" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="ph:code-fill" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="fluent-mdl2:product-list" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="hugeicons:inspect-code" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="carbon:ibm-watson-knowledge-studio" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="ic:baseline-motion-photos-auto" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="10">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="iconoir:user" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="11">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="ci:more-grid-big" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="12">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="f7:bell" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="13">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="tabler:settings-2" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                    <el-menu-item index="13">
                        <div class="flex flex-col justify-center items-center m-auto">
                            <Icon icon="carbon:user-avatar-filled" width="1rem" height="1rem" />
                        </div>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>
