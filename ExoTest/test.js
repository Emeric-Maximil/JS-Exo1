console.log("ça commence");

let tab = prompt("Saisir un Chiffre stp");

console.log(tab);


switch(tab){
   case '1':
      console.log("numéro 1");
      break;
   case '2':
      //dans le cas 2 on réalise le cas 2 et 3 
      console.log("numéro 2");
      // break;
   case '3':
      //dans le cas 3 on ne réalise que le cas 3 
      console.log("numéro 3");
      break;
   case '4':
      //dans le cas 4 on ne réalise que le cas 4 
      console.log("numéro 4");
      // break;
   default:
      //Ce cas n'est réalisé que lors qu'aucun des 
      //cas du dessus n'est réalisé
      console.log("?");
      break;
}

