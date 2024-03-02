document.addEventListener("DOMContentLoaded", function() {
  const blocosArrastaveis = document.querySelectorAll('.bloco-arrastavel');
  const blocosCena = document.querySelectorAll('.bloco-cena');
  const btnVoltar = document.querySelector('.btn-voltar');
  let pontuacao = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  // Verifica se é um dispositivo móvel
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  blocosArrastaveis.forEach(bloco => {
    // Se for um dispositivo móvel, adiciona o evento de clique
    if (isMobile) {
      bloco.addEventListener('click', clickHandler);
    } else {
      // Senão, adiciona o evento de arrastar
      bloco.addEventListener('dragstart', dragStart);
    }
  });

  blocosCena.forEach(cena => {
    cena.addEventListener('dragover', dragOver);
    cena.addEventListener('drop', drop);
  });

  let blocoArrastado = null;

  function dragStart(e) {
    blocoArrastado = this;
    e.dataTransfer.setData('text/plain', ''); // Necessário para o funcionamento do evento de arrastar
    setTimeout(() => {
      this.style.opacity = '0.5';
    }, 0);
  }

  function clickHandler() {
    if (!blocoArrastado) {
      blocoArrastado = this;
    } else {
      const caixa = this;
      if (blocoArrastado.dataset.valor === caixa.dataset.valor) {
        if (caixa.children.length === 0) {
          caixa.appendChild(blocoArrastado);
          blocoArrastado.style.opacity = '1';
          blocoArrastado.draggable = false;
          blocoArrastado.style.position = 'relative'; // Adicionando esta linha
          blocoArrastado.style.left = '0px'; // Adicionando esta linha
          blocoArrastado.style.top = '0px'; // Adicionando esta linha
          blocoArrastado = null;
          pontuacao++;
          document.getElementById('pontuacao').textContent = pontuacao;
        } else {
          alert('Caixa já ocupada!');
        }
      } else {
        alert('Bloco não corresponde à caixa!');
      }
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop() {
    const caixa = this;
    if (blocoArrastado.dataset.valor === caixa.dataset.valor) {
      if (caixa.children.length === 0) {
        caixa.appendChild(blocoArrastado);
        blocoArrastado.style.opacity = '1';
        blocoArrastado.draggable = false;
        blocoArrastado.style.position = 'relative'; // Adicionando esta linha
        blocoArrastado.style.left = '0px'; // Adicionando esta linha
        blocoArrastado.style.top = '0px'; // Adicionando esta linha
        blocoArrastado = null;
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
