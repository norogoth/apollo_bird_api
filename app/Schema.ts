import { gql } from "apollo-server-express"; //create the schema

const Schema = gql`
    type Bird {
        id: ID!
        name: String
        note: String
        diet: [String]
        climate: Climate
    }
    type Climate {
        id: ID!
        name: String
        temperatureRange: TemperatureRange
    }
    type TemperatureRange {
        min: Float
        max: Float
    }
    type Query {
        getAllBirds: [Bird]
        getBird(id: Int): Bird
        getBirdsByDiet(diet: String): [Bird]
        getAllDiets: [String]
    }
`
export default Schema;