//FAUX

/*let id = 5;
id="mot";*/

//Bonne façon de faire

let id:number = 5;
id=10;

//autres types...

let nom:string = "Didier";
let isAdmin:boolean=false;
let age:any=15; //prend tout les type
let admin:undefined
let user:null
let users:any[] = ["Pierre",2,true,{id:3}] //tableau qui prend toutes les valeurs possible (any)
let array: string[]= ["Pierre","24"] //tableau de string
array.push(nom);
console.log(array);

/**
 * error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
22 array.push(55);
Found 1 error in index.ts:22
 */


//Tuples
let salaries:[string,number,boolean] = ["pierre",3000,true];
let etudiants: [number,string][]=[
    [1,"charles"],
    [2,"fabrice"]
]

// Union
let uid:string | number =25;
uid="pierre"

//Objets

type Modo ={
    id:number,
    pseudo:string
}
const modo :Modo={
    id:1,
    pseudo:"Joe"
}

//interfaces

interface AdminInterface{
    id:number,
    pseudo:string,
    age?:number //champ optionel !
}
const Admin:AdminInterface = {
    id:1,
    pseudo:"bocs"
}

//les interfaces sont dynamiques et peuvent etre modificer contrairement aux types..

//Enum

enum Direction {
    Haut=1,Bas,Gauche,Droite
}
Direction.Haut
//Assertion

let cid :any;
//cid = <number>85
//cid = <AdminInterface>

//fonction

function addition(x:number,y:number):number{
    return x+y
}

console.log(addition(5,6))

//type void

function log(message:string|number):void{  //on a plus besoin du return avec void
    console.log(message)
}
log("salut")