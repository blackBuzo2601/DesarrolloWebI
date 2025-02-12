function saludarPersona(nombre: string) {
  return `${nombre}`;
}

//esta función devuelve un objeto, el parentesis es poruqe queremos retornar un objeto
const obtenerUsuario = (uid?: string) => ({
  uid, //esto de aqui, es una forma de simplificar cuando definimos la property como
  //{uid:uid}, al poner la variable local
  nombreUsuario: "La abejita magica",
});

console.log(obtenerUsuario("yoshi"));

const heroes = [
  {
    id: 1,
    nombre: "Superman",
  },
  {
    id: 2,
    nombre: "Webman",
  },
  {
    id: 3,
    nombre: "Don Ramon",
    superPoder: "No pagar renta",
  },
];
