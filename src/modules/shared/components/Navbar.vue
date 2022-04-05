<template>
    <div>
        <!--<router-link :to="{name:'home'}">Pokemon List</router-link>
        <router-link :to="{name: 'pokemon-id', params:{id: '85'}}">Pokemon Id</router-link>
        <router-link :to="{name: 'about'}">About</router-link>-->
        <CustomLink 
        v-for="link in link"
        :key="link.to"
        :link="link"/>
    </div>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    data() {
        return {
            links:[
                {to: '/home', name:'Pokemons'},
                {to: '/pokemonid/50', name: 'id'},
                {to: '/about', name: 'about'},
                {to: 'https://google.com', name: 'Goolge'},
            ]
        }
    },
    components: {

        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>
<style scoped>
     div{
         padding: 0 30px;
     }
     div a{
         font-weight: bold;
         color: lightblue;
         margin: 0 10px;
     }
    /* div .router-link-exact-active{
         color: #42b983;
     }*/
</style>