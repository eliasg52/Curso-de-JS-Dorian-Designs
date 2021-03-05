/*
Spread Operator (operador de expansión)

Su sintaxis es ...

*/

/* console.log(...numbers) */

//Enviar elementos en un array a una función

const sumarNumeros = (a, b, c) => {
  console.log(a + b + c);
};

sumarNumeros(3, 4, 5);

let numerosParaSumar = [3, 4, 6];
//b y c van a ser undefined. ya que A seria el 3,4 y 5
sumarNumeros(numerosParaSumar);

sumarNumeros(...numerosParaSumar);

/* const sumarNumeros = (a, b, c, d) => {
  console.log(a + b + c + d);
};

let numerosParaSumar = [1, 2, 3, 4, 5];

sumarNumeros(...numerosParaSumar); //CON LOS ... LE PODEMOS PASAR EL ARRAY COMO PARAMETRO A LA FUNCION sumerNumeros y solo suma los numeros pasados como parametros en la funcion creada
 */

//Añadir un array a otro array
let usuarios = ['pepe', 'julieta', 'colo', 'rosa', 'julian'];

let nuevosUsuarios = ['marta', 'jaime', 'laura'];

//ESTA SERIA LA MANERA MAS 'ENGORROSA' DE AGREGAR LOS NUEVOS USUARIOS AL ARRAY USUARIOS
usuarios.push(nuevosUsuarios[0], nuevosUsuarios[1], nuevosUsuarios[2]);
console.log(usuarios);

//LA MANERA MAS FACIL CON EL SPREAD OPERATOR ES ASI:
usuarios.push(...nuevosUsuarios);
console.log(usuarios);

//Copiar arrays

/* let array1 = [1, 2, 3, 4];
let array2 = [...array1];

console.log(array2); */

//Concatenar arrays

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8];

//FORMA DE CONCATENAR CON CONCAT
/* let arrayConcatenado = array1.concat(array2);
console.log(arrayConcatenado); */
//FORMA DE CONCATENAR CON SPREAD OPERATOR
let arrayConcatenado = [...array1, ...array2];

console.log(arrayConcatenado);

// Enviar un número indefinido de argumentos a una función (parámetros REST)

const parametrosRest = (...numeros) => {
  console.log(numeros);
};

parametrosRest(1, 2, 3, 4, 5, 6);

//librería math
/* 
const numeros = [-1, 1, 2, 3, 4, 5, 6, 7, 2, 4, 5];

console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

//Eliminar elementos duplicados
console.log(new Set(numeros));

//Nuevo array con elementos sin repetir
const sinRepetir = [...new Set(numeros)];
console.log(sinRepetir);
 */

let numeros = [23, 43, 2, 67, 4];

console.log(...numeros);
