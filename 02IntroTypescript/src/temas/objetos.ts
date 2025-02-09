export const persona1 = {
  apellido: "Rojas",
  edad: 27,
  direccion: {
    ciudad: "Ensenada",
    cp: 220099,
    lat: 15.33455,
    log: 12.53222,
  },
} as const;

const persona2 = structuredClone(persona1);

console.log(persona1);
console.log(persona2);
//el escribir as const, es propio de TYPESCRIPT
