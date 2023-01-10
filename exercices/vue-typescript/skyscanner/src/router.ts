import {createRouter, createWebHistory,RouteRecordRaw} from "vue-router"
import Accueil from "./components/Accueil.vue"
import Vols from "./components/Vols.vue"
import UnVol from "./components/UnVol.vue"
import NotFound from "./components/NotFound.vue"

const routes:Array<RouteRecordRaw> = [
    { path : "/", name:"accueil",component:Accueil},
    {path : "/vols",name:"vols",component:Vols},
    { 
        path : "/unVol/:vol",
        name:"unVol",
        component: UnVol,
        props: {

        }
    },
    //{ path:"/:pathMatch(.*)*", name:"NotFound",component:NotFound}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;