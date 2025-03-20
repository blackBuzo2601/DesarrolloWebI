import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
//import { consumirJSON } from "./consumirJSON";
import { consumirJSON } from "./misPromesas";
import { buscarPorCategoria } from "./misPromesas";
import { buscarPorComida } from "./misPromesas";
import { initializeApp } from "firebase/app";
import { configuracionFireBase } from "./api_key";

const firebaseConfig = {
  ...configuracionFireBase,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
    `; */

// `${app.options.databaseURL}`
//consumirJSON(`${app.options.databaseURL}`);

const formulario = document.querySelector<HTMLDivElement>(
  "#formulario-tres-botones"
)!;

//como los eventos se propagan hacia arriba, agregamos un escuchador de eventos general
//para todo el contenedor
formulario.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLHtmlElement; //representa el elemento HTML clickeado

  const contenedorResultados = document.querySelector<HTMLDivElement>(
    "#contenedor-resultados"
  );

  //promesa consumirJSON
  if (target.classList.contains("boton-uno")) {
    const llamarPromesa = async () => {
      try {
        contenedorResultados!.innerHTML = ""; //limpiar html por cada busqueda
        const arrayCoincidencias = await consumirJSON(
          `${app.options.databaseURL}`
        );

        arrayCoincidencias.forEach((elemento) => {
          const divPadre = document.createElement("div");
          divPadre.classList.add("div-padre-consumirjson");
          const alimento = document.createElement("p");
          alimento.textContent = `${elemento.key}`;
          divPadre.appendChild(alimento);
          contenedorResultados!.appendChild(divPadre);
        });
      } catch (error) {
        console.log(error);
      }
    };
    llamarPromesa();
  }
  //promesa buscarPorCategoria
  if (target.classList.contains("boton-dos")) {
    const input = document.querySelector<HTMLInputElement>(".input-dos")!.value;
    const textoInput = input ?? ""; //permitimos que pueda ser vacio, sino daria error de TS
    const llamarPromesa = async () => {
      try {
        contenedorResultados!.innerHTML = ""; //limpiar html por cada busqueda
        const arrayCoincidencias = await buscarPorCategoria(
          `${app.options.databaseURL}`,
          textoInput
        );
        /*COMENTAR EN CASO DE querer usar la otra forma para ver el objeto completo*/
        /*
        arrayCoincidencias.forEach((elemento) => {
          const divPadre = document.createElement("div");
          divPadre.classList.add("div-padre-consumirjson");
          const alimento = document.createElement("p");
          alimento.textContent = elemento.Alimento;
          divPadre.appendChild(alimento);
          contenedorResultados!.appendChild(divPadre);
        });
        */
        //COMENTAR EN CASO DE QUE SOLO SE QUIERAN VER LOS ALIMENTOS CORRESPONDIENTES (opcion de abajo)

        arrayCoincidencias.forEach((elemento: { [key: string]: string }) => {
          const divObjetoIndividual = document.createElement("div");
          for (let clave in elemento) {
            const claveYValue = document.createElement("p");
            claveYValue.textContent = `${clave}: ${elemento[clave]}`;
            divObjetoIndividual.appendChild(claveYValue);
          }

          divObjetoIndividual.classList.add("div-padre");
          contenedorResultados!.appendChild(divObjetoIndividual);
        });
      } catch (error) {
        console.log(error);
      }
    };
    llamarPromesa();
  }
  //promesa buscarPorComida
  if (target.classList.contains("boton-tres")) {
    const input =
      document.querySelector<HTMLInputElement>(".input-tres")!.value;
    const textoInput = input ?? "";
    const llamarPromesa = async () => {
      try {
        contenedorResultados!.innerHTML = ""; //limpiar html por cada busqueda
        const arrayCoincidencias = await buscarPorComida(
          `${app.options.databaseURL}`,
          textoInput
        );
        /*
        arrayCoincidencias.forEach((elemento) => {
          const divPadre = document.createElement("div");
          divPadre.classList.add("div-padre-consumirjson");
          const alimento = document.createElement("p");
          alimento.textContent = elemento.Alimento;
          divPadre.appendChild(alimento);
          contenedorResultados!.appendChild(divPadre);
        });*/
        arrayCoincidencias.forEach((elemento: { [key: string]: string }) => {
          const divObjetoIndividual = document.createElement("div");
          for (let clave in elemento) {
            const claveYValue = document.createElement("p");
            claveYValue.textContent = `${clave}: ${elemento[clave]}`;
            divObjetoIndividual.appendChild(claveYValue);
          }

          divObjetoIndividual.classList.add("div-padre");
          contenedorResultados!.appendChild(divObjetoIndividual);
        });
      } catch (error) {
        console.log(error);
      }
    };
    llamarPromesa();
  }
});
