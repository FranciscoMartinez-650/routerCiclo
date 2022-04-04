import { createRouter, createWebHashHistory } from 'vue-router'
import aboutPage from '../modules/pokemon/pages/aboutPage'
import listPage from '../modules/pokemon/pages/listPage'
import pokemonPage from '../modules/pokemon/pages/pokemonPage'

const routes = [
    { path: '/', component: listPage },
    { path: '/about', component: aboutPage },
    { path: '/id', component: pokemonPage },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    router,
})
export default router