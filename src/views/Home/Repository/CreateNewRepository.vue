<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import axios from 'axios';

const OAuthKey = localStorage.getItem("OAuthKey")
const labelPosition = ref<FormProps['labelPosition']>('right')
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')
const formLabelAlign = reactive({
    access_token: OAuthKey,
    name: 'aa',
    has_issues: 'true',
    has_wiki: 'true',
    can_comment: 'true',
    private: 'true',
    auto_init: 'true',
    description: '',
    path: ''
})
const submitForm = () => {
    axios.post(`https://gitee.com/api/v5/user/repos`, formLabelAlign)
}
</script>
<template>
    <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign" style="max-width: 600px">
        <el-form-item label="仓库名称" :label-position="itemLabelPosition">
            <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="仓库路径" :label-position="itemLabelPosition">
            <el-input v-model="formLabelAlign.path" />
        </el-form-item>
        <el-form-item label="仓库描述" :label-position="itemLabelPosition">
            <el-input v-model="formLabelAlign.description" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm()">
                创建仓库
            </el-button>
        </el-form-item>
    </el-form>
</template>
