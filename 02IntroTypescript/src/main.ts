import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
//import "../src/temas/arreglos";
//import "../src/temas/funciones";
//import "../src/temas/objetos";
//import "./temas/destructury-arreglos";
//import "./temas/destructury";
//import "./temas/imp-exp";
//import "./temas/07promesas";
//import "./temas/08fetch";
//import "./temas/09axios";
import "./temas/10asyncAwait";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Repaso Typescript</h1>
    
  </div>
`;
