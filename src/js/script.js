// npm init -y (Para inicializar un proyecto de node y crear un archvio package.json)
// sass --watch rutaEntrada.SCSS:rutaSalida.CSS (Para compilar de SCSS a CSS)
// Para hacer comandos personalizados, incluir el comando en el package.json en la sección de scripts
// npm run nombreComando (Para ejecutar un comando personalizado)
// yarn nombreComando (Parar ejecutar un comando personalizado)

import Trabajador from "./modules/Trabajador.js";

const getTrabajadoresEntel2022 = (async () => {
  try {
    const URL = "./trabajadoresEntel.json";
    const request = await fetch(URL);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
})();

const trabajaresEntel = (async () => {
  const dataTrabajadores = await getTrabajadoresEntel2022;
  console.log(dataTrabajadores);
  dataTrabajadores?.forEach((trabajador) => {
    const trabajadorEntel = new Trabajador(
      trabajador.nombre,
      trabajador.apellidoPaterno,
      trabajador.apellidoMaterno,
      trabajador.edad,
      trabajador.telefono,
      trabajador.direccion,
      trabajador.correo,
      trabajador.estadoCivil
    );
  });
})();
