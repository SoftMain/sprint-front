import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Catalog from './views/Catalog.vue';
import Product from './views/Product.vue';
import Integrators from './views/Integrators.vue';
import Contact from './views/Contact.vue';
import About from './views/About.vue';
import Error404 from './views/404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home,
      meta: {
        breadcrumb: [
          { name: 'Главная' }
        ]
      }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'Каталог' }
        ]
      },
      children: [
        {
          path: ':id',
          component: Catalog,
          meta: {
            breadcrumb: [
              { name: 'Главная', link: '/' },
              { name: 'Каталог', link: 'catalog:id' }
            ]
          }
        }
      ]
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'Каталог', link: 'catalog' },
          { name: 'Продукт' }
        ]
      }
    },
    {
      path: '/integrators',
      name: 'integrators',
      component: Integrators,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'Интеграторы' },
        ]
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'Компаниям' },
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'О нас', active: false },
        ]
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error404,
      meta: {
        breadcrumb: [
          { name: 'Главная', link: '/' },
          { name: 'Ошибка' },
        ]
      }
    }
  ]
});

export default router