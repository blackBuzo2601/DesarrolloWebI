const personajes = ["Gato con botas", "Lulú", "Shrek", "Zunni"];

//es posible, hacer una desestructuracion y tambien agregar un nuevo elemento
//al hacer la desestructuracion, como es en el ejemplo siguiente:
const [, , , , d = "Rafita"] = personajes;

//es importante definir cuando la función retorna o nada, o en este caso
//un arreglo con "tipos especificos":
const regresarArreglo = (): (number | string)[] => {
  return [1234, "hola"];
};

const [numeros, letra] = regresarArreglo();

console.log(numeros);
console.log(letra);
