// LOADER

window.addEventListener('load', () => {

  const loader = document.getElementById('loader');

  if(loader){

    loader.classList.add('loader-hidden');

  }

});

// LOGIN

const loginForm = document.getElementById('loginForm');

if(loginForm){

  loginForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = document.getElementById('loginEmail').value;

    const password = document.getElementById('loginPassword').value;

    const button = document.querySelector('.auth-btn');

    button.innerHTML = 'Logging in...';

    button.disabled = true;

    try{

      const { data, error } = await supabase.auth.signInWithPassword({

        email,
        password

      });

      if(error){

        alert(error.message);

        button.innerHTML = 'Login Now';

        button.disabled = false;

        return;

      }

      // GET USER PROFILE

      const userId = data.user.id;

      const { data: profile, error: profileError } = await supabase

        .from('users')

        .select('*')

        .eq('id', userId)

        .single();

      if(profileError){

        alert(profileError.message);

        button.innerHTML = 'Login Now';

        button.disabled = false;

        return;

      }

      // SAVE USER

      localStorage.setItem(

        'mercx_user',

        JSON.stringify(profile)

      );

      // REDIRECT

      window.location.href = 'dashboard.html';

    } catch(err){

      alert('Something went wrong.');

      console.log(err);

      button.innerHTML = 'Login Now';

      button.disabled = false;

    }

  });

}

// REGISTER

const registerForm = document.getElementById('registerForm');

if(registerForm){

  registerForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const fullname = document.getElementById('fullname').value;

    const email = document.getElementById('email').value;

    const phone = document.getElementById('phone').value;

    const role = document.getElementById('role').value;

    const password = document.getElementById('password').value;

    const button = document.querySelector('.auth-btn');

    button.innerHTML = 'Creating Account...';

    button.disabled = true;

    try{

      // CREATE USER

      const { data, error } = await supabase.auth.signUp({

        email,
        password

      });

      if(error){

        alert(error.message);

        button.innerHTML = 'Create Account';

        button.disabled = false;

        return;

      }

      // INSERT PROFILE

      const { error: insertError } = await supabase

        .from('users')

        .insert([

          {

            id:data.user.id,
            fullname,
            email,
            phone,
            role

          }

        ]);

      if(insertError){

        alert(insertError.message);

        button.innerHTML = 'Create Account';

        button.disabled = false;

        return;

      }

      alert('Account created successfully');

      window.location.href = 'login.html';

    } catch(err){

      console.log(err);

      alert('Registration failed');

      button.innerHTML = 'Create Account';

      button.disabled = false;

    }

  });

}

// LOGOUT

async function logout(){

  await supabase.auth.signOut();

  localStorage.removeItem('mercx_user');

  window.location.href = 'login.html';

}