import { Bird, Climate, TemperatureRange } from "./Models";

export let birds: {id: number, name: string , note: string, diet: string[], climateId?: number}[] = [
    {id: 1, name: "Roseate Spoonbill", note: "this is pretty much the best bird", diet: ["seeds", "fruit", "fish"], climateId: 0},
    {id: 2, name: "Cardinal", note: "only on the east coast", diet: ["seeds"], climateId: 3},
    {id: 3, name: "shoebill", note: "goofy looking birds lol", diet: []},
    {id: 4, name: "White-Crown Sparrow", note: "sparrow wite a black and white crown and an orange beak", diet: ["seeds"]},
    {id: 5, name: "Bird of Paradise", note: "this is a plant???", diet: []},
    {id: 6, name: "dodo", note: "AKA Perl developers", diet: ["nuts", "seeds"]},
];
export let climates: {id: number, name: string, minTemp: number, maxTemp: number}[] = [
    {id: 0, name: "tundra", minTemp: -35, maxTemp: 40},
    {id: 1, name: "desert", minTemp: 30, maxTemp: 110},
    {id: 2, name: "forest", minTemp: 15, maxTemp: 70}
];