const touches:any[]=[
                    "/","+","-","=",
                    7,  8,   9, "x",
                    4,  5,   6,  "C",
                    1,  2,   3,   0 
                ]

const calculatrice= document.querySelector(".calculatrice") as HTMLElement
const inputCalculatrice = document.querySelector(".todo-input") as HTMLInputElement
let resultat:any[] = []; //tableau pour stocker le calcul
let resultat_final="";  //affichage finale dans l'input

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
                    resultat_final=inputCalculatrice.value.slice(0,-1); // on enleve le symbole "=" por pouvoir effectuer le calcul
                    console.log("res "+resultat_final+" "+inputCalculatrice.value.endsWith("x"))
                    
                    if(inputCalculatrice.value.endsWith("x")||inputCalculatrice.value.endsWith("/")||inputCalculatrice.value.endsWith("+")||inputCalculatrice.value.endsWith("-")){
                        inputCalculatrice.value="Fatal error..." // exemple 7+8+=  ou 7+x--8
                    }else{
                        console.log("resultat : "+eval(resultat_final));
                        //on réaffiche le resultat dans l'input
                        inputCalculatrice.value=eval(resultat_final)
                        if(eval(inputCalculatrice.value)=="Infinity"){
                            console.log("on peut pas calculer une division par 0") //exemple 8/0=
                            inputCalculatrice.value="Fatal error..."
                        }
                        //si tout se passe bien 
                        saveResultat()
                        
                        resultat=[] //remise à zéro
                        inputCalculatrice.value=""
                        let res=localStorage.getItem("res")
                        resultat.push(res)
                        inputCalculatrice.value=String(resultat.join(' ').trim())
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


// Fonction qui sauvegarde les éléments dans le local Storage
const saveResultat = () =>{
    localStorage.setItem("res", JSON.stringify(eval(resultat_final)))
}
/**
 * il faut aller sur un naviguateur ex: Microsoft edge
 * inspecter element/F12 
 *  application
 * Stockage local
 * file => la ou est stocker le resultat finale
 */
