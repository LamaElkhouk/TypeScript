<template>
    <div>
        <h1>un vol</h1>
        <div>{{vol}}</div>
        <p>{{vol.itineraryId}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Vol from '../types/Vol'
import axios from "axios"

const url:string = 'https://skyscanner50.p.rapidapi.com/api/v1/getFlightDetails'

export default defineComponent({
    props: {
        volprop: {
            type: Object,
            required: true
        },
    },
    data(){
        return{
            vol:JSON.parse(this.$route.params.vol),
            itineraryId:JSON.parse(this.$route.params.vol).id,
            legs: '' as string,
        }
    },
    methods:{
        convertir_date(date:string){ //2023-01-16T17:50:00
            let new_date=date.split("T"); //2023-01-16,17:50:00
            return new_date[0]; //2023-01-16
        },
        convertir_heure(heure:string){
            let new_heure=heure.split("T");
            let new_heure_final= new_heure[1].split(":");
            //return new Date(new_heure[1]).getHours()+"h"+new Date(new_heure[1]).getMinutes()
            return new_heure_final[0]+"h"+new_heure_final[1]
        },
    },
    mounted : function(){
        console.log('this.$route.params.vol', JSON.parse(this.$route.params.vol))
        console.log('itineraryId', this.itineraryId)
        console.log('vol', this.vol)
    
            let query_reponse ={
                itineraryId:this.itineraryId,
                legs:this.legs,
                /*children:this.children,
                adults:this.adults,
                currency:this.currency*/
            }
            console.log(query_reponse.itineraryId+" "+query_reponse.legs)

        axios.get(url, {
            params: {
                itineraryId:query_reponse.itineraryId as string,
                legs: query_reponse.legs as string,
            },
                headers: {
                        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log("rep "+response.data.data);
                this.vol = response.data.data
            })

        console.log(url)
    },

})
</script>

<style>

</style>
