import { gql } from "apollo-server-express"; //create the schema

const Schema = gql`
    type Bird {
        id: ID!
        name: String
        note: String
        diet: [String]
    }
    type Query {
        getAllBirds: [Bird]
        getBird(id: Int): Bird
        getBirdsByDiet(diet: String): [Bird]
    }
`
export default Schema;