document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeButton = document.getElementById('closeButton');

  hamburger.addEventListener('click', function() {
      sidebar.classList.toggle('active');
  });

  closeButton.addEventListener('click', function() {
      sidebar.classList.remove('active');
  });
});

//========================================
const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

// =======================================

// Mobile responsividade
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const content = document.getElementById('content');
const items = document.getElementsByClassName('portfolio-item');

let currentItem = 0;
const totalItems = items.length;
let itemsPerView = 4;
const autoInterval = 3000;
let autoMode = true;

const showCurrentItems = () => {
  for (let i = 0; i < totalItems; i++) {
    items[i].style.display = 'none';
  }

  for (let i = currentItem; i < currentItem + itemsPerView; i++) {
    const index = i % totalItems;
    items[index].style.display = 'block';
  }
};

const nextItem = () => {
  currentItem++;
  if (currentItem >= totalItems) {
    currentItem = 0;
  }
  showCurrentItems();
};

const checkWindowSize = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 600) {
    itemsPerView = 1;
  } else if (windowWidth >= 601 && windowWidth <= 768) {
    itemsPerView = 2;
  } else if (windowWidth >= 769 && windowWidth <= 992) {
    itemsPerView = 3;
  } else if (windowWidth >= 993 && windowWidth <= 1199) {
    itemsPerView = 3;
  }  else {
    itemsPerView = 4;
  }
};

prevButton.addEventListener('click', () => {
  autoMode = false;
  currentItem--;
  if (currentItem < 0) {
    currentItem = totalItems - 1;
  }
  showCurrentItems();
});

nextButton.addEventListener('click', () => {
  autoMode = false;
  nextItem();
});

for (let i = 0; i < totalItems; i++) {
  items[i].addEventListener('mouseover', () => {
    autoMode = false;
  });

  items[i].addEventListener('mouseout', () => {
    autoMode = true;
  });
}

window.addEventListener('resize', () => {
  checkWindowSize();
  showCurrentItems();
});

checkWindowSize();
showCurrentItems();
items[currentItem].classList.add('active');

setInterval(() => {
  if (autoMode) {
    nextItem();
  }
}, autoInterval);



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

