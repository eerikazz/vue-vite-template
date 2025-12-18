import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    name: 'app',
    component: () => import('@/App.vue') 
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
