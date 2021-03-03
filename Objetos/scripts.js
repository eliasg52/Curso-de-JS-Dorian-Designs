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

/* const persona = {
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
 */

const persona = {
  nombre: 'Juan',
  edad: '28',
  hijos: ['diego', 'laura', 'pepe', 'rosa', 'tomas'],
};

console.log(persona.nombre);
console.log(persona['nombre']);

for (const key in persona) {
  console.log(persona[key]);
}

//imprime la key
for (const hijo in persona.hijos) {
  console.log(hijo);
}

//para imprimir los valores podemos usar for of ya que hijos es un array y no un objeto
for (const hijo of persona.hijos) {
  console.log(hijo);
}

console.log(
  `Hola ${persona.nombre} tienes ${
    persona.edad
  }años y tus hijos son ${persona.hijos.join(',')}`
);
