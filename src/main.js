const nomeInput = document.getElementById("nome");
const cpfInput = document.getElementById("cpf");
const foneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");

const botaoCadastrar = document.getElementById("botaoCadastrar");

botaoCadastrar.onclick = function () {
    var nome = nomeInput.value;
    var cpf = cpfInput.value;
    var fone = foneInput.value;
    var email = emailInput.value;

    window.localStorage.setItem("nome", nome);
    window.localStorage.setItem("cpf", cpf);
    window.localStorage.setItem("fone", fone);
    window.localStorage.setItem("email", email);
        
}



function msgErro(){
    var validarNome = document.forms["formulario"]["nome"].value;
    var validarCPF = document.forms["formulario"]["cpf"].value;
    var validarFone = document.forms["formulario"]["telefone"].value;
    var validarEmail = document.forms["formulario"]["email"].value;

    if(validarNome == ""){
        alert("Campo NOME está vazio");
        return false;
    }
    else if(isNaN(validarCPF)){
        alert("CPF deve ser preenchido apenas com números");
        return false;
    }
    else if(validarCPF == ""){
        alert("Campo CPF está vazio");
        return false;
    }
    else if(isNaN(validarFone)){
        alert("Telefone deve ser preenchido apenas com números");
        return false;
    }
    else if(validarFone == ""){
        alert("Campo TELEFONE está vazio");
        return false;
    }
    else if(validarEmail == ""){
        alert("Campo EMAIL está vazio");
        return false;
    }
    
}