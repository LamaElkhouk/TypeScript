<template>
    <!-- Sidebar-->
    <div class="menu container">
        <nav class="menu-nav">
            <p class="title">
                <RouterLink  :to="{name:'accueil'}"  class="navbar-brand">
                            SkyScanner
                </RouterLink>
            </p>
            <ul>
                <li>
                    <RouterLink  :to="{name:'accueil'}"  class="nav-link">
                        Accueil
                    </RouterLink>
                </li>
                <li>
                    <RouterLink  :to="{name:'vols'}"  class="nav-link">
                        vols
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
    }

})
</script>

<style>

</style>