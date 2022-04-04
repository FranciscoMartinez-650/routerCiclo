import { createRouter, createWebHashHistory } from 'vue-router'

import listPage from '../modules/pokemon/pages/listPage'
import pokemonPage from '../modules/pokemon/pages/pokemonPage'
import NoPageFound from '../modules/shared/pages/noPageFound'
const routes = [
    { path: '/', 
      component: () => import(/*webpackChunName: AboutPage*/'@/modules/pokemon/pages/listPage') 
    },

    { path: '/about', 
      component: () => import(/*webpackChunName: AboutPage*/'@/modules/pokemon/pages/aboutPage')

    },

    { path: '/id', 
      component: () => import(/*webpackChunName: AboutPage*/'@/modules/pokemon/pages/pokemonPage') 
    },

    { path: '/:pathMatch(.*)*', 
      component: () => import(/*webpackChunName: AboutPage*/'@/modules/shared/pages/noPageFound') 
    
    }, 
  ]

const router = createRouter({
    history: createWebHashHistory(),
    router,
})
export default router