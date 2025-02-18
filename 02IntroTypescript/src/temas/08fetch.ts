import { type GIFResponse } from "../interface/gif.response";

const apiKey = "5Sq3M7oGhVkPxVGXDGB5L1yWfmR0cmKc";

//en las promesas, podemos colocar multiples ".then"
//en el ejemplo siguiente, la respuesta la transformamos a un json,

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json()) //respuesta en forma de json
  .then((body: GIFResponse) => console.log(body))
  .catch((err) => console.log(err));
