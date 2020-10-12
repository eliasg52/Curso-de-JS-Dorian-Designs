/* 
Arrays - Métodos II

.from(iterable) - Convierte en array el elemento iterable

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(callback(currentValue, [index])) - ejecuta la función indicada una vez por cada elemento del array.

.some(callback) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/* FROM */
/* let palabra = 'Hola mundo';
console.log(Array.from(palabra));

console.log(palabra.split('')); //Para desglozar una palabra es mas utilizado este metodo */

/* SORT */
/* const letras = ['b', 'c', 'z', 'a'];
const numeros = [1, 8, 100, 300, 3];

console.log(letras.sort());
console.log(numeros.sort()); //Al realizar esto no los va a ordenar. Hay que pasarle un callback con un algoritmo que ordene de menor a mayor

console.log(numeros.sort((a, b) => a - b)); //Con esto comparamos todos los numeros y los ordenamos

//TODO ESTO ES LO QUE SE REALIZA ENTRE LOS PARENTESIS numeros.sort((a, b) => a - b)
function menorMayor(a, b) {
  if (a - b < 0) return -1;
  if (a - b > 0) return 1;
  if (a === b) return 0;
}

function mayorMenor(a, b) {
  if (b - a < 0) return -1;
  if (b - a > 0) return 1;
  if (a === b) return 0;
} */

/* FOREACH */
/* const numeros = [42, 23, 654, 7, 5];

numeros.forEach((numero) => console.log(numero)); //Recorre el array

numeros.forEach(
  (numero, index) => console.log(`${numero} esta en la posicion ${index}`) //Con el parametro index mostramos la posicion del indice
);
 */

/* SOME Y EVERY */
/* const palabras = ['HTML', 'CSS', 'JavaScript', 'PHP'];

console.log(palabras.some((palabra) => palabra.length > 10)); //Comprueba si alguno de los elementos del array tienen mas de 10 letras. Devuelve false si no es asi
console.log(palabras.every((palabra) => palabra.length > 2)); //Comprueba si todos lso elementos tienen mas de 2 letras. Devuelve true */

/* MAP */
/* const numeros = [42, 23, 654, 7, 5];
 
numeros.map((numero) => console.log(numero * 2));

//ESTO SERIA LO MISMO QUE HACER:
for (const numero of numeros) {
  console.log(numero * 2);
}

//SI QUISIERAMOS GUARDAR EL RESULTADO EN UN ARRAY NUEVO
let numeros2 = numeros.map((numero) => numero * 2);
console.log(numeros2); */

/* FILTER */
/* const numeros = [42, 23, 654, 7, 5];

const numeros2 = numeros.filter((numero) => numero > 40);

console.log(numeros2); */

/* REDUCE */
/* const numeros = [1, 2, 3, 4, 5];

console.log(numeros.reduce((a, b) => a + b)); */

//APLICACION MAS PRACTICA DE ESTE METODO

const usuarios = [
  {
    nombre: 'usuario1',
    online: true,
  },
  {
    nombre: 'usuario2',
    online: true,
  },
  {
    nombre: 'usuario3',
    online: false,
  },
  {
    nombre: 'usuario4',
    online: false,
  },
  {
    nombre: 'usuario5',
    online: false,
  },
  {
    nombre: 'usuario6',
    online: true,
  },
];

const usuariosOnline = usuarios.reduce((contador, usuario) => {
  if (usuario.online) contador++;
  return contador;
}, 0); //El 0 es el inicio del contador

console.log(`Hay ${usuariosOnline} usuarios conectados`);
