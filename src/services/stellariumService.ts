import { PLANET_NAMES } from "../utils/constants";
import { Astro, Planets, planetsImgs } from "../utils/interfaces";

export const getAllPlanetsInfo = async (): Promise<Astro[]> => {
    try {
        const requests = PLANET_NAMES.map(name => getAstroInfo(name, planetsImgs[name]));
        return await Promise.all(requests);
    } catch (error) {
        throw new Error('Could not fetch data for all planets');
    }
}

export const getAstroInfo = async (name: string, pathTexture: string ): Promise<Astro> => {
    try {
        const url = `http://localhost:8090/api/objects/info?name=${name}&format=json`;
        console.log("url : ", url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching data for ${name}: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            name: data.name,
            phase: data.phase,
            distanceKm: data["distance-km"],
            sizeDeg: data["size-deg"],
            magnitude: data.vmag,
            phaseAngle: data["phase-angle-deg"],
            azimuth: data.azimuth,
            altitude: data.altitude,
            distance: data.distance,
            size: data.size * 1000,
            texture: pathTexture,
            position: { x: 0, y: 0, z: 0 },
        };
    } catch (error) {
        throw new Error(`Could not fetch data for ${name}`);
    }
}