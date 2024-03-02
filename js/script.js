const botaoIniciar = document.querySelector('#botao-iniciar');
botaoIniciar.addEventListener('click', iniciarJogo);
botaoIniciar.addEventListener('touchstart', iniciarJogo);

const botaoVoltar = document.querySelector('#botao-voltar');
botaoVoltar = addEventListener('click', Voltar);
botaoVoltar = addEventListener('touchstart', Voltar);

function iniciarJogo() {
  window.location.href = "fases.html"; // Redireciona para a página do jogo
}

function Voltar() {
  window.location.href = "index.html";
}

function fase1() {
  window.location.href = "fase1.html";
}