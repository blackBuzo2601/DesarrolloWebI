import { type GIFResponse } from "../interface/gif.response";
//recordemos que con type, definimos que es un tipado, y no es una clase etc.

//la key es la que nos proporcionó Giphy.com
const apiKey = "5Sq3M7oGhVkPxVGXDGB5L1yWfmR0cmKc";
//en las promesas, podemos colocar multiples ".then"
//usamos fetch, y ponemos el endpoint correspondiente para generar gifs aleatoriamente
//ya finalmente colocamos la api_key en la url: api_key=apiKey, solo que aqui usamos
//template strings

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json()) //respuesta en forma de json
  .then((body: GIFResponse) => console.log(body))
  .catch((err) => console.log(err));
