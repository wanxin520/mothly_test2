import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/login" },
    // 登录页面
    { path: '/login', name: 'login', component: () => import('../views/Login/Login.vue') },
    // 主页
    {
      path: '/homepage', name: 'homepage', redirect: '/homepage/repository/recently',
      component: () => import('../views/Home/HomePage.vue'),
      children: [
        // 仓库代码页面
        {
          path: 'repository', name: 'repository',
          component: () => import('../views/Home/Repository/RepositoryIndex.vue'),
          children: [
            { path: 'all', name: 'all', component: () => import('../views/Home/Repository/AllRepository.vue') },
            { path: 'recently', name: 'recently', component: () => import('../views/Home/Repository/Recently.vue') },
            { path: 'open', name: 'open', component: () => import('../views/Home/Repository/OpenRepository.vue') },
          ],
        },
        { path: 'create', name: 'create', component: () => import('../views/Home/Repository/CreateNewRepository.vue') },
      ]
    },

  ]
})

export default router
