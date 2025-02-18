/* console.log("INICIO EL SEMESTRE");

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Mis estudiantes cumplieron");
    //reject("Mis estudiantes, no cumplieron");
  }, 1000);
})
  .then((mensaje) => console.log(mensaje))
  .catch((errorMensaje) => console.log(errorMensaje))
  .finally(() => console.log("Finalizó la promesa..."));

console.log("FINALIZÓ EL SEMESTRE");

//resolve: promesa cumplida
//reject: cuando una promesa no se cumple
//catch: se ejecuta cuando el reject se hace presente

//then promesa exitosa
//catch cuando no ex exitosa
//finally cuando finaliza la promesa independientemente si fue exitosa o no
 */

import { obtenerHeroeId } from "./06imp-exp"; //funcion
import { Hero } from "../data/heroes"; //interfaz

//Promise<Hero> significa que devolverá un objeto de tipo Hero cuando se resuelva.
//Promise es un tipo genérico, por eso usamos "<>""
const obtenerHeroesIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = obtenerHeroeId(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("Heroe no encontrado con el ID proporcionado: " + id);
      }
    }, 1500);
  });
};

obtenerHeroesIdAsync(5)
  .then((heroe) => console.log("El nombre es: " + heroe.nombre))
  .catch((errorMensaje) => {
    console.log(errorMensaje);
  })
  .finally(() => console.log("Proceso finalizado de la promesa"));
