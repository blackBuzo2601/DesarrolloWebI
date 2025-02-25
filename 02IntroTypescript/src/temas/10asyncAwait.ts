import { GIFResponse } from "../interface/gif.response";
import { giphyApi } from "./09axios";

//anteponemos async para definir que es asincrona
//ESTO ES UNA PINCHE PROMESA QUE NO SE TE OLVIDE PA
export const obtenerImagen = async () => {
  try {
    const respuesta = await giphyApi.get<GIFResponse>("/random");
    return respuesta.data.data.images.downsized.url;
  } catch (error) {
    //toman los errores que generemos
    throw "url not found";
  }
};

/* export const obtenerImagenPromesa = () => {
  return new Promise((resolve, reject) => {
    resolve("https://giphy.com/gifs/MUHNdrm3vk7MoyUsCO");
  });
};
 */
obtenerImagen().then((url) => console.log(url));
obtenerImagen().catch((error) => console.log(error));
