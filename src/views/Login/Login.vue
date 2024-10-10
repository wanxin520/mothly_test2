<script setup lang="ts">
import axios from "axios"
// import useRequest from ""
import { reactive, ref } from 'vue'
import type { FormItemProps, FormProps } from 'element-plus'
import { useRouter } from "vue-router";
const itemLabelPosition = ref<FormItemProps['labelPosition']>('')

const router = useRouter()
const userInfo = reactive({
    grant_type: 'password',
    username: '3113415005@qq.com',
    password: 'wx09270013',
    client_id: '73f28b1d2ffc08cb506132eaa3bdfec2d23efad8a2de7f5132c0c307e9ecd728',
    client_secret: '0ce87d06c690e3d3b24c0f0789353934b9bf9b6d144628e8d4cf5e33e0baae59',
    scoppe: 'user_info projects pull_requests issues notes keys hook groups gists enterprises'
})

const login = () => {
    const parmas = new URLSearchParams()
    parmas.append("grant_type", userInfo.grant_type)
    parmas.append("username", userInfo.username)
    parmas.append("password", userInfo.password)
    parmas.append("client_id", userInfo.client_id)
    parmas.append("client_secret", userInfo.client_secret)
    parmas.append("scoppe", userInfo.scoppe)
    axios.post(`https://gitee.com/oauth/token`, parmas)
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("OAuthKey", res.data.access_token
            )
            router.replace({ name: 'homepage' })
        })
        .catch((err) => {
            console.log(err);
        })
}

</script>

<template>
    <div class="w-[100vw] h-[100vh] flex justify-center items-center">
        <div class="w-[40%] h-[100%]">
            <el-carousel height="800px" autoplay>
                <el-carousel-item>
                    <img class="w-[100%] h-[100%]" src="/public/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img class="w-[100%] h-[100%]" src="/public/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img class="w-[100%] h-[100%]" src="/public/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="h-[60%] w-[60%] flex flex-col justify-around items-center">
            <div class="text-[23px] font-bold">
                登录，即刻创造您的应用
            </div>
            <div class="w-[60%] flex flex-col justify-between items-center">
                <el-form label-position="left" label-width="auto" :model="userInfo">
                    <div class="w-[100%]">
                        <el-input v-model="userInfo.username" placeholder="Please input" style="width: 20rem;"
                            class="input-with-select">
                            <template #prepend>
                                账号
                            </template>
                        </el-input>
                    </div>
                    <div class="mt-6">
                        <el-input v-model="userInfo.password" type="password" placeholder="Please input"
                            class="input-with-select">
                            <template #prepend>
                                密码
                            </template>
                        </el-input>
                    </div>
                </el-form>
                <div class="mt-6 text-[10px] flex justify-start items-center">
                    <el-checkbox value="Value A" />我已阅读并同意 <span class="text-[#4879ff]">服务协议</span> 和
                    <span class="text-[#4879ff]">隐私政策</span>
                </div>
                <div class="mt-6">
                    <el-button class="w-[20rem]" @click="login" type="primary">登录</el-button>
                </div>
                <div class="mt-10 text-[10px] flex justify-start items-center">
                    还未注册？<span class="text-[#4879ff]">立即注册</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>