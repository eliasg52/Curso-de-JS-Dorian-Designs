/*
    Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img');
const buttonPDF = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
  //peticion fetch a un RECURSO LOCAL
  fetch('dog.jpg')
    .then((respuesta) => respuesta.blob())
    .then((imagen) => {
      document.getElementById('img').src = URL.createObjectURL(imagen);
    });
});

buttonPDF.addEventListener('click', () => {
  //peticion fetch a un RECURSO LOCAL
  fetch('demo.pdf')
    .then((respuesta) => respuesta.blob())
    .then((pdf) => {
      document.getElementById('pdf').href = URL.createObjectURL(pdf);
    });
});
