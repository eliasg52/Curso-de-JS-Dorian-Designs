/* Bucles */

/* 
    Determinados

    bucle for of / for in

    for(let variable of estructura){
        Código a ejecutar
    }

    Palabras reservadas de bucles

        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y después continúa su ejecución
*/

let names = ['Paco', 'José', 'Paula', 'María'];

for (let name of names) {
  console.log(name);
}

for (let index in names) {
  console.log(index);
}
