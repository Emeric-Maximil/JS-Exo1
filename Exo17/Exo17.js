/**
 * Exercice 17 classe et Objet :
Gérer des compte en banque :
Créer une classe CompteBancaire avec des méthodes de crédit,


Afficher tous les soldes finaux.
Ces compte sont placés dans un tableau associatif de clients 

Bonus :
Générer une exception pour ne pas dépasser le solde 
(pas de retrait ou de virement qui dépassent le solde du compte bancaire),

Tester avec une tentatives de retret de Alex de 1200 €
 * 
 */

class CompteBancaire {
    //attributs
    solde = 0;
    nom = "pépito";
    // Constructeur
    constructor(solde, nom) {
        this.solde = solde;
        this.nom = nom;
    }
    //méthode
    credit(qte) {
        console.log(
            this.nom + ", vous allez créditer votre compte de " + qte + "€"
        );
        console.log("Réussite");
        this.solde += qte;
        this.getSolde();
    }

    retrait(qte) {
        console.log(this.nom + ", vous allez retirer " + qte + "€");
        if (this.solde >= qte) {
            console.log("Réussite");
            this.solde -= qte;
            this.getSolde();
            return true;
        } else {
            console.log(
                "Votre solde actuel ne vous permet pas de retirer cette quantité d'argent."
            );
            this.getSolde();
            return false;
        }
    }

    virement(qte, compte) {
        console.log(
            this.nom + ", vous voulez donnez " + qte + "€ à " + compte.nom
        );
        if (this.retrait(qte)) {
            compte.credit(qte);
        }
    }

    getSolde() {
        console.log(
            this.nom + ", votre solde actuel est de " + this.solde + "€"
        );
    }
}

let tab = {
    Alex: new CompteBancaire(1000, "Alex"),
    Clovis: new CompteBancaire(1000, "Clovis"),
    Marco: new CompteBancaire(1000, "Marco"),
};

tab[Alex].getSolde();
console.log("");
tab["Alex"].retrait(100);
console.log("");
tab["Marco"].virement(300, tab["Clovis"]);
console.log("");
tab["Alex"].retrait(600);
console.log("");
tab["Alex"].retrait(1200);
console.log("");
