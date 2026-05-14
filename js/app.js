window.addEventListener('scroll', () => {

  const nav = document.querySelector('nav');

  if(window.scrollY > 50){
    nav.style.boxShadow = '0 10px 40px rgba(0,0,0,0.25)';
  } else {
    nav.style.boxShadow = 'none';
  }

});
