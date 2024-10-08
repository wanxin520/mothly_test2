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
    client_id: '07cdb2b20843776cb0d51a6e470d1d9683500d5d29f8be25dc03061ff3eb3fe0',
    client_secret: 'e2ac1342ed5778c394db3149fc16bfbb0e69070e4d284b894d7f7a275d588814',
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
            <img class="w-[100%] h-[100%]" src="/public/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="">
        </div>
        <div class="h-[40%] w-[60%] flex flex-col justify-around items-center">
            <div>
                <h2>登录，即刻创造您的应用</h2>
            </div>
            <div class="w-[60%]">
                <el-form label-position="left" label-width="auto" :model="userInfo" style="max-width: 600px">
                    <el-form-item label="账号" :label-position="itemLabelPosition">
                        <el-input v-model="userInfo.username" />
                    </el-form-item>
                    <el-form-item label="密码" :label-position="itemLabelPosition">
                        <el-input v-model="userInfo.password" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-button @click="login" type="primary">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>