const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');

const closeMenuBtn = document.querySelector('.js-close-menu');

openMenuBtn.addEventListener('click', onOpenMenu);
closeMenuBtn.addEventListener('click', onCloseMenu);

function onOpenMenu() {
openMenuBtn.setAttribute('aria-expanded', true);
mobileMenu.classList.add('is-open');
document.body.classList.add('body-lock');
}

function onCloseMenu() {
openMenuBtn.setAttribute('aria-expanded', false);
mobileMenu.classList.remove('is-open');
document.body.classList.remove('body-lock');
}

window.matchMedia('(min-width: 1024px)').addEventListener('change', e => {
if (!e.matches) {
  return;
}

if (!mobileMenu.classList.contains('is-open')) {
  return;
}

  mobileMenu.classList.remove('is-open');
openMenuBtn.setAttribute('aria-expanded', false);
document.body.classList.remove('body-lock');
});