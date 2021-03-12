const obtenerNombre = () => {
  return new Promise((resolve, reject) => {
    resolve('Elias');
  });
};

obtenerNombre().then((nombre) => console.log(nombre));
