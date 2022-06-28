import { createWebHistory, createRouter } from "vue-router";

import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

import ListPage from '../pages/ListPage';
import AboutPage from '../pages/AboutPage';

/* test */
import HelloWorld from '@/components/HelloWorld';

const routes = [
  {
    path: '/',
    name: 'ListPage',
    components: {
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    }
  },
  {
    path: '/home',
    name: 'ListPage',
    components: {
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    }
  },
  {
    path: '/about',
    name: 'AboutPage',
    components: {
      header: AppHeader,
      default: AboutPage,
      footer: AppFooter
    }
  },
  {
    path: '/test',
    name: 'HelloWorld',
    component: HelloWorld,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
