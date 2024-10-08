<script lang="ts" setup>
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
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>工作台</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <el-icon><icon-menu /></el-icon>
                        <span>项目</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>AI</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>事项</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>代码</span>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>制品</span>
                    </el-menu-item>
                    <el-menu-item index="7">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>洞察</span>
                    </el-menu-item>
                    <el-menu-item index="8">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>知识</span>
                    </el-menu-item>
                    <el-menu-item index="9">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>事项</span>
                    </el-menu-item>
                    <el-menu-item index="10">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>事自动化</span>
                    </el-menu-item>
                    <el-menu-item index="11">
                        <el-icon>
                            <setting />
                        </el-icon>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>
