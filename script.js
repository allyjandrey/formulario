const formulario = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confsenha = document.getElementById("confsenha");

//Impedir que o formulário resete ao clicar no submit

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    checarInput();
});

//Checar informações colocadas nos inputs

function checarInput() {
    const usernameValor = username.value;
    const emailValor = email.value;
    const senhaValor = senha.value;
    const confsenhaValor = confsenha.value;

    if (usernameValor == "") {
        setarErro(username, "O nome de usuário é obrigatório");
    } else if (usernameValor.length < 3) {
        setarErro(username, "O username deve ter mais do que 3 caracteres")
    } else if (usernameValor.length > 25){
        setarErro(username, "O username deve ter menos do que 25 caracteres")
    } else {
        setarSucesso(username);
    }

    if (emailValor == ""){
        setarErro(email, "O email é obrigatório");
    } else if(!checarEmail(emailValor)) {
        setarErro(email, "Por favor insira um email válido");
    } else {
        setarSucesso(email);
    }

    if (senhaValor == ""){
    setarErro(senha, "A senha é obrigatória");
    } else if (senhaValor.length < 8) {
        setarErro(senha, "A senha precisa ter no mínimo 8 caracteres")
    } else {
        setarSucesso(senha);
    }

    if (confsenhaValor == "") {
        setarErro(confsenha, "A confirmação de senha é obrigatória")
    } else if (confsenhaValor != senhaValor) {
        setarErro(confsenha, "As senhas são diferentes")
    } else {
        setarSucesso(confsenha);
    }
}

//Função de setar erro

function setarErro(input, mensagem) {
    const controlarForm = input.parentElement;
    const small = controlarForm.querySelector('small');

    small.innerText = mensagem;

    controlarForm.className = "controlar-form erro";
}

//Função de setar sucesso

function setarSucesso(input) {
    const controlarForm = input.parentElement;

    controlarForm.className = "controlar-form sucesso";
}

//Checar informações colocadas no e-mail

function checarEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}