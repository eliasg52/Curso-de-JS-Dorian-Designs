//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

/* const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect') */

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList) */

/* title.innerHTML = 'DOM - <span>Crear e insertar elementos I<span>'

const fragment = document.createDocumentFragment() */

/* for (const day of days) {
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
} */

/* for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
} */

/* daysList.appendChild(fragment) */
/* selectDays.appendChild(fragment) */

const dias = [
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
  'domingo',
];

const titulo = document.getElementById('title');
const listaDias = document.getElementById('daysList');
const selectorDias = document.getElementById('daysSelect');

titulo.innerHTML = 'DOM -  <span> Crear e insertar elementos I </span>';

/*  ESTO CONSUME MUCHOS RECURSOS POR LO QUE SE USARIA EL FRAGMENT
for (dia of dias) {
  listaDias.innerHTML += `<li>${dia}</li>`;
} */

const fragment = document.createDocumentFragment();

for (dia of dias) {
  const itemLista = document.createElement('LI');
  itemLista.textContent = dia;
  fragment.appendChild(itemLista);
}

console.dir(fragment);

listaDias.appendChild(fragment);

//RELLENAR EL SELECT
/* const fragmentSelect = document.createDocumentFragment();

for (dia of dias) {
  const optionSelect = document.createElement('OPTION');
  optionSelect.textContent = dia;
  fragmentSelect.appendChild(optionSelect);
}

selectorDias.appendChild(fragmentSelect); */

//SOLUCION DE DORIAN AGREGANDO EL VALUE PARA IDENTIFICARLO DSP CON EL BACKEND
const fragmentSelect = document.createDocumentFragment();

for (dia of dias) {
  const optionSelect = document.createElement('OPTION');
  optionSelect.setAttribute('value', dia.toLowerCase());
  optionSelect.textContent = dia;
  fragmentSelect.appendChild(optionSelect);
}

selectorDias.appendChild(fragmentSelect);
