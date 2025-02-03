//========================================
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

// =======================================

// Mobile responsividade
window.addEventListener('DOMContentLoaded', () => {
  const portfolio = document.querySelector('.meu-portfolio');
  const images = portfolio.querySelectorAll('.img-pessoal');
  const gapSize = 2 * parseInt(window.getComputedStyle(portfolio).gap);

  // Calcula a largura total do portfolio com base no número de imagens e no espaçamento entre elas
  const totalWidth = (images.length * images[0].offsetWidth) + ((images.length - 1) * gapSize);

  // Define a largura do portfolio
  portfolio.style.width = totalWidth + 'px';
});


//==========================================================

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev3');
  const nextButton = document.querySelector('.next3');
  const portfolio = document.querySelector('.portfolio-trabalho'); // Corrigido o seletor aqui
  const images = document.querySelectorAll('.img-tra');

  let currentIndex = 0;

  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  });

  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  });
});

