<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import axios from 'axios';

const OAuthKey = localStorage.getItem("OAuthKey")
const addREADME = ref(false)
const addGitIgnore = ref(false)
const addBranchModel = ref(false)
const value = ref()
const isPrivate = ref()
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
        disabled: true,
    }
]
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
    <div class="w-[80vh] h-[90vh]">
        <div class="w-[60vh] h-[90vh] flex flex-col justify-around m-auto p-2">
            <div class="flex justify-start items-center">
                <div class="">
                    <Icon icon="emojione-monotone:left-arrow" width="1.8rem" height="1.8rem" class="text-[#757575]" />
                </div>
                <div class="ml-4">创建代码仓库</div>
            </div>
            <div class="flex flex-col justify-around">
                <div class=" mb-3">所属项目</div>
                <el-select v-model="value" placeholder="选择项目类型" style="width: 600px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                        :disabled="item.disabled" />
                </el-select>
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col justify-between items-center">
                    <div class="w-[100%] flex justify-start mb-3">
                        <div class="w-[100px]">仓库类型</div>
                        <div>仓库名称</div>
                    </div>
                    <el-input v-model="formLabelAlign.name" style="width: 600px" placeholder="输入仓库类型"
                        class="input-with-select">
                        <template #prepend>
                            <span>Git仓库</span>
                        </template>
                    </el-input>
                </div>
            </div>

            <div class="flex flex-col justify-around">
                <div class=" mb-3">仓库描述</div>
                <el-input v-model="formLabelAlign.description" style="width: 600px"
                    :autosize="{ minRows: 2, maxRows: 6 }" type="textarea" placeholder="输入仓库描述" />
            </div>
            <div class="flex flex-col justify-around">
                <div class=" mb-3">初始化仓库</div>
                <el-checkbox v-model="addREADME" label="生成 README 文件" size="large" />
                <el-checkbox v-model="addGitIgnore" label="添加 .gitignore 文件" size="large" />
                <el-checkbox disabled v-model="addBranchModel" label="添加分支模型(仓库创建后将根据所选分支模型创建分支)" size="large" />
            </div>
            <div class="flex flex-col justify-around">
                <div class=" mb-3">是否开源</div>
                <el-radio-group v-model="isPrivate">
                    <el-radio :value="true">公开</el-radio>
                    <el-radio :value="false">私有</el-radio>
                </el-radio-group>
            </div>
            <div class="w-[8rem]">
                <el-button type="primary" @click="submitForm()">
                    创建仓库
                </el-button>
            </div>
        </div>
    </div>


</template>
