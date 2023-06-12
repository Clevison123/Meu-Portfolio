document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    const toggleButton = document.querySelector('.toggle-button');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
  
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
  
    // Função para rolar até a seção correspondente
    function scrollToSection(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  
    // Adiciona um listener de evento para cada link do menu
    navLinks.forEach(function(link) {
      link.addEventListener('click', scrollToSection);
    });
  });
  