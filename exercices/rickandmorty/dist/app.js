"use strict";
const url = "https://rickandmortyapi.com/api/character";
const div_characters = document.querySelector(".characters");
let Tab_characters = [];
fetch(url)
    .then(function (res) {
    return res.json();
})
    .then(function (data) {
    Tab_characters = data.results;
    // console.log(Tab_characters)
    Tab_characters.forEach((element) => {
        console.log(element);
        const card = document.createElement("div");
        card.className = "card";
        div_characters.append(card); //<div> <div class="card"></div> </div>
        const name = document.createElement("h3");
        name.className = "name";
        //ajout image
        const image = document.createElement("img");
        image.className = "image";
        image.src = element.image;
        card.append(image);
        //ajout d'un container pour le text
        const section = document.createElement("section");
        card.append(section);
        //ajout du nom
        //name.textContent=element.name   
        name.append(element.name); //<div> <div class="card"> <h3>element</h3>  </div> </div>
        //ajout d'une div qui contient le circle O status-race
        const div = document.createElement("div");
        div.className = "circle-statut-race";
        //circle
        const circle = document.createElement("div");
        circle.className = "circle";
        //espece
        const espece = document.createElement("p");
        espece.textContent = element.species;
        //race
        const status = document.createElement("p");
        status.textContent = element.status;
        if (status.textContent == "Alive") {
            circle.style.backgroundColor = "green";
        }
        else if (status.textContent == "Dead") {
            circle.style.backgroundColor = "red";
        }
        else {
            circle.style.backgroundColor = "grey";
        }
        div.append(circle);
        div.append(espece);
        div.append(status);
        section.append(name);
        section.append(div);
    });
})
    .catch(function (err) {
    console.log(err);
});
