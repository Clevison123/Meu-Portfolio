window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});




//meu portfolio projects

document.addEventListener("DOMContentLoaded", function() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(function(item) {
    const imageWrapper = item.querySelectorAll(".image-wrapper");
    const prevButton = item.querySelector(".prev");
    const nextButton = item.querySelector(".next");
    let currentImageIndex = 0;

    function showImage(index) {
      imageWrapper.forEach(function(wrapper, i) {
        if (i === index) {
          wrapper.style.display = "block";
        } else {
          wrapper.style.display = "none";
        }
      });
    }

    function prevImage() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = imageWrapper.length - 1;
      }
      showImage(currentImageIndex);
    }

    function nextImage() {
      currentImageIndex++;
      if (currentImageIndex >= imageWrapper.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);

    showImage(currentImageIndex);
  });
});

//meu portfolio projects pessoais

// Selecionar os elementos relevantes
const portfolio = document.querySelector('.meu-portfolio');
const prevButton = document.querySelector('.prev2');
const nextButton = document.querySelector('.next2');

// Definir o deslocamento inicial do portfolio
let portfolioOffset = 0;

// Função para rolar para a esquerda
const scrollLeft = () => {
  if (portfolioOffset > 0) {
    portfolioOffset -= 370; // Ajuste de acordo com a largura do elemento .img-pessoal
    portfolio.style.transform = `translateX(${portfolioOffset}px)`;
  }
};

// Função para rolar para a direita
const scrollRight = () => {
  const containerWidth = portfolio.offsetWidth;
  const portfolioWidth = portfolio.scrollWidth;
  if (portfolioOffset < portfolioWidth - containerWidth) {
    portfolioOffset += 370; // Ajuste de acordo com a largura do elemento .img-pessoal
    portfolio.style.transform = `translateX(-${portfolioOffset}px)`;
  }
};

// Adicionar os ouvintes de eventos aos botões
prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);
