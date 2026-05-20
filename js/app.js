// LOADER

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  loader.classList.add('loader-hidden');

});

// MOBILE MENU

const menuBtn = document.getElementById('menuBtn');

const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {

  mobileMenu.classList.toggle('active');

});

// ACTIVE FILTER

const filters = document.querySelectorAll('.filter');

filters.forEach((filter) => {

  filter.addEventListener('click', () => {

    filters.forEach((btn) => {
      btn.classList.remove('active');
    });

    filter.classList.add('active');

  });

});