import HomeView from '../views/HomeView.vue'
import CareView from '@/views/CareView.vue'
import ShopView from '@/views/ShopView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/care',
    name: 'care',
    component: CareView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

export default routes
