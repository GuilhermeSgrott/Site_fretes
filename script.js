// Seleciona o botão e o menu
const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Quando o botão for clicado, alterna a classe 'active' no menu
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});
