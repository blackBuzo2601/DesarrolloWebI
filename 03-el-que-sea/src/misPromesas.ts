import axios from "axios";
import { Alimento } from "./interfaces/Alimento";

//Promesa para consumir
export const consumirJSON = async () => {
  try {
    const response = await axios.get<Alimento[]>("../data/data.json"); //objeto AxiosResponse
    const dataJSON = response.data; //arreglo de Alimentos[]
    const nuevoArreglo = dataJSON.map((elemento) => ({
      key: elemento.Alimento,
    }));
    console.log(nuevoArreglo);
  } catch (error) {
    throw "Un error " + error;
  }
};

//Promesa para filtrar por categoria
export const filtrarJSON = async (categoria: string) => {
  try {
    const respuesta = await axios.get<Alimento[]>("../data/data.json");
    const dataJSON = respuesta.data; //data JSON resuelta
    const buscarPorCategoria = dataJSON.filter(
      (elemento) => elemento.Categoría == categoria
    );
    const soloNombres = buscarPorCategoria.map((alimento) => ({
      alimento: alimento.Alimento,
    }));

    console.log(soloNombres);
  } catch (error) {
    throw error;
  }
};

//Promesa para buscar alimentos que incluyan la comida
export const buscarComida = async (comida: string) => {
  try {
    const respuesta = await axios.get<Alimento[]>("../data/data.json");
    const dataJSON = respuesta.data;
    const dataJSONLower = dataJSON.map((elemento) => ({
      ...elemento,
      Alimento: elemento.Alimento.toLowerCase(),
    }));

    const arregloComidas = dataJSONLower.filter((elemento) =>
      elemento.Alimento.includes(comida)
    );

    arregloComidas.forEach((elemento) => console.log(elemento.Alimento));
  } catch (error) {
    throw error;
  }
};
