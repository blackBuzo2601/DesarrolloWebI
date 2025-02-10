type JuegoSwitch = {
  titulo: string;
  año: number;
  jugadores: string;
  genero: string;
};

const juegosSwitch: JuegoSwitch[] = [
  {
    titulo: "The Legend of Zelda: Breath of the Wild",
    año: 2017,
    jugadores: "1",
    genero: "Aventura, Mundo Abierto",
  },
  {
    titulo: "Super Mario Odyssey",
    año: 2017,
    jugadores: "1-2",
    genero: "Plataformas",
  },
  {
    titulo: "Mario Kart 8 Deluxe",
    año: 2017,
    jugadores: "1-4 (local), 1-12 (online)",
    genero: "Carreras",
  },
  {
    titulo: "Super Smash Bros. Ultimate",
    año: 2018,
    jugadores: "1-8",
    genero: "Peleas",
  },
  {
    titulo: "Animal Crossing: New Horizons",
    año: 2020,
    jugadores: "1-4 (local), 1-8 (online)",
    genero: "Simulación, Social",
  },
  {
    titulo: "Pokémon Scarlet & Violet",
    año: 2022,
    jugadores: "1 (historia), 2-4 (multijugador)",
    genero: "RPG",
  },
  {
    titulo: "Metroid Dread",
    año: 2021,
    jugadores: "1",
    genero: "Acción, Metroidvania",
  },
  {
    titulo: "Splatoon 3",
    año: 2022,
    jugadores: "1 (historia), 1-8 (multijugador)",
    genero: "Disparos en tercera persona",
  },
  {
    titulo: "Fire Emblem Engage",
    año: 2023,
    jugadores: "1",
    genero: "Estrategia, RPG",
  },
  {
    titulo: "Luigi’s Mansion 3",
    año: 2019,
    jugadores: "1-2 (historia), 1-8 (multijugador)",
    genero: "Aventura, Puzzles",
  },
];

export default juegosSwitch;
