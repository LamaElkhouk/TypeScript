import axios, { AxiosInstance } from "axios";

const apiAeroport: AxiosInstance = axios.create({
    method: 'GET',
    baseURL: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
    params: {query: 'london'},
    headers: {
        'X-RapidAPI-Key': 'c2a4b54320msh39c2bd408379f9bp100c21jsnd83fb8c8efcf',
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
});

export default apiAeroport;
