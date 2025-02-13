//cuando importamos, normalmente se hace con un (alias)
import heroes, { owner } from "../data/heroes";

const obtenerHeroeId = (id: number) => {
  const encontrado = heroes.find((hero) => hero.id === id);
  return encontrado ? `Se encontro ${encontrado.nombre}` : "No se encontró";
};

//en lugar de que la funcion obtenerPorOwner reciba un string, podemos definir
//los parametros tipados que queremos que reciba, como en la siguiente linea
const obtenerPorOwner = (owner: owner) => {
  return heroes.filter((elemento) => elemento.owner === owner);
};

console.log(obtenerHeroeId(5));
console.log(obtenerPorOwner("Marvel"));
