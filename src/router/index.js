import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'zero zero'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於我們 | zero zero'
    }
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import(/* webpackChunkName: "location" */ '../views/Location.vue'),
    meta: {
      title: '回收據點 | zero zero'
    }
  },
  {
    path: '/furniture',
    name: 'Furniture',
    component: () => import(/* webpackChunkName: "furniture" */ '../views/Furniture.vue'),
    meta: {
      title: '家電家具回收 | zero zero'
    }
  },
  {
    path: '/reservefur',
    name: 'ReserveFur',
    component: () => import(/* webpackChunkName: "reservefur" */ '../views/ReserveFur.vue'),
    meta: {
      title: '家電家具回收預約 | zero zero'
    }
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import(/* webpackChunkName: "car" */ '../views/Car.vue'),
    meta: {
      title: '廢車回收 | zero zero'
    }
  },
  {
    path: '/reservecar',
    name: 'ReserveCar',
    component: () => import(/* webpackChunkName: "reservecar" */ '../views/ReserveCar.vue'),
    meta: {
      title: '家電家具回收預約 | zero zero'
    }
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import(/* webpackChunkName: "exchange" */ '../views/Exchange.vue'),
    meta: {
      title: '兌換中心 | zero zero'
    }
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '商品 | zero zero'
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue'),
    children: [
      {
        path: 'order',
        name: 'AccountOrder',
        component: () => import(/* webpackChunkName: "account" */ '../views/AccountOrder.vue'),
        meta: {
          login: true,
          title: '會員專區 | zero zero'
        }
      },
      {
        path: 're',
        name: 'AccountRe',
        component: () => import(/* webpackChunkName: "account" */ '../views/AccountRe.vue'),
        meta: {
          login: true,
          title: '會員專區 | zero zero'
        }
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: '註冊 | zero zero'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '登入 | zero zero'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: '後台管理 | zero zero'
        }
      },
      {
        path: 'fur',
        name: 'AdminFur',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminFur.vue'),
        children: [
          {
            path: 'undone',
            name: 'AdminFurUndone',
            component: () => import(/* webpackChunkName: "admin" */ '../views/AdminFurUndone.vue'),
            meta: {
              login: true,
              admin: true,
              title: '家電家具回收 | zero zero'
            }
          },
          {
            path: 'done',
            name: 'AdminFurDone',
            component: () => import(/* webpackChunkName: "admin" */ '../views/AdminFurDone.vue'),
            meta: {
              login: true,
              admin: true,
              title: '家電家具回收 | zero zero'
            }
          }
        ]
      },
      {
        path: 'car',
        name: 'AdminCar',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminCar.vue'),
        children: [
          {
            path: 'undone',
            name: 'AdminCarUndone',
            component: () => import(/* webpackChunkName: "admin" */ '../views/AdminCarUndone.vue'),
            meta: {
              login: true,
              admin: true,
              title: '廢車回收 | zero zero'
            }
          },
          {
            path: 'done',
            name: 'AdminCarDone',
            component: () => import(/* webpackChunkName: "admin" */ '../views/AdminCarDone.vue'),
            meta: {
              login: true,
              admin: true,
              title: '廢車回收 | zero zero'
            }
          }
        ]
      },
      {
        path: 'members',
        name: 'AdminMembers',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminMembers.vue'),
        meta: {
          login: true,
          admin: true,
          title: '會員管理 | zero zero'
        }
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminProducts.vue'),
        meta: {
          login: true,
          admin: true,
          title: '商品管理 | zero zero'
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminOrders.vue'),
        meta: {
          login: true,
          admin: true,
          title: '兌換管理 | zero zero'
        }
      },
      {
        path: 'front',
        name: 'AdminFront',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminFront.vue'),
        meta: {
          login: true,
          admin: true,
          title: '首頁輪播圖管理 | zero zero'
        }
      },
      {
        path: 'location',
        name: 'AdminLocation',
        component: () => import(/* webpackChunkName: "admin" */ '../views/AdminLocation.vue'),
        meta: {
          login: true,
          admin: true,
          title: '據點管理 | zero zero'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && store.state.user.account.length === 0) {
    next('/login')
  } else if (to.meta.admin && store.state.user.role !== 1) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
