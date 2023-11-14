
let tab=[];

for(let i = 0; i<3; i++){
   tab[i]= prompt("Saisir le "+i+" élément ");
}
let res = tab[2]*tab[1]*1.20;
console.log("Le prix TTC est de "+tab[0]+"est de "+ res)