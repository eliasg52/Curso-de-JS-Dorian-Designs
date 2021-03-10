/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const boton = document.getElementById('button');

boton.addEventListener('click', () => {
  //primero creo el objeto donde se guarda la informacion de la respuesta
  let xhr = new XMLHttpRequest();

  //para crear el objeto con soporte para navegadores viejos
  /*   let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  } */

  //creo la peticion GET con la url indicada (abriendo conexion)
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

  //aca le decimos que queremos que haga con los datos
  //el evento load se dispara cuando toda la informacion ya llego al objeto
  //guardamos la informacion en una variable data
  /* la informacion que nos llega es del tipo string, hay que convertirla a un objeto y esto se consigue con 
  JSON.parse() */
  xhr.addEventListener('load', (data) => {
    /* console.log(typeof data.target.response); */
    const dataJSON = JSON.parse(data.target.response);

    const lista = document.getElementById('list');
    for (const infoUsuario of dataJSON) {
      const itemLista = document.createElement('LI');
      itemLista.textContent = `${infoUsuario.id} - ${infoUsuario.name}`;
      lista.appendChild(itemLista);
    }
  });

  //envio la peticion (enviando conexion)
  xhr.send();
});
