const burger = document.querySelector('#burger-btn');
const nav = document.querySelector('#nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active-list');
});

document.querySelectorAll('.menu').forEach(btn => {
  btn.addEventListener('click', e => {
      btn.classList.toggle('active');
  });
});