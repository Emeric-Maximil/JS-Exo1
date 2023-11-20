// document.querySelector('h1').style.fontSize = 123 + 'px';
// document.querySelector('h1').textContent = 'nouveau titre';
// document.querySelector('div').style.fontFamily = 'Arial';
// document.querySelector('div').style.marginTop = '30px';
// document.querySelector('p').style.color = 'green';
// document.querySelector('p').textContent = 'nouveau contenu du paragraphe.';



const user = {
    'id' : 42,
    'nom': 'MAXIMIL',
    'prenom': 'Emeric',
    'age': 22,
    'image' :'./logo.jpg'
  }

document.getElementById("user.id").firstChild.textContent = user.id;
document.querySelectorAll('p')[0].textContent = user.nom;
document.querySelectorAll('p')[1].textContent = user.prenom;
document.querySelectorAll('p')[2].textContent = user.age;

for(let i = 0; i < 3; i++){
    document.querySelectorAll('p')[i].style.fontSize = "11px";
    document.querySelectorAll('p')[i].style.color = "blue";
}

document.querySelector('img').src = "image.jpg";
document.querySelector('img').style.height = "100px";
document.querySelector('img').style.width = "100px";
document.querySelector('img').style.margin = "10px";

document.getElementById("user.id").style.backgroundColor = "rgb(220,220,220)";


