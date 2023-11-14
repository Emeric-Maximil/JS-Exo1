/**
 * Créer un programme qui va ajouter dans un tableau indexé (users) :
-A chaque tour un tableau associatif (user) qui va contenir =>
nom (prompt ("saisir le nom"),
prenom (prompt("saisir le prénom"),
age (prompt("saisir l'age"),

-La boucle va tourner 5 fois (ajouter 5 utilisateurs).
Afficher dans la console l'utilisateur avec son nom 
et prénom qui est le plus jeune (tableau users).

Bonus :
Afficher dans les prompts 
(le numéro de l'utilisateur que vous allez ajouter) 
=> saisir le nom du 1 utilisateur,
 saisir le nom du 2 utilisateur etc...
 */


let tab = [];
let pluspetit = 0;
//ajouter des gens dans le tableau et savoir qui est le plus jeune
for (let i = 1; i < 3; i++) {
   tab.push({
      'nom': prompt ("saisir le nom, son numéro est "+i),
      'prenom': prompt ("saisir le prenom, son numéro est "+i),
      'age': prompt ("saisir l'age, son numéro est "+i)
   });

   if(tab[pluspetit]['age'] > tab[i-1]['age']){
      pluspetit = i-1;
   }
}

//afficher le plus jeune
for (const iterator in tab[pluspetit]) {
   //afficher le nom de la colonne
   console.log(iterator);
   
   //afficher le contenu
   console.log(tab[pluspetit][iterator]);
}

