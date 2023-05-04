const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;

  // Validar que los campos no estén vacíos
  if (!username || !password) {
    alert('Ingresa tu usuario y contraseña');
    return;
  }

  // Simular proceso de inicio de sesión exitoso
  alert(`Bienvenido ${username}!`);
  event.target.reset();
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newUsername = event.target['new-username'].value;
  const newPassword = event.target['new-password'].value;
  const confirmPassword = event.target['confirm-password'].value;

  // Validar que los campos no estén vacíos
  if (!newUsername || !newPassword || !confirmPassword) {
    alert('Ingresa tu usuario y contraseña');
    return;
  }

  // Validar que las contraseñas coincidan
  if (newPassword !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  // Simular proceso de registro exitoso
  alert(`Bienvenido ${newUsername}!`);
  event.target.reset();
});