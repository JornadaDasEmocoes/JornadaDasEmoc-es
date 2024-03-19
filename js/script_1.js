document.addEventListener("DOMContentLoaded", function() {
  const blocosArrastaveis = document.querySelectorAll('.bloco-arrastavel');
  const blocosCena = document.querySelectorAll('.bloco-cena');
  const btnVoltar = document.querySelector('.btn-voltar');
  let pontuacao = 0;

  blocosArrastaveis.forEach(bloco => {
    bloco.addEventListener('click', encaixarBloco);
  });

  blocosCena.forEach(cena => {
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
