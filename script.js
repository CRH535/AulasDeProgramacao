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
