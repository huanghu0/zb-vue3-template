import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/404',
      name:'404',
      component: () => import('@/views/404.vue') 
    },{
      path: "/:catchAll(.*)", // 不识别的path自动匹配404
      redirect:'/404'
    } 
  ]
})

export default router
