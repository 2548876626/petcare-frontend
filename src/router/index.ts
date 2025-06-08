import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/services/index.vue'),
    meta: {
      title: '服务列表',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/index.vue'),
    meta: {
      title: '关于我们',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/contact/index.vue'),
    meta: {
      title: '联系我们',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/index.vue'),
    meta: {
      title: '注册',
      keepAlive: true,
      requireAuth: false
    }
  },
  {
    path: '/pet-owner',
    name: 'PetOwner',
    component: () => import('@/views/pet-owner/index.vue'),
    meta: {
      title: '宠物主人',
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'OwnerDashboard',
        component: () => import('@/views/pet-owner/dashboard.vue'),
        meta: {
          title: '控制台',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'pets',
        name: 'Pets',
        component: () => import('@/views/pet-owner/pets.vue'),
        meta: {
          title: '我的宠物',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'bookings',
        name: 'Bookings',
        component: () => import('@/views/pet-owner/bookings.vue'),
        meta: {
          title: '预约记录',
          keepAlive: true,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/service-provider',
    name: 'ServiceProvider',
    component: () => import('@/views/service-provider/index.vue'),
    meta: {
      title: '服务提供者',
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'ProviderDashboard',
        component: () => import('@/views/service-provider/dashboard.vue'),
        meta: {
          title: '控制台',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/views/service-provider/services.vue'),
        meta: {
          title: '我的服务',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/service-provider/orders.vue'),
        meta: {
          title: '订单管理',
          keepAlive: true,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      title: '管理员',
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/dashboard.vue'),
        meta: {
          title: '控制台',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/admin/users.vue'),
        meta: {
          title: '用户管理',
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: 'services',
        name: 'AdminServices',
        component: () => import('@/views/admin/services.vue'),
        meta: {
          title: '服务管理',
          keepAlive: true,
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404',
      keepAlive: true,
      requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title} | 宠爱社区`
  
  // 检查是否需要登录权限
  if (to.meta.requireAuth) {
    // 从localStorage获取token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      // 如果没有token，重定向到登录页
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

export default router 