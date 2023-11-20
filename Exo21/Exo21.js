// /* Une boulangerie vend des chocolatines. Pour calculer le prix qu'elle va facturer a ses clients elle a besoin d'un programme. 
// -Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
// -Les 10 suivantes coûtent 1€30 pièce et 
// -Au-delà elles coûtent 1€20 pièce.
// Écrire un programme qui calcule le prix à payer  en fonction de la quantité (depuis un prompt) 
// Afficher dans la console le montant à payer. */

// //Récupérer le nombre de chocolatine
// //let nombre = parseInt(prompt("saisir le nombre de choclatine à facturer"));
// //variable pour stocker
// let total = 0;

// //test si nombre est inférieur ou égal à 10
// if (nombre <= 10 && nombre > 0) {
//     total = nombre * 1.4;
// }
// //test si nombre est inférieur ou égal à 20
// else if (nombre <= 20) {
//     total = 14 + (nombre - 10) * 1.3;
//     //version avec le calcul du prix des 10 premières
//     //total = (10*1.4)+((nombre-10)*1.30);
// }
// //test si nombre est supérieur à 20
// else if (nombre > 20) {
//     total = 27 + (nombre - 20) * 1.2;
//     //version avec le calcul du prix des 20 premières
//     //total =(10*1.4) +(10*1.3)+ ((nombre - 20) *1.20);
// }
// //test si le nombre est négatif
// else {
//     total = "Saisir un nombre positif";
// }
// //version avec isNaN (test si ce n'est pas un nombre )
// console.log(
//     !isNaN(total)
//         ? "Le prix total est égal à " + total.toFixed(2) + " €"
//         : total
// );
// //version avec isInteger (test si c'est un nombre entier)
// //console.log(isInteger(nombre)?"Le prix total est égal à "+total.toFixed(2)+" €":total);

function calculer() {
    let nombre = document.getElementById("quantite").value;
    let total = "ça marche pas c'est vide";
    if(nombre == ""){
      document.querySelector("p").textContent = total;
    }
    //test si nombre est inférieur ou égal à 10
    else if (nombre <= 10 && nombre > 0) {
        total = nombre * 1.4;
    }
    //test si nombre est inférieur ou égal à 20
    else if (nombre <= 20) {
        total = 14 + (nombre - 10) * 1.3;
    }
    //test si nombre est supérieur à 20
    else if (nombre > 20) {
        total = 27 + (nombre - 20) * 1.2;
    }
    //test si le nombre est négatif
    else {
        total = "Saisir un nombre positif";
    }
    console.log(total);
    document.querySelector("p").textContent = total+"€";
}


