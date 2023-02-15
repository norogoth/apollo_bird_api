import { getNewId } from "./Helper";
import { birds, climates } from "./dataset";
export class Bird {
    id: number;
    name: string;
    note: string;
    diet?: string[];
    climate?: Climate;
    constructor(id: number, name: string, note: string) {
        this.id = id;
        this.name = name;
        this.note = note;
    }
}
export class Climate {
    id: number;
    name: string;
    temperatureRange: TemperatureRange;
    constructor(id: number, name: string, minTemp: number, maxTemp: number) {
        this.id = id;
        this.name = name;
        this.temperatureRange = new TemperatureRange(minTemp, maxTemp);
    }
}
 export class TemperatureRange {
    min: number;
    max: number;
    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }
}
export function getBirds(): Bird[] {
    return birds.map(birdData => {
        const bird = new Bird(birdData.id, birdData.name, birdData.note);
        bird.id = birdData.id;
        bird.diet = birdData.diet;
    
        if (birdData.climateId !== undefined) {
            const climateData = climates.find(climate => climate.id === birdData.climateId);
            if (climateData !== undefined) {
                const temperatureRange = new TemperatureRange(climateData.minTemp, climateData.maxTemp);
                const climate = new Climate(climateData.id, climateData.name, climateData.minTemp, climateData.maxTemp);
                climate.id = climateData.id;
                bird.climate = climate;
            }
        }
    
        return bird;
    });
}