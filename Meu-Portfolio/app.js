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

document.addEventListener('DOMContentLoaded', function() {
  const portfolio = document.querySelector('.meu-portfolio');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const images = Array.from(portfolio.querySelectorAll('.img-pessoal'));

  const visibleImages = 4;
  const hiddenImages = images.length - visibleImages;
  let currentOffset = 0;

  function updateButtonVisibility() {
    prevButton.style.display = currentOffset === 0 ? 'none' : 'block';
    nextButton.style.display = currentOffset >= hiddenImages ? 'none' : 'block';
  }

  function updatePortfolioOffset() {
    portfolio.style.transform = `translateX(-${currentOffset * 320}px)`;
  }

  function showVisibleImages() {
    images.forEach(function(image, index) {
      if (index >= currentOffset && index < currentOffset + visibleImages) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  function handlePrevButtonClick() {
    if (currentOffset > 0) {
      currentOffset--;
      updatePortfolioOffset();
      updateButtonVisibility();
      showVisibleImages();
    }
  }

  function handleNextButtonClick() {
    if (currentOffset < hiddenImages) {
      currentOffset++;
      updatePortfolioOffset();
      updateButtonVisibility();
      showVisibleImages();
    }
  }

  prevButton.addEventListener('click', handlePrevButtonClick);
  nextButton.addEventListener('click', handleNextButtonClick);

  showVisibleImages();
  updateButtonVisibility();
});
