/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/* //GETELEMENTBYID
const $titulo = document.getElementById('title');

console.log($titulo);

$titulo.textContent = 'Titulo modificado por JS de forma Dinamica';
 */

//QUERYSELECTOR

/* const $parrafo = document.querySelector('.paragraph');

console.log($parrafo); */

//PARA ACCEDER A UN ELEMENTO QUE ESTA DENTRO DE OTRO ELEMENTO

/* const $parrafo = document.querySelector('.paragraph');

const $span = $parrafo.querySelector('span'); //No hace falta poner el . ya que nos estamos refiriendo a un elemento.

console.log($span.textContent); */

//QUERYSELECTORALL

/* const $parrafos = document.querySelectorAll('.paragraph');

$parrafos[0].style.color = 'red'; */

//**PASAR UN NODELIST A ARRAY**
/* //CON SPREAD OPERATOR
const $parrafosSpread = [...document.querySelectorAll('.paragraph')];

$parrafosSpread.map((p) => (p.style.color = 'violet')); //PONE EL COLOR DE TODOS LOS PARRAFOS EN VIOLETA

//CON ARRAY FROM
const $parrafosArray = Array.from(document.querySelectorAll('.paragraph'));

$parrafosArray.map((p) => (p.style.color = 'yellow')); //PONE EL COLOR DE TODOS LOS PARRAFOS EN AMARILLO */

const $titulo = document.getElementById('title');

console.log($titulo);

const $parrafos = document.querySelectorAll('.paragraph');

console.log($parrafos);

$parrafos[0].style.color = 'red';

const $parrafoSpred = [...document.querySelectorAll('.paragraph')];
const $parrafoArray = Array.from(document.querySelectorAll('.paragraph'));

/* $parrafos.map((p) => (p.style.color = 'green')); */
/* $parrafoSpred.map((p) => (p.style.color = 'aqua')); */

$parrafoArray.map((p) => (p.style.color = 'green'));
