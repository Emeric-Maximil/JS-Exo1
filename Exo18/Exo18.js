/**
 * Exercice 18 Classe et Objet :
Gérer une PME
Cahier des charges :

-Un Salarié a un nom, prénom, âge, salaire mensuel
Il est payé sur N mois.
En plus il y a XXX de charges

-Une Pme c’est un nom, une équipe de plusieurs salariés
Grace à ses ventes elle a des revenus R
Mais aussi … : 
des frais fixes FF (impôts etc…)
Des frais d’achats de matériel et de logiciels FA

TODO : 
Créer une classe Pme et une classe Employee
Utiliser des fonctions
Faire le bilan annuel de l’entreprise et l’afficher en console.
(Bilan reste en solde de la Pme)

Détails : 
3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
R = 300000 (trois cent mille)
FF = 20000 (vingt mille)
FA = 50000 (cinquante mille)
N = 12
XXX = 90%
 */

class Employee{
    nom; prenom; age; salaireM;
    constructor(nom, prenom, age, salaireM){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireM = salaireM;
    }
}

class PME{
    nom; equipe; R; FF; FA;  
    constructor(nom, equipe, R, FF, FA){
        this.nom = nom;
        this.equipe = equipe;
        this.R = R;
        this.FF = FF;
        this.FA = FA;
    }

    bilan(nbMois, tauxCharge){
        let res = this.R;
        res -= this.FF + this.FA;
        for (let i = 0; i < this.equipe.length; i++) {
            res -= equipe[i].salaireM * tauxCharge * nbMois;
          
        }
        console.log(res+"€ par an");
        return res;
    }
   
}

const N= 12;
const charge = 1.10;

let equipe = [
     new Employee("gentilleau", "Francois","28", 2000),
     new Employee("Martin", "Jerome","37", 3000),
     new Employee("Maximil", "Emeric","21", 4000),
]

let inn = new PME("Taverne", equipe,300000,20000,50000);
inn.bilan(N,charge);