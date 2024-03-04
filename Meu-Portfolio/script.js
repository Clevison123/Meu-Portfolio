const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

// =======================================

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev2');
  const nextButton = document.querySelector('.next2');
  const portfolio = document.querySelector('.meu-portfolio');
  const images = document.querySelectorAll('.img-pessoal');

  let currentIndex = 0;

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  });
});


//==========================================================

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.prev3');
  const nextButton = document.querySelector('.next3');
  const portfolio = document.querySelector('.tra-portfolio');
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

