const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $button = document.getElementById('button');
const $link = document.getElementById('link');

/* $input.addEventListener('keyup', (event) => {
  console.log(event);
});

$button.addEventListener('click', (e) => {
  console.dir(e.target);
}); */

/* //FORMA DE AGREGAR EVENTOS A UN ELEMENTO CON MUCHOS HIJOS
const gallery = document.getElementById('gallery');

gallery.addEventListener('click', (e) => {
  console.log(e.target);
}); */

$form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Formulario Enviado');
});

//EVITAR QUE FUNCIONE EL LINK
$link.addEventListener('click', (e) => {
  e.preventDefault();
});
