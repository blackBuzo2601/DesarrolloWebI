import axios from "axios";
import { GIFResponse } from "../interface/gif.response";

const apiKey = "5Sq3M7oGhVkPxVGXDGB5L1yWfmR0cmKc";

//Axios maneja automaticamente las respuestas en formato JSON
export const giphyApi = axios.create({
  //creamos una instancia de Axios
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

/* giphyApi
  .get<GIFResponse>("/random")
  .then((response) => console.log(response.data.data.url))
  .catch((err) => console.log(err));
 */
