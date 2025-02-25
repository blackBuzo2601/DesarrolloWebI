import { GIFResponse } from "../interface/gif.response";
import { giphyApi } from "./09axios";

//anteponemos async para definir que es asincrona, esta funcion "siempre devolverá una promesa"
export const obtenerImagen = async () => {
  try {
    //el codigo se detiene en la siguiente linea hasta que se resuelve la promesa.
    const respuesta = await giphyApi.get<GIFResponse>("/random");
    return respuesta.data.data.images.downsized.url; //si se resuelve, se retorna la respuesta y accedemos a
    //data (de axios) y luego a data (de la respuesta, el JSON resuelto)
  } catch (error) {
    //si no se resuelve la promesa en la linea del "await", se brinca al catch
    throw "URL not found";
  }
};

/* export const obtenerImagenPromesa = () => {
  return new Promise((resolve, reject) => {
    resolve("https://giphy.com/gifs/MUHNdrm3vk7MoyUsCO");
  });
};
 */
obtenerImagen().then((respuesta) => console.log(respuesta));
obtenerImagen().catch((error) => console.log(error));
