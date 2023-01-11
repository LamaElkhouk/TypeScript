<template>
    <!-- Sidebar-->
    <div class="menu container">
        <nav class="menu-nav">
            <div class="title">
                <RouterLink  :to="{name:'accueil'}"  class="menu-title">
                    SkyScanner 
                </RouterLink>
                <svg  @click.prevent="menu_burger" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list afficher-sur-mobile" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <ul class="afficher-sur-pc menu-ul">
                <svg @click.prevent="menu_close" xmlns="http://www.w3.org/2000/svg"  class="bi bi-plus-lg hidden" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                <li>
                    <RouterLink  :to="{name:'accueil'}"  class="nav-link">
                        <span class="dot-menu hidden"></span> Accueil
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'vols'}"  class="nav-link">
                        <span class="dot-menu hidden"></span> Vols
                    </RouterLink>

                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import {RouterLink} from "vue-router"
import { defineComponent } from 'vue' 
export default defineComponent({
    data(){
        return{            
        }
    },
    components:{
        RouterLink
    },
    methods:{
        menu_burger(){
            const menuUl= document.querySelector(".menu-ul") as HTMLElement

            menuUl.classList.remove("afficher-sur-pc");
            menuUl.classList.add("afficher-sur-mobile");

            const dotMenu=document.querySelector(".dot-menu") as HTMLElement
            dotMenu.classList.remove("hidden");

            const cross=document.querySelector(".bi-plus-lg") as HTMLElement
            cross.classList.remove("hidden");
            //eviter le scroll

            const html=document.querySelector("html");
            html.classList.add("scroll-menu");
        },
        menu_close(){
            const menuUl= document.querySelector(".menu-ul") as HTMLElement

            menuUl.classList.remove("afficher-sur-mobile");
            menuUl.classList.add("afficher-sur-pc");

            const dotMenu=document.querySelector(".dot-menu") as HTMLElement
            dotMenu.classList.add("hidden");

            const cross=document.querySelector(".bi-plus-lg") as HTMLElement
            cross.classList.add("hidden");

            //scroll

            const html=document.querySelector("html");
            html.classList.remove("scroll-menu");

        }

    }

})
</script>

<style>

</style>