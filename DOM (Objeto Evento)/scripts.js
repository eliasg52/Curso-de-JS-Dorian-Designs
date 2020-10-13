const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $boton = document.getElementById('button');

$input.addEventListener('keyup', (e) => {
  console.log(e);
});

$boton.addEventListener('click', (e) => {
  console.dir(e.target);
});
