let statut = true;

function addTask() {
    if (document.getElementById("task").value != "") {
        let div = document.createElement("div");
        div.setAttribute("class", "container");

        let para = document.createElement("p");
        para.textContent = document.getElementById("task").value;

        let button1 = document.createElement("button");
        button1.setAttribute("id", "delete");
        button1.setAttribute("onclick", "deleteTask(this)");
        button1.textContent = "delete";

        let button2 = document.createElement("button");
        button1.setAttribute("id", "update");
        button2.setAttribute("onclick", "updateTask(this)");
        button2.textContent = "update";

        div.appendChild(para);
        div.appendChild(button1);
        div.appendChild(button2);

        document.getElementById("tasks").appendChild(div);

        //le code ci-dessous  : récupére la clé tasks dans le localstorage
        //et le met à jour avec la valeur saisie dans l'input du formulaire
        //récupération de l'input ('#task)
        let valeur = document.querySelector("#task").value;
        //récupérer dans une variable la valeur clé ('tasks')
        let tasks = localStorage.getItem("tasks");
        //test si la clé tasks dans localstorage est vide
        if (tasks == "") {
            tasks += valeur;
        }
        //test sinon elle n'est pas vide
        else {
            //transforme en tableau
            tasks = tasks.split(",");
            //ajoute la valeur de l'input au tableau
            tasks.push(valeur);
        }
        //mise à jour de la clé
        localStorage.setItem("tasks", tasks);
    }
}

function delAllTask() {
    document.getElementById("tasks").textContent = "";
}

function reload() {
    window.location.reload();
}

function deleteTask(e) {
    e.parentNode.remove();
}

function updateTask(e) {
    if (statut) {
        let contenue = e.parentNode.firstChild.textContent;

        let unput = document.createElement("input");
        unput.setAttribute("type", "text");

        e.parentNode.replaceChild(unput, e.parentNode.firstChild);

        unput.value = contenue;
        statut = false;
    } else {
        let contenue = e.parentNode.firstChild.value;
        let newPara = document.createElement("p");

        e.parentNode.replaceChild(newPara, e.parentNode.firstChild);

        newPara.textContent = contenue;
        statut = true;
    }
}

//création du tableau
localStorage.getItem("tasks") == null
    ? localStorage.setItem("tasks", [])
    : false;

function showAllTask() {
    let tasks = localStorage.getItem("tasks").split(",");

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i] != "") {
            let div = document.createElement("div");
            div.setAttribute("class", "container");

            let para = document.createElement("p");
            para.textContent = tasks[i];

            let button1 = document.createElement("button");
            button1.setAttribute("id", "delete");
            button1.setAttribute("onclick", "deleteTask(this)");
            button1.textContent = "delete";

            let button2 = document.createElement("button");
            button1.setAttribute("id", "update");
            button2.setAttribute("onclick", "updateTask(this)");
            button2.textContent = "update";

            div.appendChild(para);
            div.appendChild(button1);
            div.appendChild(button2);

            document.getElementById('tasks').appendChild(div);
        }
    }
}

function viderLocalStorage(){
    localStorage.clear();
}