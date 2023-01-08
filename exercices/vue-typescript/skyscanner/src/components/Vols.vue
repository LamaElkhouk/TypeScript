<template>
    <h1>{{titre}}</h1>

        <form>
            <div>
                <label for="origin">depart *</label>
                <input class="form-control input-form"  type="text" id="origin" v-model="origin"  placeholder="indiquer une ville de depart" required/>

                <label for="date">date depart *</label>
                <input class="form-control input-form"  type="date" id="date" v-model="date" required/>
            </div>

            <div>
                <label for="destination">destination *</label>
                <input class="form-control input-form"  type="text" id="destination" v-model="destination"  placeholder="indiquer une destination" required/>             

                <label for="returnDate">date retour</label>
                <input class="form-control input-form"  type="date" id="returnDate" v-model="returnDate"/>
            </div>

            <div>
                <label for="adults">nombre adulte</label>
                <input class="form-control input-form"  type="number" id="adults"  v-model="adults"  />

                <label for="children">nombre enfant</label>
                <input class="form-control input-form"  type="number" id="children" v-model="children"  />

            </div>

            <button class="btn btn-info" type="submit" @click.prevent="submit">Rechercher</button>
        </form>

            <div v-for="e in vols" :key="e.id">
                <div style="border-style: inset;" v-if="returnDate!=''" >
                    <div >
                        <h3>aller</h3>
                        <p style="color:red">aller - retour: <strong>{{ e.legs[0].origin.display_code}}</strong>, {{ e.legs[0].origin.name }} - <strong>{{ e.legs[0].destination.display_code }} </strong>, {{ e.legs[0].destination.name }} </p>
                        <p> depart : {{ e.legs[0].departure }} </p>
                        <p> arrivée : {{ e.legs[0].arrival }}</p>
                        <p> durée : {{ e.legs[0].duration }}</p>


                    </div>
                    <div>
                        <h3>retour</h3>
                        <p style="color:red">aller - retour: <strong>{{ e.legs[1].origin.display_code}}</strong>, {{ e.legs[1].origin.name }} - <strong>{{ e.legs[1].destination.display_code }} </strong>, {{ e.legs[1].destination.name }} </p>
                        <p> depart : {{ e.legs[1].departure }} </p>
                        <p> arrivée : {{ e.legs[1].arrival }}</p>
                        <p> durée : {{ e.legs[1].duration }}</p>
                    </div>
                    <h2 style="color:grey">prix totale: {{e.price.amount}}</h2>
                    
                </div>
                <div v-else style="border-style: inset;">
                    <h3>aller</h3>
                    <p style="color:red">aller - retour: <strong>{{ e.legs[0].origin.display_code}}</strong>, {{ e.legs[0].origin.name }} - <strong>{{ e.legs[0].destination.display_code }} </strong>, {{ e.legs[0].destination.name }} </p>
                    <p> depart : {{ e.legs[0].departure }} </p>
                    <p> arrivée : {{ e.legs[0].arrival }}</p>
                    <p> durée : {{ e.legs[0].duration }}</p>
                    <h2 style="color:grey">prix totale: {{e.price.amount}}</h2>

                </div>
            </div>
                
            
                
            
        
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Vols from '../types/Vols'
import axios from "axios"

const url:string = 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights'

export default defineComponent({
    data(){
        return{
            titre:'des vols' as string,
            vols:[] as Vols[],
            origin:'' as string,
            destination:'' as string,
            date:'' as string,
            returnDate:'' as string,
            children:'' as string,
            adults:'' as string,
            currency:'EUR' as string
        }
    },
    methods:{
        submit(){
            let query_reponse ={
                origin:this.origin,
                destination:this.destination,
                date:this.date,
                returnDate:this.returnDate,
                children:this.children,
                adults:this.adults,
                currency:this.currency
                }
            console.log("vol "+query_reponse.origin+" "+query_reponse.destination+" "+query_reponse.date+" "+query_reponse.returnDate+" "+query_reponse.children+" "+query_reponse.adults+" "+query_reponse.currency)


        axios.get(url, {
            params: {
                origin: query_reponse.origin as string,
                destination: query_reponse.destination as string,
                date: query_reponse.date as string,
                returnDate: query_reponse.returnDate as string,
                adults: query_reponse.adults as string,
                children: query_reponse.children  as string  
            },
                headers: {
                        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log(response.data);
                this.vols = response.data.data
            })
        }
    },
    mounted(){
        /*axios.get(url, {
            params: {
                origin: 'LOND',
                destination: 'NYCA',
                date: '2023-01-06',
                returnDate: '2023-01-12',
                adults: '1',
                children: '2'   
            },
                headers: {
                        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
                        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            })
            .then(response => {
                console.log(response.data.data);
                this.vols = response.data.data
            })*/
    }

})
</script>

<style>

</style>