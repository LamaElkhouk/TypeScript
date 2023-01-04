const touches:any[]=[
                    "/","+","-","=",
                    7,  8,   9, "x",
                    4,  5,   6,  "C",
                    1,  2,   3,   0 
                ]

const calculatrice= document.querySelector(".calculatrice") as HTMLElement
const inputCalculatrice = document.querySelector(".todo-input") as HTMLInputElement
let resultat:any[] = []; //tableau pour stocker le calcul
let resultat_final="";

touches.forEach(
    element =>{

    const button_calculatrice=document.createElement("button") //on créer un button

    button_calculatrice.append(element);  //<button>9</button>
    
    button_calculatrice.value=element   //<button value="9">9</button>


    //si on clique sur un bouton
    button_calculatrice.addEventListener('click',function(e:Event){
        let valueChoisit=button_calculatrice.value;
        console.log(valueChoisit)
        resultat.push(valueChoisit); //on rajoute les elements à l'input pour calculer
        inputCalculatrice.value= String(resultat.join(' ').trim()); //trim enleve les espaces , 
                                                                    //join pour remplacer le separateur "," par " "
        //calcul à appliquer suivant le symboles cliquer!

            switch (valueChoisit) {
                case "=":
                    console.log("egale à :")
                    resultat_final=eval(inputCalculatrice.value.slice(0,-1)); // on enleve le symbole "=" por pouvoir effectuer le calcul
                    console.log("resultat : "+resultat_final);
                    //on réaffiche le resultat dans l'input
                    inputCalculatrice.value=resultat_final
                    if(eval(inputCalculatrice.value)=="Infinity"){
                        console.log("on peut pas calculer une division par 0")
                        inputCalculatrice.value="Fatal error..."
                    }
                    break;
                case "C":
                    console.log("Clear...");
                    resultat=[] //remise à zéro
                    inputCalculatrice.value=""
                    break;
                default:
                    break;
        }
    })



    calculatrice.append(button_calculatrice)
    }
);

