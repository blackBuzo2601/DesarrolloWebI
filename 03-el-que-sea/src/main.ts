import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
//import { consumirJSON } from "./consumirJSON";
import { filtrarJSON } from "./filtrarJSON";
import { Categoría } from "./interfaces/Alimento";
import { consumirJSON } from "./consumirJSON";
import { buscarComida } from "./buscarComida";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
//const miEnum = Object.entries(Categoría);

/* filtrarJSON("Cereales con grasa")
  .then(() => console.log("Promesa Resuelta"))
  .catch((error) => console.log(error))
  .finally(() => console.log("PROMESA FINALIZADA"));
 */

buscarComida("PAN".toLowerCase());
