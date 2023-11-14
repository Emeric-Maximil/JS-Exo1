/**
 * Ecrivez un programme permettant à l’utilisateur 
 * de saisir un nombre quelconque de valeurs (prompt), 
 * qui devront être stockées dans un tableau. 
 * Afficher dans la console le nombre de valeurs négatives 
 * et le nombre de valeurs positives contenu dans le tableau (dans la console)
 * 
 * Bonus :
 * Afficher la valeur absolu la plus grande (dans la console).
 */




let tab = [];
let nbchiffresNeg = 0;
let max = 0;
for (let i = 0; i<10; i++){
   tab.push(prompt("Rentre une valeur contenue dans R"));
   if(tab[i]<0){
      nbchiffresNeg++;
   }
   if(max < Math.abs(tab[i])){
      max = Math.abs(tab[i]);
   }
}

console.log("nb Valeurs negatives : "+nbchiffresNeg);
console.log("nb Valeurs positives : "+tab.length - nbchiffresNeg);
console.log("la plus grande valeur absolue est : " + max);