const personajes = ["Gato con botas", "Lulú", "Shrek", "Zunni"];

const [, , , , d = "Rafita"] = personajes;

const regresarArreglo = (): (number | string)[] => {
  return [1234, "ABCD"];
};

//como regresarArreglo devuelveu
const [numeros, letra] = regresarArreglo();

console.log(numeros);
console.log(letra);
