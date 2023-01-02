import HomeView from '@/components/templates/HomeView'
import CareView from '@/components/templates/CareView'
import ShopView from '@/components/templates/ShopView'
import TaskView from '@/components/templates/TaskView'
import LoginView from '@/components/templates/LoginView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/care',
    name: 'care',
    component: CareView,
    meta: { requiresAuth: true }

  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    meta: { requiresAuth: true }

  },
  {
    path: '/task',
    name: 'task',
    component: TaskView,
    meta: { requiresAuth: true }

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/templates/AboutView.vue')
  }
]

export default routes
