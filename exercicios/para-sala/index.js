let emailDigitado = prompt("Digite seu e-mail");
let senhaDigitada = prompt("Digite sua senha");

const emailCorreto = "teste@reprograma.com";
const senhaCorreta = "teste123";

if (emailDigitado ===   emailCorreto && senhaDigitada === senhaCorreta) {
    alert("Login realizado com sucesso");
} else {
    alert("Login inválido. Digite seus dados novamente")
}

while (emailDigitado !== emailCorreto || senhaDigitada !== senhaCorreta) {

}
