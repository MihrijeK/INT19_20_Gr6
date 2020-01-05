function validimiLogIn(){
    var username=document.login.username;
    var password=document.login.password;

    if(username.value=="" && password.value==""){
        alert("Ju lutemi plotesoni fushat");
        return false;
    }
    else{
        true;
    }

}
function validimiSignIn(){
    var username=document.signin.username;
    var password=document.signin.password;
    var email=document.signin.email;

    if(username.value=="" && password.value=="" && email.value==""){
        alert("Ju lutemi plotesoni fushat");
        return false;
    }
    else{
        true;
    }

}
function validimiBlej(){
    var emri=document.blej.emri;
    var adresa=document.blej.adresa;
    var card=document.blej.card;
    var expd=document.blej.expd;
    var cvc=document.blej.cvc;

    if(emri.value=="" && adresa.value=="" && card.value=="" && expd.value=="" && cvc.value==""){
        alert("Te gjitha fushat duhet te plotesohen!");
        return false;
    }
    else if(isNaN(card.value)){
        alert("Numri i karteles duhet te jete numer!");
    }
    else{
        alert("Pagesa eshte kryer me sukses!");
        true;
    }
}