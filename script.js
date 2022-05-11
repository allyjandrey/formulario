const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confsenha = document.getElementById("confsenha");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checarInput();
});

function checarInput() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confsenhaValue = confsenha.value;

    if (usernameValue == "") {
        setError(username, "O nome de usuário é obrigatório");
    } else if(usernameValue.length < 3) {
        setError(username, "O username deve ter mais do que 3 caracteres")
    } else if(usernameValue.length > 25){
        setError(username, "O username deve ter menos do que 25 caracteres")
    } else {
        setSucess(username);
    }

    if (emailValue == ""){
        setError(email, "O email é obrigatório");
    } else if(!checarEmail(emailValue)) {
        setError(email, "Por favor insira um email válido");
    } else {
        setSucess(email);
    }

    if (senhaValue == ""){
    setError(senha, "A senha é obrigatória");
    } else if (senhaValue.length < 8) {
        setError(senha, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        setSucess(senha);
    }

    if (confsenhaValue == "") {
        setError(confsenha, "A confirmação de senha é obrigatória")
    } else if (confsenhaValue != senhaValue) {
        setError(confsenha, "As senhas são diferentes")
    } else {
        setSucess(confsenha);
    }

    const formControl = form.querySelectorAll('form-control')

    const formValido = [...formControl].every(formControl => {
        return (formControl.className == "form-control sucess");
    });

    if (formValido) {
        console.log("O formulário está válido");
    }
}

function setError(input, mensagem) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = mensagem;

    formControl.className = "form-control error";
}

function setSucess(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control sucess";
}

function checarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}