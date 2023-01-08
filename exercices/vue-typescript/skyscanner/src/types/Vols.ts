
export default interface Vols{
    id:number,
    origin: string,
    destination: string,
    date: Date,
    returnDate?: Date,
    adults?: number,
    children?: number,
    currency:string
}