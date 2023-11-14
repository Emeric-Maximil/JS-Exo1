/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	initSelect();
	
}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;


function initSelect(){
    document.body.addEventListener("click", select);
}

function select(e){
    if(e.target.style.backgroundColor == 'red'){
        e.target.style.backgroundColor='';
       }
    else{
       e.target.style.backgroundColor= 'red' ;
       }
}

