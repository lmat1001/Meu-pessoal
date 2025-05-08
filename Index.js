function mostrarFormulario() {
  document.getElementById("formulario").style.display = "block";
  document.getElementById("botoes").style.display = "none";
}

function respostaNao() {
  alert("Erro: a opção 'não sair comigo' não existe.");
  document.getElementById("botoes").style.display = "none";
}