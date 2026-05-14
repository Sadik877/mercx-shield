function togglePassword() {

  const password = document.getElementById("password");

  if(password.type === "password"){
    password.type = "text";
  } else {
    password.type = "password";
  }

}

function toggleRegisterPassword() {

  const password = document.getElementById("registerPassword");

  if(password.type === "password"){
    password.type = "text";
  } else {
    password.type = "password";
  }

}
