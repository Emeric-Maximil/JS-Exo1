let nombre1 = parseInt(prompt("Saisir le 1 nombre"));
let nombre2 = parseInt(prompt("Saisir le 2 nombre"));

//afficher dans la console si le produit est négatif

/*
if(nombre1 * nombre2 > 0){
   console.log("c'est positif");
}else if (nombre1 * nombre2 < 0){
   console.log("c'est négatif");
}else{
   console.log("Il y a un zéro dans la multiplication");
}*/

if(nombre1 > 0 && nombre2 > 0 || nombre1 < 0 && nombre2< 0){
   console.log("c'est positif");
}else if (nombre1 == 0 || nombre2 == 0){
   console.log("Il y a un zéro dans la multiplication");
}else{
   console.log("c'est négatif");
}