import { createRouter, createWebHistory } from 'vue-router'
import NewsListView from '@/views/NewsListView.vue'
import AboutView from '@/views/AboutView.vue'
import NewsDetailView from '@/views/news/DetailView.vue'
import NewsRegisterView from '@/views/news/RegisterView.vue'
import NewsEditView from '@/views/news/EditView.vue'
import NewsLayoutView from '@/views/news/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import NewsService from '@/services/NewsService'
import { useNewsStore } from '@/stores/News'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news-list-view',
      component: NewsListView,
      props: (route) => ({
        page: parseInt(route.query.page?.toString() || '1'),
        size: parseInt(route.query.size?.toString() || '2'),
      }),
    },
    {
      path: '/news/:id',
      name: 'news-layout-view',
      component: NewsLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const newsStore = useNewsStore()
        return NewsService.getNewsItem(id)
          .then((response) => {
            newsStore.setNews(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'news' },
              }
            } else {
              return { name: 'network-error-view' }
            }
          })
      },
      children: [
        {
          path: '',
          name: 'news-detail-view',
          component: NewsDetailView,
          props: true,
        },
        {
          path: 'register',
          name: 'news-register-view',
          component: NewsRegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'news-edit-view',
          component: NewsEditView,
          props: true,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
