/*Depuis les fichiers ci-dessous créer un script qui va :
-Récupérer les valeurs saisies dans les 3 inputs (name, firstname, email) avec .value.
-Les ajouter dans un tableau,
-Afficher le tableau dans la console => console.log.
30 minutes.
A déposer sur un repository Github : */ 

document.getElementById("bt").addEventListener("click", myFunction);

function myFunction() {
    let input = [];

    input[0] = document.getElementById("name").value;
    input[1] = document.getElementById("firstname").value;
    input[2] = document.getElementById("email").value;
    console.log(input);
}
