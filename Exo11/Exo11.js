let debanq = 0;
let deJoueur = 0;
let ptsBanq = 0;
let ptsJoueur = 0;

for(let i = 0; i<5; i++){
   debanq = Math.floor(Math.random() * 6);
   deJoueur = Math.floor(Math.random() * 6);
   if(deJoueur>debanq){
      ptsJoueur++;
   }else if(deJoueur==debanq){
      ptsJoueur+=2;
   }else {
      ptsBanq++;
   }
}

if(ptsBanq<ptsJoueur){
   console.log("Bravo joueur tu as gagné à "+ptsJoueur+"pts");
}else{
   console.log("Bouh joueur tu es nul, t'as que "+ptsJoueur+"pts. Alors que la banque elle a"+ptsBanq+"pts");
}