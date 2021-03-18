const form = document.getElementById('form');
const button = document.getElementById('submitButton');

const nombre = document.getElementById('name');
const email = document.getElementById('email');
const genero = document.getElementById('gender');
const terminos = document.getElementById('terms');

const formularioEsValido = {
  nombre: false,
  email: false,
  genero: false,
  terminos: false,
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarFormulario();
});

nombre.addEventListener('change', (e) => {
  if (e.target.value.trim().length > 0) formularioEsValido.nombre = true;
});

email.addEventListener('change', (e) => {
  if (e.target.value.trim().length > 0) formularioEsValido.email = true;
});

genero.addEventListener('change', (e) => {
  if (e.target.checked == true) formularioEsValido.genero = true;
});

terminos.addEventListener('change', (e) => {
  formularioEsValido.terminos = e.target.checked;
  e.target.checked
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', true);
});

const validarFormulario = () => {
  const valoresFormulario = Object.values(formularioEsValido);
  const valido = valoresFormulario.findIndex((valor) => valor == false);
  if (valido == -1) form.submit();
  else alert('Formulario invalido');
};
