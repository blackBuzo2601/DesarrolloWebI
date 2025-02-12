const personajes = ["Gato con botas", "Lulú", "Shrek", "Zunni"];

//es posible, hacer una desestructuracion y tambien agregar un nuevo elemento
//al hacer la desestructuracion, como es en el ejemplo siguiente:
const [, , , , d = "Rafita"] = personajes;

//es importante definir cuando la función retorna  NADA (void), o en este caso
//un arreglo con "tipos especificos", como lo hacemos en la linea 9, para poder retornar
//un arreglo con ese tipado
const regresarArreglo = (): (number | string)[] => {
  return [1234, "hola"];
};

const [numeros, letra] = regresarArreglo();

console.log(numeros);
console.log(letra);
