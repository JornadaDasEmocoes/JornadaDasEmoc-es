document.addEventListener("DOMContentLoaded", function() {
  const blocosArrastaveis = document.querySelectorAll('.bloco-arrastavel');
  const blocosCena1 = document.querySelectorAll('.bloco-cena1');
  const blocosCena2 = document.querySelectorAll('.bloco-cena2');
  const blocosCena3 = document.querySelectorAll('.bloco-cena3');
  const blocosCena4 = document.querySelectorAll('.bloco-cena4');
  const btnVoltar = document.querySelector('.btn-voltar');
  let pontuacao = 0;

  blocosArrastaveis.forEach(bloco => {
    bloco.addEventListener('click', encaixarBloco);
  });

  blocosCena1.forEach(cena => {
    cena.addEventListener('click', verificarEncaixe);
  });

  blocosCena2.forEach(cena => {
    cena.addEventListener('click', verificarEncaixe);
  });

  blocosCena3.forEach(cena => {
    cena.addEventListener('click', verificarEncaixe);
  });

  blocosCena4.forEach(cena => {
    cena.addEventListener('click', verificarEncaixe);
  });

  function encaixarBloco() {
    const blocoSelecionado = this;
    blocoSelecionado.classList.add('encaixado');
  }

  function verificarEncaixe() {
    const caixaSelecionada = this;
    const blocoEncaixado = document.querySelector('.bloco-arrastavel.encaixado');
    if (blocoEncaixado && caixaSelecionada.dataset.valor === blocoEncaixado.dataset.valor) {
      if (caixaSelecionada.children.length === 0) {
        caixaSelecionada.appendChild(blocoEncaixado);
        blocoEncaixado.classList.remove('encaixado');
        pontuacao++;
        document.getElementById('pontuacao').textContent = pontuacao;
      } else {
        alert('Caixa já ocupada!');
      }
    } else {
      alert('Bloco não corresponde à caixa!');
    }
  }

  btnVoltar.addEventListener('click', function() {
    window.location.href = "fases.html";
  });
});
