import { createWebHistory, createRouter } from 'vue-router';

import SignupPage from '@/pages/Signup.vue';
import LoginPage from '@/pages/Login.vue';
import DashboardPage from '@/pages/Dashboard.vue';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/', component: DashboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
