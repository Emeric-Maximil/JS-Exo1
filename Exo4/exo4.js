/*-"Poussin" de 6 à 7 ans
           -"Pupille" de 8 à 9 ans
           -"Minime" de 10 à 11 ans
           -"Cadet" après 12 ans
           -"Hors catégorie ou trop jeune" si */



let age = parseInt(prompt("Saisir un nombre"));

if(age> 11){
   console.log("Cadet");
}else if(age> 9){
   console.log("Minime");
}else if(age> 7){
   console.log("Pupille");
}else if(age> 5){
   console.log("Poussin");
}else{
   console.log("Hors catégorie");
}