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
                <!--test visuel avec donnée en dure -->
                <div class="card-vol" >
                        <div class="informations-vol">
                            <div class="information-vol-aller">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <div class="infos-titre-aller">
                                    <h4>aller</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                
                                <p class="infos">Aller - Retour: <strong>LON</strong>, london - <strong>NYCA </strong>, new york </p>
                                <p class="infos"><span class="dot"></span> Depart : Le 11/01/2023 à 10h00</p>
                                <p class="infos"><span class="dot"></span> Arrivée :Le 11/01/2023 à 15h00</p>
                                <p class="infos"><span class="dot"></span> Durée 6h00</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <div class="information-vol-retour">
                                <div class="infos-titre-retour">
                                    <h4>retour</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                
                                <p class="infos">Aller - Retour: <strong>NYAC</strong>, new york - <strong>LON </strong>, london</p>
                                <p class="infos"><span class="dot"></span> Départ : Le 20/01/2023 à 06h00</p>
                                <p class="infos"><span class="dot"></span> Arrivée :Le 20/01/2023 à 11h00</p>
                                <p class="infos"><span class="dot"></span> Durée 08h00</p>
                            </div>
                        </div>
                        <div  class="infos-en-savoir-plus">
                            <h3>Prix totale: 100€</h3>
                            <RouterLink :to="{name:'accueil',params:{}}" class="btn btn-primary">En savoir plus</RouterLink>
                        </div>
                        
                </div>
                <!--aller uniquement-->
                <div class="card-vol" >
                        <div class="informations-vol">
                            <div class="information-vol-aller">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <div class="infos-titre-aller">
                                    <h4>aller</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                
                                <p class="infos">Aller - Retour: <strong>LON</strong>, london - <strong>NYCA </strong>, new york </p>
                                <p class="infos"><span class="dot"></span> Depart : Le 11/01/2023 à 10h00</p>
                                <p class="infos"><span class="dot"></span> Arrivée :Le 11/01/2023 à 15h00</p>
                                <p class="infos"><span class="dot"></span> Durée 6h00</p>
                            </div>
                        </div>
                    <div  class="infos-en-savoir-plus">
                        <h3>Prix totale: 100€</h3>
                        <RouterLink :to="{name:'accueil',params:{}}" class="btn btn-primary">En savoir plus</RouterLink>
                    </div>
                </div>
                <!--fin du teste-->

                <!--données issu de l'api-->
                <div v-for="vol in vols " :key="vol.id">
                    <!-- aller - retour-->
                    <div class="card-vol" v-if="returnDate!=''" >
                        <div class="informations-vol">
                            <div class="information-vol-aller">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <div class="infos-titre-aller">
                                    <h4>Aller</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                <p>Aller - Retour: <strong>{{ vol.legs[0].origin.display_code}}</strong>, {{ vol.legs[0].origin.name }} - <strong>{{ vol.legs[0].destination.display_code }} </strong>, {{ vol.legs[0].destination.name }} </p>
                                <p class="infos" >Départ : Le {{ convertir_date(vol.legs[0].departure)}} à {{convertir_heure(vol.legs[0].departure)}}</p>
                                <p class="infos">Arrivée :Le {{ convertir_date(vol.legs[0].arrival)}} à {{ convertir_heure(vol.legs[0].arrival)}}</p>
                                <p class="infos">Durée {{convertir_duree(vol.legs[0].duration)}}</p>
                            </div>
                            <div class="information-vol-retour">
                                <div class="infos-titre-retour">
                                    <h4>Retour</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                <p>Aller - Retour: <strong>{{ vol.legs[1].origin.display_code}}</strong>, {{ vol.legs[1].origin.name }} - <strong>{{ vol.legs[1].destination.display_code }} </strong>, {{ vol.legs[1].destination.name }} </p>
                                <p class="infos"><span class="dot"></span> Départ : Le {{ convertir_date(vol.legs[1].departure)}} à {{convertir_heure(vol.legs[1].departure)}}</p>
                                <p class="infos"><span class="dot"></span> Arrivée :Le {{ convertir_date(vol.legs[1].arrival)}} à {{ convertir_heure(vol.legs[1].arrival)}}</p>
                                <p class="infos"><span class="dot"></span> Durée {{convertir_duree(vol.legs[0].duration)}}</p>
                            </div>
                        </div>
                        <div  class="infos-en-savoir-plus">
                            <h3>prix totale: {{vol.price.amount}}€</h3>
                            <RouterLink :to="{name:'unVol', params:{vol: JSON.stringify(vol)}}" class="btn btn-primary">En savoir plus</RouterLink>
                        </div>
                    </div>
                        <!-- aller uniquement-->

                    <div class="card-vol" v-else>
                        <div class="informations-vol">
                            <div class="information-vol-aller">
                                <svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <div class="infos-titre-aller">
                                    <h4>Aller</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-airplane-fill" viewBox="0 0 16 16">
                                        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                    </svg>
                                </div>
                                <p>Aller - Retour: <strong>{{ vol.legs[0].origin.display_code}}</strong>, {{ vol.legs[0].origin.name }} - <strong>{{ vol.legs[0].destination.display_code }} </strong>, {{ vol.legs[0].destination.name }} </p>
                                <p class="infos" >Départ : Le {{ convertir_date(vol.legs[0].departure)}} à {{convertir_heure(vol.legs[0].departure)}}</p>
                                <p class="infos">Arrivée :Le {{ convertir_date(vol.legs[0].arrival)}} à {{ convertir_heure(vol.legs[0].arrival)}}</p>
                                <p class="infos">Durée {{convertir_duree(vol.legs[0].duration)}}</p>
                            </div>
                        </div>
                        <div  class="infos-en-savoir-plus">
                            <h3>prix totale: {{vol.price.amount}}€</h3>
                            <RouterLink :to="{name:'unVol', params:{vol: JSON.stringify(vol)}}" class="btn btn-primary">En savoir plus</RouterLink>
                        </div>
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
                this.vols = response.data.data.slice(0, 10)
            })
        }
    }

})
</script>

<style>

</style>