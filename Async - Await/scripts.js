/* const obtenerNombre = async () => {
  return new Promise((resolve, reject) => {
    resolve('Elias');
  });
};

const decirHola = async () => {
  const nombre = await obtenerNombre();
  return `Hola ${nombre}`;
};

decirHola().then((respuesta) => console.log(respuesta));
 */

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

//SIN ASYNC/AWAIT
/* const obtenerUsuario = (id) => {
  const usuario = usuarios.find((usuarioTemporal) => usuarioTemporal.id == id);
  const promesa = new Promise((resolve, reject) => {
    if (!usuario) reject(`No existe el usuario con id ${id}`);
    else resolve(usuario);
  });

  return promesa;
};

const obtenerEmail = (usuario) => {
  const email = emails.find((emailTemporal) => emailTemporal.id == usuario.id);

  return (promesa = new Promise((resolve, reject) => {
    if (!email) reject(`${usuario.nombre} no tiene email`);
    else
      resolve({
        id: usuario.id,
        nombre: usuario.nombre,
        email: email.email,
      });
  }));
}; */

//CON ASYNC/AWAIT

const obtenerUsuario = (id) => {
  const usuario = usuarios.find((usuarioTemporal) => usuarioTemporal.id == id);

  if (!usuario) throw new Error(`No existe el usuario con id ${id}`);
  else return usuario;
};

const obtenerEmail = async (usuario) => {
  const email = emails.find((emailTemporal) => emailTemporal.id == usuario.id);

  if (!email) throw new Error(`${usuario.nombre} no tiene email`);
  else
    return {
      id: usuario.id,
      nombre: usuario.nombre,
      email: email.email,
    };
};

//esta va a ser una funcion asincrona xq en obtener el usuario y obtener el mail vamos a tardar un tiempo
const juntarFuncionesInfo = async (id) => {
  try {
    const usuario = await obtenerUsuario(id);
    const respuesta = await obtenerEmail(usuario);
    return `${usuario.nombre} su email es ${respuesta.email}`;
  } catch (error) {
    console.log(error);
  }
};

juntarFuncionesInfo(3).then((respuesta) => console.log(respuesta));
