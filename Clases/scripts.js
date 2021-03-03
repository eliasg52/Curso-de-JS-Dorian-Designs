/* class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
  }

  saludar() {
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`;
  }
}

const juan = new Persona('Juan', 'Perez', 25);
const marta = new Persona('Marta', 'Perez', 32);

console.log(juan);

console.log(juan.saludar());
console.log(juan.saludar());
 */

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.datos = `Me llamo ${this.nombre} ${apellido} y tengo ${this.edad} años`;
    //aca puedo poner directamente .nombre .apellido o .edad xq estoy dentro del constructor, sin necesidad de poner el this
    //pero si quiero hacerlo en un metodo creado tengo que referenciarlo SI o SI con el this.
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

const elias = new Persona('elias', 'garcia', 30);

console.log(elias.nombre);
console.log(elias.apellido);
console.log(elias.edad);
console.log(elias.datos);

elias.saludar();

class Pokemon {
  constructor(nombre, tipo, numero) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.numero = numero;
  }
}

const pikachu = new Pokemon('Pikachu', 'Electrico', 25);

console.log(pikachu.tipo);
