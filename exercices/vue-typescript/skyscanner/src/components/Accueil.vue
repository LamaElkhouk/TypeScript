<template>
    
        <div class="search-aeroport-background ">
            <h1 class="titre-accueil">{{h1}}</h1>
            <form class="form-accueil">
                <input class="form-control input-form-accueil"  type="text"  v-model="nom_ville"  placeholder="Veuillez rentrer le nom d'une ville"/>
                <div class="btn-form-accueil" type="submit" @click.prevent="submit">Rechercher</div>
            </form>
        </div>

            <div v-for="e in aeroports" :key="e.PlaceId">
                <p>{{ e.PlaceName }}, {{e.CityId}} - {{e.CityName}}</p>
                
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