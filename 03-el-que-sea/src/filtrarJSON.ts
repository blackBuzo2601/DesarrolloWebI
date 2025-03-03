import axios from "axios";
import { Alimento } from "./interfaces/Alimento";

//debemos filtrar los alimentos por categoria (una promesa que reciba la categoria)

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
