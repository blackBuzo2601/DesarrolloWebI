//cuando importamos, normalmente se hace con un (alias)
//aqui me quede en las notas de clase, lo mismo con el archivo de los heroes
import heroes, { type Owner } from "../data/heroes";

export const obtenerHeroeId = (id: number) => {
  return heroes.find((hero) => hero.id === id);
  //return encontrado ? `Se encontro ${encontrado.nombre}` : "No se encontró";
};

//en lugar de que la funcion obtenerPorOwner reciba un string, podemos definir
//los parametros tipados que queremos que reciba, como en la siguiente linea
const obtenerPorOwner = (owner: Owner) => {
  return heroes.filter((elemento) => elemento.owner === owner);
};

/* console.log(obtenerHeroeId(5));
console.log(obtenerPorOwner("Marvel"));
 */
