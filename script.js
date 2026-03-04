//#region

/* aulas do petronio */

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma = soma + i;
}
/*alert("A soma dos números de 1 a 10 é: " + soma);*/

/*programa que conta apenas os numeros pares de 1 a 20*/
let pares = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    pares = pares + i;
  }
}
/*alert("soma dos numeros pares de 1 ate 20:" + pares);*/

//#endregion

//#region
//aula do wilgner

// Função para validar o login
// Teste git
function submitLogin() {
  const username = document.getElementById("nameInput").value;
  const password = document.getElementById("senhaInput").value;
  if (username === "admin" && password === "1234") {
    alert("Login bem-sucedido!");
    window.location.href = "pagina2.html";
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}
//#endregion
