import { Planets } from "./interfaces";

export const PLANET_NAMES = [Planets.Mars, Planets.Jupiter, Planets.Saturn, Planets.Uranus, Planets.Neptune, Planets.Mercury, Planets.Venus];

export const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
