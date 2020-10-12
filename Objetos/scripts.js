/* const persona = {
  nombre: 'Juan',
  edad: 26,
  hijos: ['elias', 'joaquin'],
};

console.log(persona.nombre);
console.log(persona['nombre']);

for (const key in persona) {
  //IMPRIME LAS CLAVES (KEYS)
  console.log(key);
}

for (const key in persona) {
  //IMPRIME LOS VALUES (VALORES)
  console.log(persona[key]);
} */

const persona = {
  nombre: 'Juan',
  edad: 26,
  hijos: ['elias', 'joaquin', 'pepe', 'diego', 'maria'],
};

for (const hijo of persona.hijos) {
  console.log(hijo); //FORMA DE MOSTAR LOS VALORES EN UN ARRAY DENTRO DE UN OBJETO
}

console.log(
  `Hola ${persona.nombre}. Tienes ${
    persona.edad
  } años de edad y tus hijos se llaman ${persona.hijos.join(', ')}`
);
