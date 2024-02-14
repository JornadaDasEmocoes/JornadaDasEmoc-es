function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  if (event.type === "touchstart") {
    var touch = event.touches[0];
    event.dataTransfer.setData("text", touch.target.id);
  } else {
    event.dataTransfer.setData("text", event.target.id);
  }
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var draggableElement = document.getElementById(data);
  var dropzone = event.target;

  // Remove o elemento se já houver um dentro da área de soltar
  if (dropzone.hasChildNodes()) {
    dropzone.removeChild(dropzone.firstChild);
  }

  // Adiciona o elemento arrastado na área de soltar
  dropzone.appendChild(draggableElement);
}


function iniciarJogo() {
  window.location.href = "fases.html"; // Redireciona para a página do jogo
}

function Voltar() {
  window.location.href = "intex.html";
}

