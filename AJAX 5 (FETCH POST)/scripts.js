/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
  const newPost = {
    titulo: 'Un nuevo posteo',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    userID: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
