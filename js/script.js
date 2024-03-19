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
  window.location.href = "intex.html";
}

function fase1() {
  window.location.href = "fase1.html";
}

function fase2() {
  window.location.href = "fase2.html";
}

function fase3() {
  window.location.href = "fase3.html";
}

function fase4() {
  window.location.href = "fase4.html";
}

function fase5() {
  window.location.href = "fase5.html";
}

function fase6() {
  window.location.href = "fase6.html";
}