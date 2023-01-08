<template>
    <!-- Sidebar-->
    <div class="menu bg-info">
        <nav class="navbar navbar-expand container">
            <RouterLink  :to="{name:'accueil'}"  class="navbar-brand">
                        SkyScanner
            </RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink  :to="{name:'accueil'}"  class="nav-link">
                        Accueil
                    </RouterLink>
                </li>
                <li class="nav-item">
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