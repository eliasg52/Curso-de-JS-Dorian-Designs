/* 
Crea una clase Libro ***
La clase libro tendrá título, autor, año y género. ***
Crea un método que devuelva toda la información del libro ***
Pide 3 libros y guárdalos en un array ***
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt. ***
Validar que los campos no se introduzcan vacíos 
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género 
usando un el método que devuelve la información 
*/

/* class Libro {
  constructor(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }

  infoLibro() {
    return `${this.titulo}, ${this.autor}, ${this.año}, ${this.genero}`;
  }
}

let libros = [];
//SEGUN DORIAN ES MEJOR USAR UN WHILE LOOP PARA PODER VALIDAR LOS CAMPOS YA QUE CON UN FOR SE COMPLICARIA
for (let i = 1; i <= 3; i++) {
  pedirLibroUsuario();
}

function pedirLibroUsuario() {
  let librosUsuario = new Libro(
    prompt('introduce titulo'),
    prompt('introduce autor'),
    Number(prompt('introduce año')),
    prompt('Introduce genero')
  );

  libros.push(librosUsuario);
}

function mostrarLibros() {
  for (libro of libros) {
    console.log(libro);
  }
}

function mostrarAutoresAlfabeticamente() {
  let autores = [];
  for (libro of libros) {
    autores.push(libro.autor);
  }
  autores.sort();
  console.log(autores);
}

function informacionGenero() {
  let genero = [];
  for (libro of libros) {
    genero.push(libro.genero);
  }
  let generoUsuario = prompt('Introduce un genero a buscar');
  if (genero.indexOf(generoUsuario) === 0) {
    console.log(libro.infoLibro());
  }
}

mostrarLibros();
mostrarAutoresAlfabeticamente();
informacionGenero(); */

//SOLUCION DORIAN
class Libro {
  constructor(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }

  infoLibro() {
    return `${this.titulo}, ${this.autor}, ${this.año}, ${this.genero}`;
  }

  obtenerGenero() {
    return this.genero;
  }
}

let libros = [];
while (libros.length < 3) {
  let titulo = prompt('introduce titulo');
  let autor = prompt('introduce autor');
  let anio = prompt('introduce año');
  let genero = prompt('Introduce genero').toLowerCase();

  //VALIDACIONES
  if (
    titulo != '' &&
    autor != '' &&
    !isNaN(anio) &&
    anio.length === 4 &&
    (genero === 'aventura' || genero === 'terror' || genero === 'fantasia')
  ) {
    //SI TODO ESTO SE CUMPLE, METEMOS EL LIBRO EN EL ARRAY. LO CREAMOS CON LA CLASE Y LE PASAMOS LOS PARAMETROS
    libros.push(new Libro(titulo, autor, anio, genero));
  }
}

function mostrarLibros() {
  for (libro of libros) {
    console.log(libro);
  }
}

function mostrarAutoresAlfabeticamente() {
  let autores = [];
  for (libro of libros) {
    autores.push(libro.autor);
  }
  console.log(autores.sort());
}

function informacionGenero() {
  let generoUsuario = prompt('Introduce un genero a buscar');

  for (libro of libros) {
    if (libro.obtenerGenero() === generoUsuario) {
      console.log(libro.infoLibro());
    }
  }
}

mostrarLibros();
mostrarAutoresAlfabeticamente();
informacionGenero();
