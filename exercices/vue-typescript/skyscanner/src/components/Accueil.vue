<template>
    
        <div class="search-aeroport-background ">
            <h1 class="titre-accueil">{{h1}}</h1>
            <form class="form-accueil">
                <div class="form-accueil-input-icon">
                    <input class="form-control input-form-accueil"  type="text"  v-model="nom_ville"  placeholder="Veuillez rentrer le nom d'une ville"/>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </div>
                <div class="btn-form-accueil" type="submit" @click.prevent="submit">Rechercher</div>
            </form>
        </div>

            <div class="container container-aeroports" >
                <div v-for="e in aeroports" :key="e.PlaceId">
                    <div class="card-aeroport">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                        </svg>
                        <div>{{ e.PlaceName }}, {{e.CityId}} - {{e.CityName}}</div>                   
                    </div>
                
                </div>
            </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Aeroport from '../types/Aeroport'
import axios from "axios";

const url:string = 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport'

export default defineComponent({
    data() {
        return {
            titre: 'SkyScanner' as string,
            aeroports: [] as Aeroport[],
            nom_ville:'' as string,
            h1:'Recherche localité' as string
        }
    },

    methods:{
        submit(){
            let query_reponse =this.nom_ville
            console.log("ville "+query_reponse)

            axios.get(url, {
                params: {
                    query: query_reponse as string,
                },
                headers: {
                        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log(response.data.data);
                this.aeroports = response.data.data
            })

        }

    }  
});
</script>



<style>

</style>