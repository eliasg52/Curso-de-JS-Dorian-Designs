const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = Number(prompt('Introduce el primer numero'));
let b = Number(prompt('Introduce el segundo numero'));
let c = Number(prompt('Introduce el tercer numero'));

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`;

if (a >= b && a >= c) {
  if (b >= c) {
    result.textContent = `El orden de los numeros es:${a}, ${b}, ${c}`;
  } else {
    result.textContent = `El orden de los numeros es:${a}, ${c}, ${b}`;
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    result.textContent = `El orden de los numeros es:${b}, ${a}, ${c}`;
  } else {
    result.textContent = `El orden de los numeros es:${b}, ${c}, ${a}`;
  }
} else if (c >= a && c >= b) {
  if (a >= b) {
    result.textContent = `El orden de los numeros es:${c}, ${a}, ${b}`;
  } else {
    result.textContent = `El orden de los numeros es:${c}, ${b}, ${a}`;
  }
}
