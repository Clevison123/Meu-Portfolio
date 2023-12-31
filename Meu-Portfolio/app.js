window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
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


// meus trabalhos

const btnPrev3 = document.querySelector(".prev3");
const btnNext3 = document.querySelector(".next3");
const portfolio3 = document.querySelector(".tra-portfolio");
const divs3 = portfolio3.querySelectorAll(".img-tra");
const divWidth3 = divs3[0].offsetWidth;
const divsPerView3 = 3;
const totalDivs3 = divs3.length;
let currentPosition3 = 0;

btnNext3.addEventListener("click", () => {
  if (currentPosition3 < totalDivs3 - divsPerView3) {
    currentPosition3++;
    portfolio3.style.transform = `translateX(-${currentPosition3 * divWidth3}px)`;
  }
});

btnPrev3.addEventListener("click", () => {
  if (currentPosition3 > 0) {
    currentPosition3--;
    portfolio3.style.transform = `translateX(-${currentPosition3 * divWidth3}px)`;
  }
});

