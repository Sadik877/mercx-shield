// REGISTER

const registerForm = document.querySelector('#registerForm');

if(registerForm){

  registerForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const fullname = document.querySelector('#fullname').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const role = document.querySelector('#role').value;
    const password = document.querySelector('#password').value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if(error){
      alert(error.message);
      return;
    }

    const user = data.user;

    const { error: insertError } = await supabase
      .from('users')
      .insert([
        {
          id: user.id,
          fullname,
          email,
          phone,
          role
        }
      ]);

    if(insertError){
      alert(insertError.message);
      return;
    }

    alert('Account created successfully');

    window.location.href = 'login.html';

  });

}


// LOGIN

const loginForm = document.querySelector('#loginForm');

if(loginForm){

  loginForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if(error){
      alert(error.message);
      return;
    }

    const userId = data.user.id;

    const { data: profile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if(profileError){
      alert(profileError.message);
      return;
    }

    if(profile.role === 'driver'){

      window.location.href = 'driver-dashboard.html';

    } else {

      window.location.href = 'client-dashboard.html';

    }

  });

}


// LOGOUT

async function logout(){

  await supabase.auth.signOut();

  window.location.href = '../index.html';

}
