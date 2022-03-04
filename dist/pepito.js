(() => {
  "use strict";
  const o = (async () => {
    try {
      const o = "./trabajadoresEntel.json",
        e = await fetch(o);
      return await e.json();
    } catch (o) {
      console.error(o);
    }
  })();
  (async () => {
    const e = await o;
    console.log(e),
      e?.forEach((o) => {
        new (class {
          constructor(o, e, t, r, a, n, s, i) {
            (this._nombre = () => o),
              (this._apellidoPaterno = () => e),
              (this._apellidoMaterno = () => t),
              (this._edad = () => r),
              (this._telefono = () => a),
              (this._direccion = () => n),
              (this._correo = () => s),
              (this._estadoCivil = () => i);
          }
          get nombre() {
            return this._nombre();
          }
        })(
          o.nombre,
          o.apellidoPaterno,
          o.apellidoMaterno,
          o.edad,
          o.telefono,
          o.direccion,
          o.correo,
          o.estadoCivil
        );
      });
  })();
})();
