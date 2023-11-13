let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note "));
   notes.push(note);
}
// calculer la moyenne de notes et l'afficher dans la console 

let res = 0;

for(let i = 0; i<notes.length; i++){
   res += notes[i];
}

console.log("La moyenne est "+res/nombre);