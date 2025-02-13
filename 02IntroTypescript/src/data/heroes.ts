export interface Hero {
  id: number;
  nombre: string;
  owner: Owner;
}

//podemos hacer un tipado mas explicito con type, como en la siguiente linea
//para espeicifcarlo en la interfaz
export type Owner = "LalitoDC" | "Marvel" | "DC";
const heroes: Hero[] = [
  {
    id: 1,
    nombre: "Zunni",
    owner: "LalitoDC",
  },
  {
    id: 2,
    nombre: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    nombre: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    nombre: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    nombre: "Wolverine",
    owner: "Marvel",
  },
];
export const owner = ["DC", "Marvel", "LalitoDC"];

export default heroes;

export const saludar = () => {
  return "Hola";
};
