import { createRouter, createWebHistory } from 'vue-router'
import demoRoutes from '@/routes/demos'
import { pagesRoutes } from '@/routes/pages'

export const router = createRouter({
  routes: [
    ...pagesRoutes,
    ...demoRoutes,
  ],
  history: createWebHistory(),
})
