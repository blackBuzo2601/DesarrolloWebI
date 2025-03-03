import axios from "axios";
import { Alimento } from "./interfaces/Alimento";

//buscar comidas basándonos en la palabra clave

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
