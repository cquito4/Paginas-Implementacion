const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const celular = document.getElementById('celular').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar que los campos del formulario no estén vacíos
  if (nombre.trim() === '' || correo.trim() === '' || celular.trim() === '' || mensaje.trim() === '') {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  // Enviar el formulario y mostrar un mensaje de confirmación
  alert('Mensaje enviado');
  formulario.reset();
});