// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

/* const nombre = prompt('Cual es tu nombre?');
const edad = Number(prompt('Cual es tu edad?'));

console.log(
  `Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${
    edad + 1
  } años`
); */

// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)

/* let preguntaCalculo = parseInt(
  prompt(`Que figura deseas calcular:1-Triangulo  2-Rectangulo 3-Circulo`)
);

switch (preguntaCalculo) {
  case 1:
    let base = prompt('Introduce la base del triangulo');
    let altura = prompt('asd');
    let calcularTriangulo = (base * altura) / 2;
    alert(`El area del triangulo es ${calcularTriangulo}`);
    break;

  case 2:
    let base2 = prompt('Introduce la base del rectangulo');
    let altura2 = prompt('asd');
    let calcularRectangulo = base2 * altura2;
    alert(`El area del rectangulo es ${calcularRectangulo}`);
    break;

  case 3:
    let PI = Math.PI;
    console.log(PI);
    let radio = parseInt(prompt('Introduce el radio del circulo'));
    let calcularCirculo = PI * Math.pow(radio, 2);
    alert(`El area del circulo es ${calcularCirculo}`);
    break;

  default:
    alert('Introduce un numero valido(1,2,3)');
    break;
}
 */
// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad

// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

// !5 = 5*4*3*2*1 = 120

/* let number = parseInt(prompt('Introduce un numero mayor a 0'));
let result = 1;

while (number === 0 || !number) {
  alert('Introduzca un numero mayor a 0');
  number = parseInt(prompt('Introduce un numero mayor a 0'));
}

for (i = number; i > 1; i--) {
  result *= i;
}

console.log(`El factorial de ${number} es ${result} `); */

// 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

/* let suma = 0;
let contador = 0;

while (suma < 50) {
  suma += parseInt(prompt('Introduce un numero'));
  contador++;
}

console.log(`El numero total es ${suma} y se sumaron ${contador} numeros`); */

// 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e

/* let numeros = [3, 5, 9, 2, 12];
let pares = [];
let impares = [];
let resultado;
// let aleatorio = Math.round(Math.random() * (10 - 1) + 1);

for (i = 0; i < 5; i++) {
  let aleatorio = Math.round(Math.random() * (10 - 1) + 1);
  resultado = numeros[i] * aleatorio;
  if (resultado % 2 === 0) {
    pares.unshift(resultado);
  } else impares.unshift(resultado);
  console.log(`${numeros[i]} X ${aleatorio} = ${resultado}`);
}

console.log(`Numeros pares: ${pares}`);
console.log(`Numeros impares: ${impares}`); */

// 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

// const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

/* const letras = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
  'T',
];

const DNI = prompt('Introduce tu DNI');

if (DNI.length == 8 && parseInt(DNI) > 0) {
  let letra = DNI % 23;
  console.log(`Tu numero de DNI es ${DNI} y la letra es ${letras[letra]}`);
} else {
  console.log('Introduce un numero valido');
} */
// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

/* const palabra = prompt('Introduce una palabra').toLowerCase();

let vocales = 0;
let consonantes = 0;

for (const letra of palabra) {
  if (
    letra === 'a' ||
    letra === 'e' ||
    letra === 'i' ||
    letra === 'o' ||
    letra === 'u'
  ) {
    vocales++;
  } else {
    consonantes++;
  }
}

console.log(
  `La palabra ingresada tiene ${vocales} vocales, ${consonantes} consonantes y tiene ${palabra.length} letras`
); */

// 10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const color = prompt('Introduce un color').toLowerCase();
const colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];

/* if (colores.indexOf(color) !== -1) {
  console.log('Tu color esta en el array');  //FORMA 1
} else {
  console.log('Tu color no esta en el array');
} */

if (colores.includes(color)) {
  console.log('Tu color esta en el array'); //FORMA 2
} else {
  console.log('El color no esta en el array');
}
