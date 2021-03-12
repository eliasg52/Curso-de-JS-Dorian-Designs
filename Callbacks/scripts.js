//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

/* const getUser = (id, cb) => {
    const user = {
        name: 'Dorian',
        id: id
    }

    if (id == 2) cb('User not exist')
    else cb(null, user)
}

getUser(1, (err, user) => {
    if (err) return console.log(err)
    console.log(`User name is ${user.name}`);
}) 

const users = [
    {
        id: 1,
        name: 'Dorian'

    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'laura@gmail.com'
    }
]

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    if (!user) cb(`Not exist a user with id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id)
    if (!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}

getUser(3, (err, user) => {
    if (err) return console.log(err)

    getEmail(user, (err, res) => {
        if (err) return console.log(err)
        getEmail(user, (err, res) => {
            if (err) return console.log(err)
            getEmail(user, (err, res) => {
                if (err) return console.log(err)
                getEmail(user, (err, res) => {
                    if (err) return console.log(err)
                    console.log(res);
                })
            })
        })
    })
})



const obtenerUsuario = (id, cb) => {
  const usuario = usuarios.find((usuarioTemporal) => usuarioTemporal.id == id);
  if (!usuario) cb(`No existe el usuario con id ${id}`);
  else cb(null, usuario);
};
*/
/* //EJEMPLO 1 DE CALLBACK
const getUser = (id, callback) => {
  const usuario = {
    nombre: 'Elias',
    id: id,
  };
  if (id == 2) callback('El usuario no existe');
  else callback(null, usuario);
};

getUser(2, (error, usuario) => {
  if (error) return console.log(error);
  else console.log(`El usuario es ${usuario.nombre}`);
}); */

//EJEMPLO 2 DE CALLBACK

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

const obtenerUsuario = (id, cb) => {
  const usuario = usuarios.find((usuarioTemporal) => usuarioTemporal.id == id);
  if (!usuario) cb(`No existe el usuario con id ${id}`);
  else cb(null, usuario);
};

const obtenerEmail = (usuario, cb) => {
  const email = emails.find((emailTemporal) => emailTemporal.id == usuario.id);
  if (!email) cb(`${usuario.nombre} no tiene email`);
  else
    cb(null, {
      id: usuario.id,
      nombre: usuario.nombre,
      email: email.email,
    });
};

obtenerUsuario(3, (error, usuario) => {
  if (error) {
    return console.log(error);
  } else {
    obtenerEmail(usuario, (error, respuesta) => {
      if (error) {
        console.log(error);
      } else {
        console.log(respuesta);
      }
    });
  }
});
