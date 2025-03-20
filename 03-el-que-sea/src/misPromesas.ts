import axios from "axios";
import { Alimento } from "./interfaces/Alimento";

/**
 * Esta promesa se encarga de realizar una petición GET para obtener la información de un
 * JSON. Esta promesa hace uso de una interfaz "Alimento". Esta interfaz fue definida en
 * base a un JSON de Alimentos de SMAE. Retorna arreglo de objetos con la forma: {key:Alimento}
 * @param rutaRelativa: La ruta relativa al directorio actual, donde se encuentra el JSON a consumir
 */
export const consumirJSON = async (rutaRelativa: string) => {
  try {
    const response = await axios.get<Alimento[]>(rutaRelativa); //objeto AxiosResponse
    const dataJSON = response.data; //arreglo de Alimentos[]
    const nuevoArreglo = dataJSON.map((elemento) => ({
      key: elemento.Alimento,
    }));
    //console.log(nuevoArreglo);
    return nuevoArreglo;
  } catch (error) {
    throw "Un error " + error;
  }
};

/**
 * Esta promesa se encarga de realizar una petición GET para obtener la información de un
 * JSON. Esta promesa hace uso de una interfaz "Alimento". Esta interfaz fue definida en
 * base a un JSON de Alimentos de SMAE. Retorna un arreglo de objetos, donde cada objeto
 * es un objeto de tipo <Alimento> y cada Alimento corresponde a la categoría proporcionada.
 * @param categoria: La categoría de la cual, buscamos obtener todos los alimentos que
 * que forman parte de la misma.
 */
export const buscarPorCategoria = async (ruta: string, categoria: string) => {
  try {
    const respuesta = await axios.get<Alimento[]>(ruta);
    const dataJSON = respuesta.data; //data JSON resuelta
    const dataJSONLower = dataJSON.map((elemento) => ({
      ...elemento,
      Categoría: elemento.Categoría.toLowerCase(),
    }));
    const buscarPorCategoria = dataJSONLower.filter(
      (elemento) => elemento.Categoría == categoria.toLowerCase().trim()
    );

    //console.log(buscarPorCategoria);
    return buscarPorCategoria;
  } catch (error) {
    throw error;
  }
};

/**
 * Esta promesa se encarga de realizar una petición GET para obtener la información de un
 * JSON. Esta promesa hace uso de una interfaz "Alimento". Esta interfaz fue definida en
 * base a un JSON de Alimentos de SMAE. Retorna un arreglo de objetos, donde cada objeto
 * es un objeto de tipo <Alimento> y cada Alimento incluye en su nombre, la palabra
 * proporcionada en el parámetro
 * @param comida: El alimento en particular que buscamos, para obtener todas las coincidencias
 * existentes con el mismo nombre.
 */
export const buscarPorComida = async (ruta: string, comida: string) => {
  try {
    const respuesta = await axios.get<Alimento[]>(ruta);
    const dataJSON = respuesta.data;
    const dataJSONLower = dataJSON.map((elemento) => ({
      ...elemento,
      Alimento: elemento.Alimento.toLowerCase(),
    }));

    const arregloComidas = dataJSONLower.filter((elemento) =>
      elemento.Alimento.includes(comida.toLowerCase().trim())
    );
    //console.log(arregloComidas);
    return arregloComidas;
  } catch (error) {
    throw error;
  }
};
