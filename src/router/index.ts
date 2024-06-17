import {
  createWebHistory,
  createRouter,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import SignupPage from '@/pages/Signup.vue';
import LoginPage from '@/pages/Login.vue';
import MenuItemsPage from '@/pages/MenuItems.vue';
import MenuListPage from '@/pages/MenuList.vue';
import Homepage from '@/pages/Home.vue';
import UserPage from '@/pages/Users.vue';
import OrdersPage from '@/pages/Orders.vue';
import ProfilePage from '@/pages/Profile.vue';
import ProfileInfoPage from '@/pages/ProfileInfo.vue';
import CategoriesPage from '@/pages/Categories.vue';
import CartPage from '@/pages/Cart.vue';

const routes: RouteRecordRaw[] = [
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/signup', component: SignupPage, name: 'signup' },
  { path: '/menu-list', component: MenuListPage, name: 'menu-list' },
  {
    path: '/profile',
    component: ProfilePage,
    children: [
      { path: 'edit-menu', component: MenuItemsPage, name: 'edit-menu' },
      { path: 'users', component: UserPage, name: 'users' },
      { path: 'orders', component: OrdersPage, name: 'orders' },
      { path: 'categories', component: CategoriesPage, name: 'categories' },
      { path: '', component: ProfileInfoPage, name: 'profile' },
    ],
  },
  { path: '/cart', component: CartPage, name: 'cart' },
  { path: '/', component: Homepage, name: 'home' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   debugger;
//   next();
// });

export default router;
