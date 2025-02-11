const persona = {
  nombre: "saul",
  edad: 20,
  apodo: "saulillo",
};
const Elian = {
  nombre: "elian",
  edad: 23,
  apodo: "buzo",
  poder: "estudiar",
};

//PascalCase para interfaces
interface CrearNuevoHeroe {
  nombre: string;
  edad: number;
  apodo: string;
  poder?: string;
}

const crearNuevoHeroe = ({ nombre, edad, apodo, poder }: CrearNuevoHeroe) => ({
  id: 1234,
  nombre: nombre,
  edad: edad,
  apodo: apodo,
  poder: poder ?? "No tiene poder", //este es un operador ternario mas sencillo
});

console.log(crearNuevoHeroe({ ...persona, poder: "Jugar" }));

/*
const objeto:Heroe={}

//repaso destructuring
const { nombre, edad, apodo, poder: "Brincar" } = persona;

//Otra  forma de acceder a las propiedades
console.log({ nombre }); //{nombre: "saul"} imprime la key-value por asi decirlo
 */
