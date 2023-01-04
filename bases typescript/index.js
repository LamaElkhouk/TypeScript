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
var Admin = {
    id: 1,
    pseudo: "bocs"
};
//les interfaces sont dynamiques et peuvent etre modificer contrairement aux types..
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Haut"] = 1] = "Haut";
    Direction[Direction["Bas"] = 2] = "Bas";
    Direction[Direction["Gauche"] = 3] = "Gauche";
    Direction[Direction["Droite"] = 4] = "Droite";
})(Direction || (Direction = {}));
Direction.Haut;
//Assertion
var cid;
//cid = <number>85
//cid = <AdminInterface>
//fonction
function addition(x, y) {
    return x + y;
}
console.log(addition(5, 6));
//type void
function log(message) {
    console.log(message);
}
log("salut");
