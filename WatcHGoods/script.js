function vadateData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var agreement = document.getElementById("agreement").value;

    if(name.length > 25){
        alert("name must be under 25 letter");
    }else if(!email.endsWith("@gmail.com")){
        alert("email must be end with @gmail.com")
    }else if(agreement.checked){
        alert("agreement box must be checked")
    }else{
        alert("yout data has been save");
    }
}