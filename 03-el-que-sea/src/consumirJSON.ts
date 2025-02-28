import axios from "axios";
import { Alimento } from "./interfaces/Alimento";
export const consumirJSON = async (numeroAlimento: number) => {
  try {
    const response = await axios.get<Alimento[]>("../data/data.json"); //objeto AxiosResponse
    const dataJSON = response.data;
    console.log(dataJSON[numeroAlimento]);
  } catch (error) {
    throw "Un error " + error;
  }
};
