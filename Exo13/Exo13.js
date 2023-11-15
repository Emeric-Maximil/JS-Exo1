class Animal {
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    couleur = "blanc";

    // Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid, newAge = 10) {
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;

        this.age = newAge;
    }

    //méthode
    crier() {
        if (this.espece == "Tigre" || this.espece == "tigre") {
            console.log("Grrr");
        }
        if (this.espece == "Chat" || this.espece == "chat") {
            console.log("Miaou");
        }
        if (this.espece == "Chien" || this.espece == "chien") {
            console.log("Écorce");
        }
        if (this.espece == "Coq" || this.espece == "coq") {
            console.log("Coco rico");
        }
    }

    dormir() {
        console.log("Zzzzz");
    }

    getEspece() {
        console.log(this.espece);
    }
}

const tigre = new Animal("tigre", 4, 150, 180);
const chat = new Animal("chat", 4, 30, 4);
const chien = new Animal("chien", 4, 50, 9);
const coq = new Animal("coq", 4, 40, 4);
const vache = new Animal("vache", 4, 100, 4, "blanche");

console.log(tigre);
tigre.taille = 180;
tigre.couleur = "Blanc";
console.log(tigre);
tigre.crier();
chat.crier();
chien.crier();
coq.crier();

tigre.getEspece();
chat.getEspece();
chien.getEspece();
coq.getEspece();
