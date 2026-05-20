const loader =
document.getElementById('loader');

window.addEventListener('load', () => {

setTimeout(() => {

loader.style.opacity = '0';

loader.style.visibility = 'hidden';

}, 1500);

});

/* NAV SHADOW */

window.addEventListener('scroll', () => {

const nav =
document.querySelector('nav');

if(window.scrollY > 50){

nav.style.boxShadow =
'0 10px 40px rgba(0,0,0,.35)';

}else{

nav.style.boxShadow = 'none';

}

});
/* MOBILE MENU */

const menuToggle =
document.getElementById('menuToggle');

const navLinks =
document.getElementById('navLinks');

if(menuToggle){

menuToggle.addEventListener('click', () => {

navLinks.classList.toggle('active');

});

}