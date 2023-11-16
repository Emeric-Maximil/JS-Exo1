class Personnage {
    //attributs
    nom;
    force;
    defense;
    vie;
    esquive;

    // Constructeur
    constructor(newNom, newForce, newDefense, newVie, newVitesse) {
        this.nom = newNom;
        this.force = newForce;
        this.defense = newDefense;
        this.vie = newVie;
        this.esquive = newVitesse;
    }


    
    //méthode
    attaquer(perso) {

        if(this.force > perso.defense){
            perso.vie -= this.force - perso.defense;
            console.log(this.nom + " a infligé " + 
            (this.force - perso.defense) + " points de dégats.");
        }else{
            console.log(this.nom + " a infligé 0 points de dégats");
        }
        

        
    }

    
}


class Combat{
    nbrTour = 0;
    score = [0,0];


    fight(perso1, perso2){
        let chance = 0;
        while(perso1.vie > 0 && perso2.vie > 0){

            chance = Math.floor((Math.random() * 100) + 1);
            
            // si chance > esquive alors l'attaqué n'esquive pas
            if(chance > perso2.esquive){
                perso1.attaquer(perso2);
            }else{
                console.log(perso2.nom + " a réussi à esquiver !");
            }
            if(perso2.vie > 0){
                if(chance > perso1.esquive){
                    perso2.attaquer(perso1);
                }
                else{
                    console.log(perso1.nom + " a réussi à esquiver !");
                    }
        }
            
            this.nbrTour++;
        }
        console.log("Le combat a duré " + this.nbrTour + " tours");
        if(perso1.vie > 0){
            console.log("C'est "+ perso1.nom+" qui a gagné "+ perso2.nom);
            

        }else{
            console.log("C'est "+ perso2.nom+" qui a gagné contre "+ perso1.nom);
        }
    }
}

const tigre = new Personnage("Le tigre", 40, 20, 180,5);
const bonk = new Personnage("Le fusil à pompe", 200, 3, 24,0);

const chat = new Personnage("Le Chat", 10, 3, 40,50);
const chatRoux = new Personnage("Garfiel", 8, 5, 300,10);



const tigreBonk = new Combat();
const chatContreGarfield = new Combat();
const chatContretigre = new Combat();

// tigreBonk.fight(bonk,tigre);
// chatContreGarfield.fight(chat,chatRoux);
chatContretigre.fight(chat,tigre);

