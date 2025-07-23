import { createRouter, createWebHistory } from 'vue-router'
import ChatComponent from '@/components/ChatComponent.vue'
import LoginPage from '@/components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatComponent
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
