export interface Planet {
    name: string;
    phase: number;
    distanceKm: number;
    sizeDeg: string;
    magnitude: number;
    phaseAngle: string;
  }

export enum Planets {
    Mercury = "Mercury",
    Venus = "Venus",
    Earth = "Earth",
    Mars = "Mars",
    Jupiter = "Jupiter",
    Saturn = "Saturn",
    Uranus = "Uranus",
    Neptune = "Neptune",
  }
  