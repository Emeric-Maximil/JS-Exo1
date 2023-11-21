let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regex1 = false;
document.getElementById("email").addEventListener("keyup",(event)=>{
    let testRegex = regexEmail.test(document.getElementById("email").value);
    console.log(document.getElementById("email").value);

    if(testRegex){
        
        document.getElementById("email").style.backgroundColor = "rgb(50,200,10)";
        regex1 = true
    }else{
       
        document.getElementById("email").style.backgroundColor = "rgb(200,50,10)";
        regex1 = false
    }

});

let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
let regex2 = false;
document.getElementById("password").addEventListener("blur", (event)=>{
    let testRegex = regexPassword.test(document.getElementById("password").value);
    
    if(testRegex){
        
        document.getElementById("password").style.backgroundColor = "rgb(50,200,10)";
        regex2 = true;
    }else{
        
        document.getElementById("password").style.backgroundColor = "rgb(200,50,10)";
        regex2 = false;
    }
});

function seConnecter(){
    if(regex2 && regex1){
        console.log("vous etes connecté");
    }else{
        console.log("vous etes pas connecté");
    }
}
