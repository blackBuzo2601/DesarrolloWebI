import axios from "axios";
import { GIFResponse } from "../interface/gif.response";

const apiKey = "5Sq3M7oGhVkPxVGXDGB5L1yWfmR0cmKc";

const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

//ya sabemos que baseURL es el endpointbase
giphyApi
  .get<GIFResponse>("/random")
  .then((response) => console.log(response.data.data.url))
  .catch((err) => console.log(err));
