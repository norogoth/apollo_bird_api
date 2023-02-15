//import {birds, climates} from "./dataset"; //get all of the available data from our database.
import { Bird, Climate, TemperatureRange, getBirds } from "./Models";

const Resolvers = {
    Query: {
        getAllBirds: () => getBirds(),
        /*
        getBird: (_: any, args: any) => { 
            console.log(args);
            //get the bird object that contains the specified ID.
            return birds.find((bird) => bird.id === args.id);
        },
        getBirdsByDiet: (_: any, args: any) => {
            console.log("Getting birds of diet: ", args.diet);
            return birds.filter(bird => bird.diet.includes(args.diet));
        },
        getAllDiets: () => {
            let diets: string[] = [];
            birds.forEach( bird => {
                bird.diet.forEach( diet => {
                    if (!diets.includes(diet)) {
                        diets.push(diet);
                    }
                });
            });
            return diets;
        },
        */
    },
};
export default Resolvers;