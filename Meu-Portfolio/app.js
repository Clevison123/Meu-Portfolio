// Seletor de elementos
const body = document.querySelector('body');
const toggleButton = document.querySelector('.toggle-button');

// Função para alternar entre os temas
function toggleTheme() {
  // Remove as classes de tema existentes
  body.classList.remove('default-theme', 'dark-theme', 'light-theme');

  // Adiciona a classe do tema selecionado
  if (body.classList.contains('default-theme')) {
    body.classList.remove('default-theme');
    body.classList.add('light-theme');
  } else if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('default-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
}

// Adiciona um listener de evento ao botão de tema
toggleButton.addEventListener('click', toggleTheme);
