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
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog,
      children: [
        {
          path: ':id',
          component: Catalog
        }
      ]
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/integrators',
      name: 'integrators',
      component: Integrators
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error404
    }
  ]
});

export default router