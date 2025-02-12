//cuando importamos, normalmente se hace con un (alias)
import heroes, { owner, saludar } from "../data/heroes";

const obtenerHeroeId = (id: number) => {
  const encontrado = heroes.find((hero) => hero.id === id);
  return encontrado ? `Se encontro ${encontrado.nombre}` : "No se encontró";
};

const obtenerPorOwner = (owner: string) => {
  return heroes.filter((elemento) => elemento.owner === owner);
};

console.log(obtenerHeroeId(5));
console.log(obtenerPorOwner("Marvel"));
