//FAUX
/*let id = 5;
id="mot";*/
//Bonne façon de faire
var id = 5;
id = 10;
//autres types...
var nom = "Didier";
var isAdmin = false;
var age = 15; //prend tout les type
var admin;
var user;
var users = ["Pierre", 2, true, { id: 3 }]; //tableau qui prend toutes les valeurs possible (any)
var array = ["Pierre", "24"]; //tableau de string
array.push(nom);
console.log(array);
/**
 * error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
22 array.push(55);
Found 1 error in index.ts:22
 */
//Tuples
var salaries = ["pierre", 3000, true];
var etudiants = [
    [1, "charles"],
    [2, "fabrice"]
];
// Union
var uid = 25;
uid = "pierre";
var modo = {
    id: 1,
    pseudo: "Joe"
};
