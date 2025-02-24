import { GIFResponse } from "../interface/gif.response";
import { giphyApi } from "./09axios";

//anteponemos async para definir que es asincrona
export const obtenerImagen = async () => {
  try {
    const respuesta = await giphyApi.get<GIFResponse>("/random1");
    return respuesta.data.data.images.downsized.url;
  } catch (error) {
    throw "URL NOT FOUND";
  }
};

/* export const obtenerImagenPromesa = () => {
  return new Promise((resolve, reject) => {
    resolve("https://giphy.com/gifs/MUHNdrm3vk7MoyUsCO");
  });
};
 */
obtenerImagen().then((url) => console.log(url));
