/**
 * document.body.appendChild(document.createElement('p'));
        document.querySelectorAll('p')[compteur].textContent = valeur;
 */

function addTask(){
    let div = document.createElement("div");
    div.setAttribute('class', "container");

    let para = document.createElement('p');
    para.textContent = document.getElementById("task").value;

    
    let button1 = document.createElement('button');
    button1.setAttribute('id', "delete");
    button1.setAttribute('onclick', "deleteTask(this)");
    button1.textContent = "delete";

    let button2 = document.createElement('button');
    button1.setAttribute('id', "update");
    button2.setAttribute('onclick', "updateTask(this)");
    button2.textContent = "update";

    div.appendChild(para);
    div.appendChild(button1);
    div.appendChild(button2);

    document.body.appendChild(div);
    

    
    

    
    //button1.textContent = 
    //document.getElementById('tasks').appendChild(para);
}

function delAllTask(){
    document.getElementById("tasks").textContent = "";
}

function reload(){
    window.location.reload();
    
}

function deleteTask( e ){
    e.parentNode.remove();
}

function updateTask(e){
    e.parentNode.firstChild.textContent = document.getElementById("task").value;
}