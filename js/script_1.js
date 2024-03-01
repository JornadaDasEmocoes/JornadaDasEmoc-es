document.addEventListener("DOMContentLoaded", function() {
  const blocosArrastaveis = document.querySelectorAll('.bloco-arrastavel');
  const blocosCena = document.querySelectorAll('.bloco-cena');
  const btnVoltar = document.querySelector('.btn-voltar');
  let pontuacao = 0;
  let touchOffsetX = 0;
  let touchOffsetY = 0;

  blocosArrastaveis.forEach(bloco => {
    bloco.addEventListener('dragstart', dragStart);
    bloco.addEventListener('touchstart', touchStart);
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

  function touchStart(e) {
    blocoArrastado = this;
    let touch = e.touches[0];
    let rect = blocoArrastado.getBoundingClientRect();
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;
    e.preventDefault(); // Impede o comportamento padrão do evento de toque
    setTimeout(() => {
      this.style.opacity = '0.5';
    }, 0);
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

  function touchMove(e) {
    let touch = e.touches[0];
    let posX = touch.clientX - touchOffsetX;
    let posY = touch.clientY - touchOffsetY;
    blocoArrastado.style.left = posX + 'px';
    blocoArrastado.style.top = posY + 'px';
  }

  function touchEnd() {
    blocoArrastado.style.opacity = '1';
    blocoArrastado = null;
  }

  blocosArrastaveis.forEach(bloco => {
    bloco.addEventListener('touchmove', touchMove);
    bloco.addEventListener('touchend', touchEnd);
  });

  btnVoltar.addEventListener('click', function() {
    window.location.href = "fases.html";
  });
});
