function logar(){
    var email = document.getElementById("email");
    var senha = document.getElementById("senha");

    console.log(email.value + senha.value);

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);
        window.location.href = "https://www.alura.com.br/";
    }else{
        alert("Usuário ou senha inválidos!");
    }
}