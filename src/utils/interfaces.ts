export interface Astro {
  name: string;
  phase: number;
  distanceKm: number;
  sizeDeg: string;
  magnitude: number;
  phaseAngle: string;
  azimuth: number;
  altitude: number;
  distance: number;
  size: number;
  texture: string;
  position: PositionInMap;
}

export interface PositionInMap {
  x: number;
  y: number;
  z: number;
}

export enum Planets {
  Mercury = "Mercury",
  Venus = "Venus",
  // Earth = "Earth",
  Mars = "Mars",
  Jupiter = "Jupiter",
  Saturn = "Saturn",
  Uranus = "Uranus",
  Neptune = "Neptune",
}

export enum Astros {
  Sun = "Sun",
  Moon = "Moon",
}

export const astroImgs : Record<Astros, string> = {
  [Astros.Sun]: "src/assets/astros/sun.jpg",
  [Astros.Moon]: "src/assets/astros/moon.jpg",
}


export const planetsImgs: Record<Planets, string> = {
  [Planets.Mercury]: "src/assets/planets/mercury.svg",
  [Planets.Venus]: "src/assets/planets/venus.svg",
  [Planets.Mars]: "src/assets/planets/mars.svg",
  [Planets.Jupiter]: "src/assets/planets/jupiter.svg",
  [Planets.Saturn]: "src/assets/planets/saturn.svg",
  [Planets.Neptune]: "src/assets/planets/neptune.svg",
  [Planets.Uranus]: "src/assets/planets/uranus.svg",
  // [Planets.Earth]: "src/assets/planets/uranus.svg",
}

export interface ApodData {
  title: string;
  explanation: string;
  url: string;
}