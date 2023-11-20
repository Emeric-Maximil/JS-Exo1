const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

//Créer une constante tabData et lui assigner un tableau vide.
const tabData = [];

//Ajouter à tabData les const usersHuman, 
//usersPet et usersXeno dans l'ordre de votre choix, 
//grâce à une méthode de tableau.
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

/**
 * Créer la fonction afficherHummain() 
 * qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil 
d'un humain sous la forme :
----------------------------------------
nom : nom_de_l'objet
email : mail_de_l'objet
age : age_de_l'objet ans
----------------------------------------
 */

function afficherHummain(obj){
    console.log("nom : " + obj.name);
    console.log("email : " + obj.email);
    console.log("age : " + obj.age);
}

/**
 * 4) Créer la fonction afficherAnimal() 
 * qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil 
d'un animal sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
propriétaire : propriétaire_de_l'objet
----------------------------------------
 * 
 */


function afficherAnimal(obj){
    console.log("nom : " + obj.name);
    console.log("espece : " + obj.espece);
    console.log("age : " + obj.age);
    console.log("propriétaire : " + obj.propriétaire);
}



/**
 * 5) Créer la fonction afficherXeno() 
 * qui prendra un objet en paramètre.
Faire en sorte qu'elle affiche dans la console le profil 
d'un Xéno sous la forme :
----------------------------------------
nom : nom_de_l'objet
espece : espece_de_l'objet
age : age_de_l'objet ans
niveau de menace: menace_de_l'objet
----------------------------------------
 * 
 */

function afficherXeno(obj){
    console.log("nom : " + obj.name);
    console.log("espece : " + obj.espece);
    console.log("age : " + obj.age);
    console.log("niveau de menace : " + obj.menace);
}

/**
 * 6) Créer une fonction profil() 
 * qui prend un tableau d'objet en paramètre.
 * 7) Faire en sorte que la fonction profil() 
 * parcourt chaque objet du tableau
 */

function profil(obj){
    for(let i = 0; i< obj.length; i++){
        if(obj[i].type == "humain"){
            afficherHummain(obj[i]);
        }else if(obj[i].type == "animal de compagnie"){
            afficherAnimal(obj[i]);
        }else if(obj[i].type == "Xeno"){
            afficherXeno(obj[i]);
        }else{
            console.log("Type de Profil non Existant");
        }
    }
}
/**
 * 9) Appeler la fonction profil() 
 * sur chacun des tableaux usersHuman, usersPet, usersXeno
 */
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

/**
 * 10) Créer la fonction profilAll() 
 * qui prend en paramètre un grand tableaux 
 * constitué de petit tableaux
 * qui sont constitué d'objet (voir la structure de tabData)
 * 
 * 11) Faire en sorte que la fonction profilAll() 
 * appelle la fonction profil() sur chaque petit tableau.

 */


function profilAll(obj){
    for(let i = 0; i<obj.length;i++){
        if(obj[i][0].type == "humain"){
            profil(obj[i]);
        }else if(obj[i][0].type == "animal de compagnie"){
            profil(obj[i]);
        }else if(obj[i][0].type == "Xeno"){
            profil(obj[i]);
        }else{
            console.log("Type de Profil non Existant");
        }
    }
}

/**
 * 12) Appeler la fonction profilAll() 
 * sur le tableau tabData.
 */

profilAll(tabData);
