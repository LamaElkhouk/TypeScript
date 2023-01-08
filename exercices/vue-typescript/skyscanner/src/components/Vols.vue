<template>
    <div>
        <div class="search-vols-background">
        <form class="form-vols-container">
            <div class="form-vols">
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
            </div>

            <div class="btn-form-vol" type="submit" @click.prevent="submit">Rechercher</div>
        </form>
    </div>
            <div class="container-spinner">
                <div class="spinner-border text-info" role="status" v-if='isLoading && !vols.length'></div>
            </div>
            
            <div class="cards-vols container">
                <div v-for="e in vols " :key="e.id">
                    <div class="card-vol" v-if="returnDate!=''" >
                        <div class="informations-vol">
                            <div>
                                <h3>aller</h3>
                                <p style="color:red">aller - retour: <strong>{{ e.legs[0].origin.display_code}}</strong>, {{ e.legs[0].origin.name }} - <strong>{{ e.legs[0].destination.display_code }} </strong>, {{ e.legs[0].destination.name }} </p>
                                <p> depart : Le {{ convertir_date(e.legs[0].departure)}} à {{convertir_heure(e.legs[0].departure)}}</p>
                                <p> arrivée :Le {{ convertir_date(e.legs[0].arrival)}} à {{ convertir_heure(e.legs[0].arrival)}}</p>
                                <p>duree {{convertir_duree(e.legs[0].duration)}}</p>
                            </div>
                            <div>
                                <h3>retour</h3>
                                <p style="color:red">aller - retour: <strong>{{ e.legs[1].origin.display_code}}</strong>, {{ e.legs[1].origin.name }} - <strong>{{ e.legs[1].destination.display_code }} </strong>, {{ e.legs[1].destination.name }} </p>
                                <p> depart : Le {{ convertir_date(e.legs[1].departure)}} à {{convertir_heure(e.legs[1].departure)}}</p>
                                <p> arrivée :Le {{ convertir_date(e.legs[1].arrival)}} à {{ convertir_heure(e.legs[1].arrival)}}</p>
                                <p>duree {{convertir_duree(e.legs[0].duration)}}</p>
                            </div>
                        </div>
                        <h2 style="color:grey">prix totale: {{e.price.amount}}€</h2>
                    </div>
                    <div v-else style="border-style: inset;">
                        <h3>aller</h3>
                        <p style="color:red">aller - retour: <strong>{{ e.legs[0].origin.display_code}}</strong>, {{ e.legs[0].origin.name }} - <strong>{{ e.legs[0].destination.display_code }} </strong>, {{ e.legs[0].destination.name }} </p>
                        <p> depart : Le {{ convertir_date(e.legs[0].departure)}} à {{convertir_heure(e.legs[0].departure)}}</p>
                        <p> arrivée :Le {{ convertir_date(e.legs[0].arrival)}} à {{ convertir_heure(e.legs[0].arrival)}}</p>
                        <p>duree {{convertir_duree(e.legs[0].duration)}}</p>
                        <h2 style="color:grey">prix totale: {{e.price.amount}}€</h2>
                    </div>
                </div>
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
            isLoading: false as boolean,
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
        convertir_duree(duree:string){
            let hours=Number(duree)/60;
            let rhours = Math.floor(hours);
            let minutes = (hours - rhours) * 60;
            let rminutes = Math.round(minutes);
            return  rhours + "h" + rminutes;
        },
        submit(){
            this.isLoading = true;

            let query_reponse ={
                origin:this.origin,
                destination:this.destination,
                date:this.date,
                returnDate:this.returnDate,
                children:this.children,
                adults:this.adults,
                currency:this.currency
                }
            console.log("vol "+query_reponse.origin+" "+query_reponse.destination+" "+query_reponse.date+" "+
                        query_reponse.returnDate+" "+query_reponse.children+" "+query_reponse.adults+" "+
                        query_reponse.currency)

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
    }

})
</script>

<style>

</style>