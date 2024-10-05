import { PLANET_NAMES } from "../utils/constants";
import { Planet } from "../utils/interfaces";

export const getPlanetInfo = async (planetName: string): Promise<Planet> => {
    try {
        const response = await fetch(`http://localhost:8090/api/objects/info?name=${planetName}&format=json`);
        if (!response.ok) {
            throw new Error(`Error fetching data for ${planetName}: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            name: data.name,
            phase: data.phase,
            distanceKm: data["distance-km"],
            sizeDeg: data["size-deg"],
            magnitude: data.vmag,
            phaseAngle: data["phase-angle-deg"],
        };
    } catch (error) {
        throw new Error(`Could not fetch data for ${planetName}`);
    }
}

export const getAllPlanetsInfo = async (): Promise<Planet[]> => {
    console.log("Get all planets started");
    try {
        const requests = PLANET_NAMES.map(name => getPlanetInfo(name));
        return await Promise.all(requests);
    } catch (error) {
        throw new Error('Could not fetch data for all planets');
    }
}