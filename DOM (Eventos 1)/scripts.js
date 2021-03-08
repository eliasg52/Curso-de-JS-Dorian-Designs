/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón

Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const boton = document.querySelector('#boton');
const caja = document.querySelector('#box');
const input = document.querySelector('#input');

function saludar() {
  console.log('hola forro');
}

boton.addEventListener('', () => {
  console.log('asd');
});

caja.addEventListener('mouseenter', () => {
  caja.style.background = 'blue';
});

input.addEventListener('keydown', () => {
  console.log('asd');
});

input.addEventListener('keyup', () => {
  console.log('qwe');
});
/* const $boton = document.getElementById('boton');
const $caja = document.getElementById('box');
const $input = document.getElementById('input'); */

/* $boton.addEventListener('click', () => {
  console.log('click');
}); */

/* $boton.addEventListener('dblclick', () => {
  console.log('doble click');
});
 */

/* $caja.addEventListener('mouseenter', () => {
  $caja.classList.replace('red', 'blue');
});

$caja.addEventListener('mouseleave', () => {
  $caja.classList.replace('blue', 'red');
});
 */

/* $caja.addEventListener('mousedown', () => {
  console.log('pulsaste aca');
});

$caja.addEventListener('mouseup', () => {
  console.log('soltaste aca');
});

$caja.addEventListener('mousemove', () => {
  console.log('estas moviendo el mouse en la caja');
});

$input.addEventListener('keydown', () => {
  console.log('presionaste una tecla');
});

$input.addEventListener('keyup', () => {
  console.log('soltaste una tecla');
});

$input.addEventListener('keypress', () => {
  console.log('presionaste y soltaste una tecla');
}); */
