/*Ecrire un programme qui 
demande 3 mots à l'utilisateur (prompt) 
et qui indique si ils sont dans l'ordre alphabétique 
(afficher dans la console).*/ 




let mots = [];
for(let i = 0; i < 3 ; i++){
    mots.push(prompt("Saisir un mot"));
}

console.log(mots);

if((mots[0].localeCompare(mots[1]) == -1 || mots[0].localeCompare(mots[1]) == 0) &&
   (mots[0].localeCompare(mots[2]) == -1 || mots[0].localeCompare(mots[2]) == 0)&&
   (mots[1].localeCompare(mots[2]) == -1 || mots[1].localeCompare(mots[2]) == 0)){
   console.log("is ok");
}else {
   console.log("isn't ok");
}
