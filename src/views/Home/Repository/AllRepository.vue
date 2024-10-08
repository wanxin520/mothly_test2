<script setup>
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { ref } from "vue"

const router = useRouter()

const OAuthKey = localStorage.getItem("OAuthKey")

// https://gitee.com/api/v5/user/repos
const parmas = new URLSearchParams()
parmas.append("access_token", OAuthKey)
parmas.append("visibility", "all")
parmas.append("affiliation", "owner, collaborator, organization_member")
parmas.append("type", "all")
parmas.append("sort", "full_name")
parmas.append("type", "all")
// axios.post(`https://gitee.com/api/v5/user/repos`, parmas)
//     .then((res) => {
//         console.log(res.data);
//         // router.replace({ name: 'homepage' })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log(OAuthKey);

</script>

<template>
    <div class="w-[100%] h-[60vh] flex-col flex justify-around items-center m-auto">
        <div class="text-[#000000] text-[20px] mt-6 font-bold">欢迎使用代码仓库</div>
        <div class="text-[#000000] text-[14px] mt-6">
            代码仓库用于托管基于 GIT 或 SVN 管理的代码库。通过 Review 合并请求来审查代码变更版本发布可以用来标记、发布代码版本
        </div>
        <div class="w-[100%] flex justify-around items-center">
            <div class=" flex flex-col justify-center items-center">
                <img src="/public/images/1.svg" alt="">
                <div class="w-[100%] flex flex-col justify-center items-center">
                    <div class="text-[#000000] text-[15px] mt-6">创建代码仓库</div>
                    <div class="text-[#6e6e6e] text-[12px] mt-6">
                        浏览、编辑代码以及查看代码提交
                        记录
                    </div>
                </div>
            </div>
            <div>
                <Icon icon="maki:arrow" width="1.2rem" height="1.2rem" class="text-[#a7a7a7]" />
            </div>
            <div class=" flex flex-col justify-center items-center">
                <img src="/public/images/2.svg" alt="">
                <div class="w-[100%] flex flex-col justify-center items-center">
                    <div class="text-[#000000] text-[15px] mt-6">合并请求</div>
                    <div class="text-[#6e6e6e] text-[12px] mt-6">
                        发起合并请求并遂请协作者
                        Review 变更内容
                    </div>
                </div>
            </div>
            <div>
                <Icon icon="maki:arrow" width="1.2rem" height="1.2rem" class="text-[#a7a7a7]" />
            </div>
            <div class=" flex flex-col justify-center items-center">
                <img src="/public/images/3.svg" alt="">
                <div class="w-[100%] flex flex-col justify-center items-center">
                    <div class="text-[#000000] text-[15px] mt-6">代码版本</div>
                    <div class="text-[#6e6e6e] text-[12px] mt-6">
                        发布、标记代码版本
                    </div>
                </div>
            </div>
        </div>
        <div>
            <el-button @click="router.push({ name: `create` })" color="#414040">创建代码仓库</el-button>
        </div>
    </div>

</template>
<style scoped></style>