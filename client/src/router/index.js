import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'Index',
    hidden: true,
    children: [
      {
        name: 'index',
        path: 'index',
        component: () => import('@/views/index/index')
      },
      {
        name: 'courselist',
        path: 'courselist',
        params: {classid:'classid'},
        component: () => import('@/views/courselist/index'),
      },
      {
        name: 'coursedetail',
        path: 'coursedetail',
        component: () => import('@/views/course_detail/index'),
      },
      {
        name: 'news',
        path: 'news',
        params: { typeid: 'typeid' },
        component: () => import('@/views/news/index'),
      },
      {
        name: 'newsdetail',
        path: 'newsdetail',
        component: () => import('@/views/news_detail/index'),
      },
      {
        name: 'me',
        path: 'me',
        component: () => import('@/views/me/index'),
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/dashboard/index'),
  //       meta: { title: '后台管理', icon: 'example' }
  //     }
  //   ]
  // },
  // {
  //   path: '/order',
  //   component: Layout,
  //   redirect: '/order/order',
  //   name: 'Order',
  //   meta: { title: '订单管理', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'order',
  //       name: 'Order',
  //       component: () => import('@/views/order/index'), 
  //       meta: { title: '订单管理', icon: 'table' }
  //     }
  //   ]
  // },
  // {
  //   path: '/courses',
  //   component: Layout,
  //   redirect: '/courses/courses_edit',
  //   name: 'Courses',
  //   meta: { title: '课程管理', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'courses_edit',
  //       name: 'courses_edit',
  //       component: () => import('@/views/courses/index'),
  //       meta: { title: '课程管理', icon: 'table' }
  //     },
  //     {
  //       path: 'courses_class',
  //       name: 'courses_class',
  //       component: () => import('@/views/courses_class/index'),
  //       meta: { title: '课程分类管理', icon: 'table' }
  //     }
  //   ]
  // },
  // {
  //   path: '/news',
  //   component: Layout,
  //   redirect: '/news/news_edit',
  //   name: 'News',
  //   meta: { title: '资讯管理', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'news_edit',
  //       name: 'news_edit',
  //       component: () => import('@/views/news/index'),
  //       meta: { title: '资讯管理', icon: 'table' }
  //     },
  //     {
  //       path: 'news_type',
  //       name: 'news_type',
  //       component: () => import('@/views/news_type/index'),
  //       meta: { title: '资讯分类管理', icon: 'table' }
  //     }
  //   ]
  // },
  // {
  //   path: '/student',
  //   component: Layout,
  //   redirect: '/student/student',
  //   name: 'Student',
  //   meta: { title: '学生信息管理', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'student',
  //       name: 'student',
  //       component: () => import('@/views/student/index'),
  //       meta: { title: '学生信息', icon: 'table' }
  //     }
  //   ]
  // },
  // {
  //   path: '/favorite',
  //   component: Layout,
  //   redirect: '/favorite/courses_favorite',
  //   name: 'Favorite',
  //   meta: { title: '收藏夹管理', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'courses_favorite',
  //       name: 'courses_favorite',
  //       component: () => import('@/views/courses_favorite/index'),
  //       meta: { title: '课程收藏夹', icon: 'table' }
  //     },
  //     {
  //       path: 'news_favorite',
  //       name: 'news_favorite',
  //       component: () => import('@/views/news_favorite/index'),
  //       meta: { title: '资讯收藏夹', icon: 'table' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
  // {
  //   path: '/table',
  //   component: Layout,
  //   redirect: '/example/table1',
  //   name: 'Example',
  //   meta: { title: '模块分类', icon: 'tree' },
  //   children: [
  //     {
  //       path: 'table1',
  //       name: 'Tablebase',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '平台基础模块', icon: 'table' }
  //     },
  //     {
  //       path: 'table2',
  //       name: 'Tablechoose',
  //       component: () => import('@/views/table1/index'),
  //       meta: { title: '可选模块组件', icon: 'table' }
  //     },
  //     {
  //       path: 'table3',
  //       name: 'Tableown',
  //       component: () => import('@/views/table2/index'),
  //       meta: { title: '独立子产品', icon: 'table' }
  //     }
  //   ]
  // },
  // {
  //   path: '/list',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/table3/index'),
  //       meta: { title: '订单列表', icon: 'form' }
  //     }
  //   ]
  // }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/admin',
    component: Layout,
    redirect: '/admin/index',
    meta: { title: '管理员管理', icon: 'form', roles: ['超级管理员','管理员'] }, // 页面需要的权限
    children: [
      {
        path: 'index',
        component: () => import('@/views/admin/index'),
        name: 'admin_change',
        meta: { title: '管理员管理', icon: 'form', roles: ['超级管理员'] }
      },
      {
        path: 'me',
        component: () => import('@/views/me/index'),
        name: 'Me',
        meta: { title: '个人管理', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
