//FORMA ANTIGUA DE CREAR UNA FUNCION
function saludar() {
  console.log('Hola');
}

saludar();

//FORMA ACTUAL DE CREAR UNA FUNCION (arrow functions)
const saludar2 = () => console.log('hola');
//SI SOLO HAY 1 LINEA DE CODIGO, NO ES NECESARIO ABRIR LAS LLAVES

saludar2();

//UTILIZANDO PARAMETROS
const saludar3 = (usuario) => console.log(`Hola ${usuario}`);

saludar3('Elias');
saludar3('Marta');

//UTILIZANDO 2 O MAS PARAMETROS
const suma = (numero1, numero2) => numero1 + numero2;

console.log(suma(1, 2));

//UTILIZANDO 2 O MAS PARAMETROS Y CON RETURN
const suma2 = (numero1, numero2) => {
  return numero1 + numero2;
};

console.log(suma(1, 10));
console.log(suma2(20, 30));

//UTILIZANDO VARIOS RETURNS
const suma4 = (numero1, numero2) => {
  if (numero1 === 2) {
    return numero1 + numero2;
  } else {
    console.log(
      'Esto no se va a ejecutar si entra en el if ya que al llegar al return se corta la ejecucion'
    );
    return numero1;
  }
};

console.log(suma4(2, 4));

//GUARDANDO EL RESULTADO DE UNA FUNCION EN UNA VARIABLE

const suma5 = (numero1, numero2) => numero1 + numero2;

let resultado = suma5(52, 53);

console.log(resultado);
