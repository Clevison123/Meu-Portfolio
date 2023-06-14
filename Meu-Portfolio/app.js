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

const btnPrev = document.querySelector(".prev2");
const btnNext = document.querySelector(".next2");
const portfolio = document.querySelector(".meu-portfolio");
const divs = portfolio.querySelectorAll(".img-pessoal");
const divWidth = divs[0].offsetWidth;
const divsPerView = 3;
const totalDivs = divs.length;
let currentPosition = 0;

btnNext.addEventListener("click", () => {
  if (currentPosition < totalDivs - divsPerView) {
    currentPosition++;
    portfolio.style.transform = `translateX(-${currentPosition * divWidth}px)`;
  }
});

btnPrev.addEventListener("click", () => {
  if (currentPosition > 0) {
    currentPosition--;
    portfolio.style.transform = `translateX(-${currentPosition * divWidth}px)`;
  }
});

