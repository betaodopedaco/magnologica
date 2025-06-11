document.addEventListener('DOMContentLoaded', function () {
  // Texto da seção 4
  const textoAnimado = "Precisão. Imersão. Autoridade.";
  const titulo = document.getElementById('animated-title');
  let index = 0;

  function escreverTexto() {
    if (index < textoAnimado.length) {
      titulo.innerHTML += textoAnimado.charAt(index);
      index++;
      setTimeout(escreverTexto, 100);
    }
  }

  escreverTexto();

  // Transição entre os textos da seção 5
  const content1 = document.getElementById('firstTakeContent');
  const content2 = document.getElementById('secondTakeContent');
  const transitionOverlay = document.getElementById('transitionOverlay5');

  setTimeout(() => {
    transitionOverlay.style.opacity = '1';
    setTimeout(() => {
      content1.style.display = 'none';
      content2.style.display = 'block';
      transitionOverlay.style.opacity = '0';
    }, 1500);
  }, 9000);

  // Animação de scroll na seção 5
  const scrollSpans = document.querySelectorAll('.scrolldown-5 span');
  scrollSpans.forEach((span, i) => {
    span.style.animationDelay = `${i * 0.2}s`;
  });
});
