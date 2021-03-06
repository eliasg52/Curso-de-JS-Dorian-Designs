/* 
Atributos
    element.getAttribute('attribute')
    element.setAttribute('attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.contains('class')
    element.classList.replace('oldClass', newClass)
    
    element.classList.toggle('class'[,force])
atributos directos
    id
    value
*/

const titulo = document.getElementById('title');
const nombre = document.getElementById('name');

console.log(titulo);
console.log(nombre);
console.log(nombre.getAttribute('id'));

nombre.setAttribute('type', 'number');

titulo.classList.add('main-titulo');

console.dir(titulo);

/* // console.log(nombre.getAttribute('type'));
// nombre.setAttribute('type', 'number');

titulo.classList.add('nueva-clase', 'otra-clase', 'otra-clase-mas');
titulo.classList.remove('otra-clase');
titulo.classList.replace('otra-clase-mas', 'nueva-claseee');

if (titulo.classList.contains('title'))
  console.log('Titulo tiene la clase title');
else console.log('Titulo no tiene la clase title');

console.log(titulo.innerHTML);
console.log(titulo.textContent);

console.log(nombre.value);
console.log(nombre.value.length);

console.log(titulo);
console.log(nombre); */
