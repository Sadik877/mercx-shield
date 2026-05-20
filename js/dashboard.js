// LOADER

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  setTimeout(() => {

    loader.classList.add('loader-hidden');

  }, 1000);

});

// AUTH CHECK

async function checkUser(){

  const { data, error } = await supabase.auth.getUser();

  if(error || !data.user){

    window.location.href = 'login.html';
    return;

  }

  // SHOW USER NAME

  const userName = document.getElementById('userName');

  const email = data.user.email;

  if(userName){

    userName.innerText = email;

  }

}

checkUser();

// LOGOUT

async function logout(){

  await supabase.auth.signOut();

  window.location.href = 'login.html';

}

// ANIMATED COUNTERS

const counters = document.querySelectorAll('.stat-card h2');

counters.forEach(counter => {

  const updateCounter = () => {

    const targetText = counter.innerText;

    let target = parseInt(
      targetText.replace(/[^0-9]/g, '')
    );

    if(isNaN(target)) return;

    let count = 0;

    const increment = target / 40;

    const interval = setInterval(() => {

      count += increment;

      if(count >= target){

        count = target;

        clearInterval(interval);

      }

      // FORMAT DISPLAY

      if(targetText.includes('₦')){

        counter.innerText =
          '₦' + Math.floor(count).toLocaleString();

      } else if(targetText.includes('.')){

        counter.innerText =
          (count / 10).toFixed(1);

      } else {

        counter.innerText =
          Math.floor(count);

      }

    }, 25);

  };

  updateCounter();

});

// ACTIVE SIDEBAR LINK

const links = document.querySelectorAll(
  '.sidebar-links a'
);

links.forEach(link => {

  link.addEventListener('click', () => {

    links.forEach(l => {

      l.classList.remove('active');

    });

    link.classList.add('active');

  });

});

// CARD HOVER EFFECT

const cards = document.querySelectorAll(
  '.stat-card, .dashboard-card'
);

cards.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(124,58,237,0.15),
        rgba(16,21,40,1)
      )
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.background = '';

  });

});