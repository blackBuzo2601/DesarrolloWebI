import axios from "axios";
import { Alimento } from "./interfaces/Alimento";
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
