const arreglo = [
  [4, 7, 1, 3, 5],
  [2, 0, 6, 9, 7],
  [3, 1, 2, 6, 4],
];

//renglon,columna

///5 iteraciones
for (let i = 0; i < arreglo[0].length; i++) {
  let arregloUno = [];

  for (let j = 0; j < arreglo.length; j++) {
    arregloUno.push(arreglo[j][i]);
  }
  console.log(arregloUno);
}
