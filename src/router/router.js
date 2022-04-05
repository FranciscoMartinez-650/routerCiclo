import { createRouter, createWebHashHistory } from 'vue-router'

//import listPage from '../modules/pokemon/pages/listPage'
//import pokemonPage from '../modules/pokemon/pages/pokemonPage'
//import NoPageFound from '../modules/shared/pages/noPageFound'

const routes = [
    { path: '/', 
    component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/listPage'),
    },

    { path: '/about', 
    component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/aboutPage')
    },

    { path: '/:id', 
      name: 'pokemon-id',
      component: () => import(/*webpackChunName: pokemonPage*/'@/modules/pokemon/pages/pokemonPage') 
    },
    //Expresión regular que expresa que si no se encuentra dicha ruta se mostrará la pagina 404, no
    //necesariamente se utiliza expresiones regulares todo depende de la situación.
    { path: '/:pathMatch(.*)*', 
      component: () => import(/*webpackChunName: noPageFound*/'@/modules/shared/pages/noPageFound') 
    }, 
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router