import { createWebHistory, createRouter } from "vue-router";

import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

import ListPage from '@/pages/ListPage';
import ViewPage from '@/pages/ViewPage';
import AboutPage from '@/pages/AboutPage';
import ArchivePage from '@/pages/ArchivePage';

const routes = [
  {
    path: '/blogRenewalTest/',
    name: 'Home',
    components: {
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    }
  },
  {
    path: '/blogRenewalTest/:postCate',
    name: 'ListPage',
    components: {
      header: AppHeader,
      default: ListPage,
      footer: AppFooter
    },
    props: true
  },
  {
    path: '/blogRenewalTest/posts/:postURL',
    name: 'ViewPage',
    components: {
      header: AppHeader,
      default: ViewPage,
      footer: AppFooter
    },
    props: true
  },
  {
    path: '/blogRenewalTest/archive',
    name: 'ArchivePage',
    components: {
      header: AppHeader,
      default: ArchivePage,
      footer: AppFooter
    }
  },
  {
    path: '/blogRenewalTest/about',
    name: 'AboutPage',
    components: {
      header: AppHeader,
      default: AboutPage,
      footer: AppFooter
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
