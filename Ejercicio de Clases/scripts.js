/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información 
*/

class Libro {
  constructor(titulo, autor, anio, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.genero = genero;
  }

  obtenerAutor() {
    return this.autor;
  }

  obtenerGenero() {
    return this.genero;
  }

  mostrarInformacion() {
    return `El nombre del libro es ${this.titulo} del autor ${this.autor}. Año: ${this.anio}. Genero: ${this.genero}`;
  }
}

const libros = [];

while (libros.length < 3) {
  let titulo = prompt('Introduce el titulo del libro');
  let autor = prompt('Introduce el autor del libro');
  let anio = prompt('Introduce el año del libro');
  let genero = prompt('Introduce el genero del libro').toLowerCase();

  if (
    titulo != '' &&
    autor != '' &&
    !isNaN(anio) &&
    anio.length === 4 &&
    (genero === 'aventura' || genero === 'terror' || genero === 'fantasia')
  ) {
    libros.push(new Libro(titulo, autor, anio, genero));
  }
}

const mostrarLibros = () => {
  console.log(libros);
};

const mostrarAutores = () => {
  let autores = [];
  for (const libro of libros) {
    autores.push(libro.obtenerAutor());
  }
  console.log(autores.sort());
};

const mostrarGenero = () => {
  const genero = prompt('Introduce un genero');

  for (const libro of libros) {
    if (libro.obtenerGenero() === genero) {
      console.log(libro.mostrarInformacion());
    }
  }
};

// mostrarLibros();
// mostrarAutores();
mostrarGenero();
