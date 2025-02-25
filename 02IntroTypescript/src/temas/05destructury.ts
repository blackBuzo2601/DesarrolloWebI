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

//destructuramos nuestro objeto que pasamos como argumento, PERO QUE CUMPLA CON LA INTERFAZ
//de CrearNuevoHeroe
const crearNuevoHeroe = ({ nombre, edad, apodo, poder }: CrearNuevoHeroe) => ({
  id: 1234,
  nombre: nombre,
  edad: edad,
  apodo: apodo,
  poder: poder ?? "No tiene poder", //este es un operador ternario mas sencillo
});

//El operador ternario "??" evalua si el valor de la izquierda es "null" o "undefined".
//de ser así, devuelve el valor de la derecha ("no tiene poder"), de lo contrario
//devuelve el valor de la izquierda.
//Si no se pasa como parametro el poder (parametro opcional), entonces poder="No tiene poder".

console.log(crearNuevoHeroe({ ...persona, poder: "Jugar" }));

/*
//Otra  forma de acceder a las propiedades
console.log({ nombre }); //{nombre: "saul"} imprime la key-value por asi decirlo
 */

export default crearNuevoHeroe;
