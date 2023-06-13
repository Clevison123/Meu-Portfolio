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
// Seleciona os elementos relevantes
const portfolioSection = document.getElementById("projetos-pessoais");
const portfolioContainer = portfolioSection.querySelector(".meu-portfolio");
const prevButton = portfolioSection.querySelector(".prev");
const nextButton = portfolioSection.querySelector(".next");

// Define a quantidade de imagens visíveis
const visibleImages = 4;

// Define o valor inicial do índice
let currentIndex = 0;

// Obtém a quantidade total de imagens
const totalImages = portfolioContainer.children.length;

// Define a largura do container para exibir apenas as imagens visíveis
portfolioContainer.style.width = `${300 * totalImages}px`;

// Função para atualizar a exibição das imagens
function updatePortfolio() {
  // Calcula o deslocamento horizontal do container
  const offset = currentIndex * -300;
  portfolioContainer.style.transform = `translateX(${offset}px)`;
}

// Função para verificar se há imagens ocultas à esquerda
function hasHiddenImagesLeft() {
  return currentIndex > 0;
}

// Função para verificar se há imagens ocultas à direita
function hasHiddenImagesRight() {
  return currentIndex < totalImages - visibleImages;
}

// Função para atualizar a visibilidade dos botões
function updateButtons() {
  prevButton.disabled = !hasHiddenImagesLeft();
  nextButton.disabled = !hasHiddenImagesRight();
}

// Função para mover para a imagem anterior
function moveToPrevious() {
  if (hasHiddenImagesLeft()) {
    currentIndex--;
    updatePortfolio();
    updateButtons();
  }
}

// Função para mover para a próxima imagem
function moveToNext() {
  if (hasHiddenImagesRight()) {
    currentIndex++;
    updatePortfolio();
    updateButtons();
  }
}

// Adiciona os eventos de clique aos botões
prevButton.addEventListener("click", moveToPrevious);
nextButton.addEventListener("click", moveToNext);

// Atualiza a visibilidade inicial dos botões
updateButtons();
