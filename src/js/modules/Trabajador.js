class Trabajador {
  constructor(
    nombre,
    aPaterno,
    aMaterno,
    edad,
    telefono,
    direccion,
    correo,
    estadoCivil
  ) {
    this._nombre = () => nombre;
    this._apellidoPaterno = () => aPaterno;
    this._apellidoMaterno = () => aMaterno;
    this._edad = () => edad;
    this._telefono = () => telefono;
    this._direccion = () => direccion;
    this._correo = () => correo;
    this._estadoCivil = () => estadoCivil;
  }
  get nombre() {
    return this._nombre();
  }
}

export default Trabajador;
