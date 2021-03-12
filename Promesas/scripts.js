//Una promesa es un objeto con 2 callbacks internos
/* const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject) => {
        if (!user) reject(`Doesn't exist an user with id ${id}`)
        else resolve(user)
    })
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}
 */
/* getUser(2)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/

/* getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log) */

const usuarios = [
  {
    id: 1,
    nombre: 'Elias',
  },
  {
    id: 2,
    nombre: 'Julieta',
  },
  {
    id: 3,
    nombre: 'Joaquin',
  },
];

const emails = [
  {
    id: 1,
    email: 'elias@gmail.com',
  },
  {
    id: 2,
    email: 'julietaa@gmail.com',
  },
];

const obtenerUsuario = (id) => {
  const usuario = usuarios.find((usuarioTemporal) => usuarioTemporal.id == id);
  const promesa = new Promise((resolve, reject) => {
    if (!usuario) reject(`No existe el usuario con id ${id}`);
    else resolve(usuario);
  });

  return promesa;
};

const obtenerEmail = (usuario) => {
  const email = emails.find((emailTemporal) => emailTemporal.id == usuario.id);

  const promesa = new Promise((resolve, reject) => {
    if (!email) reject(`${usuario.nombre} no tiene email`);
    else
      resolve({
        id: usuario.id,
        nombre: usuario.nombre,
        email: email.email,
      });
  });

  return promesa; /*tmb puedo poner el return donde dice 
  const promesa y me ahorro una linea de codigo return promesa = new Promise*/
};

obtenerUsuario(3)
  .then((usuario) => obtenerEmail(usuario))
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

/*   FUNCION DE ARRIBA SIMPLIFICADA
  obtenerUsuario(3)
    .then(obtenerEmail)
    .then(console.log)
    .then(console.log); */
