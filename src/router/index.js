import { createRouter, createWebHistory } from 'vue-router';
import LayoutMenu from "@/components/common/LayoutMenu.vue";
import Layout from "@/components/common/Layout.vue";
import Page from "@/components/common/Page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      redirect:'/dashboard/index'
    },
    {
      path:'/dashboard',
      component: Layout,
      children:[{
        path:'index',
        component: () => import('@/views/dashboard/index.vue')
      }] 
    },
    {
      path:'/indicator',
      component: Layout,
      children:[{
        path:'index',
        component:() => import('@/views/indicator/index.vue')
      }]
    },
    {
      path:'/biz',
      component: Layout,
      children:[{
        path:'overview',
        component:() => import('@/views/biz/overview.vue')
      }]
    },
    {
      path:'/aba',
      component: LayoutMenu,
      children:[
        {
          path:'event',
          component:() => import('@/views/aba/event/index.vue')
        },{
          path:'retain',
          component:() => import('@/views/aba/retain/index.vue')
        },{
          path:'funnel',
          component:() => import('@/views/aba/funnel/index.vue')
        },{
          path:'user',
          component:() => import('@/views/aba/user/index.vue')
        },{
          path:'path',
          component:() => import('@/views/aba/path/index.vue')
        },{
          path:'resource',
          component:() => import('@/views/aba/resource/index.vue')
        }        
      ]
    },
    {
      path:'/app',
      component:LayoutMenu,
      children:[
        {
          path: 'public/dataset/list',
          component: () => import('@/views/app/public/datasetList.vue') // 公共数据集列表
        },
        {
          path: 'dataset/list',
          component: () => import('@/views/app/dataset/list.vue') // 个人数据集列表
        },
        {
          path: 'chart/list',
          component: () => import('@/views/app/chart/list.vue') // 自助图表
        },
        {
          path: 'sql/search',
          component: () => import('@/views/app/sql/search.vue') // SQL查询
        },
        {
          path: 'public/report/list',
          component: () => import('@/views/app/public/reportList.vue') // 公共报表
        },
        {
          path: 'report/list',
          component: () => import('@/views/app/report/list.vue') // 个人报表制作列表
        }    
      ]
    },
    {
      path: '/page',
      component: Page,
      children: [
        {
          path: 'dataset/add',
          component: () => import('@/views/page/dataset/add.vue') // 新建数据集
        },
        {
          path: 'chart/add',
          component: () => import('@/views/page/chart/add.vue') // 自助图表
        },
        {
          path: 'report/add',
          component: () => import('@/views/page/report/add.vue') // 新建报表 
        },
        {
          path: 'report/preview',
          component: () => import('@/views/page/report/preview.vue') // 报表预览
        },
        {
          path: 'report/tabluea',
          component: () => import('@/views/page/report/tabluea.vue') // 报表预览
        },
        {
          path: 'public/report/preview',
          component: () => import('@/views/page/public/reportPreview.vue') // 公共报表预览
        },
        {
          path: 'public/report/tabluea',
          component: () => import('@/views/page/public/reportTabluea.vue') // Tabluea报表预览
        }
      ]
    },
    {
      path: '/ab',
      component:LayoutMenu,
      children: [
        {
          path: 'lab/list',
          component: () => import('@/views/ab/lab/list.vue')
        },
        {
          path: 'lab/type',
          component: () => import('@/views/ab/lab/type.vue')
        },
        {
          path: 'lab/add',
          component: () => import('@/views/ab/lab/add.vue')
        },
        {
          path: 'lab/adjust',
          component: () => import('@/views/ab/lab/adjust.vue')
        }
      ]
    },
    {
      path: '/sys',
      component:LayoutMenu,
      children: [
        {
          path: 'site/list',
          component: () => import('@/views/sys/site/list.vue')
        },
        {
          path: 'project/list',
          component: () => import('@/views/sys/project/list.vue')
        },
        {
          path: 'indicator/list',
          component: () => import('@/views/sys/indicator/list.vue')
        }
      ]
    },
    {
      path:'/error',
      component: () => import('@/views/error.vue') 
    },{
      path: "/:catchAll(.*)", // 不识别的path自动匹配404
      redirect:'/404'
    } 
  ]
})

export default router
