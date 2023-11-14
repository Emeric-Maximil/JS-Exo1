/**
 * Une boulangerie vend des chocolatines. 
 * Pour calculer le prix qu'elle va facturer a ses clients
 *  elle a besoin d'un programme. 
 * 
 * -Une chocolatine coûte 1€40 a l'unité jusqu'à 10. 
 * -Les 10 suivantes coûtent 1€30 pièce et 
 * -Au-delà elles coûtent 1€20 pièce.
 * 
 * Écrire un programme qui calcule le prix à payer  
 * en fonction de la quantité (depuis un prompt) 
 * Afficher dans la console le montant à payer.
 */


let nb = prompt("Combien de chocolatines ?");
let res = 0;
let prix = 1.4;

for(let i = 0; i< nb; i++){
   if(i == 10 || i == 20){
      prix -= 0.1;
   }
   res += prix;
}

console.log("le prix est "+ res.toFixed(2) + "€");