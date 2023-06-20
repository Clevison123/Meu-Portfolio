const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

btn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});
