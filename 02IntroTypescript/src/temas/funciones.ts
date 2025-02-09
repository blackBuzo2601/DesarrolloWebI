function saludarPersona(nombre: string) {
  return `${nombre}`;
}

const obtenerUsuario = (uid: string) => ({
  uid,
  nombreUsuario: "La abejita magica",
});

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
