let compteur = 1;


function calculer() {
    let valeur = document.getElementById("quantite").value;

    if(document.querySelectorAll("p").length == 4){
        
        console.log("il y a 4 paragraphes");
        let total = 0;

        let p1 = document.querySelectorAll('p')[2].textContent;
        let p2 = document.querySelectorAll('p')[3].textContent;
        total = p1 * p2 * 1.2;

        console.log(total);
        document.getElementById("resultat").textContent = "Le prix TTC de "+document.querySelectorAll('p')[1].textContent+" est de "+total+"€";
    }else {
        console.log(compteur);
        document.body.appendChild(document.createElement('p'));
        document.querySelectorAll('p')[compteur].textContent = valeur;
        compteur++;
        if(compteur == 4){
            console.log(document.querySelector("button").textContent);
            document.querySelector("button").textContent = "Calculer";
        }
    }

    
}