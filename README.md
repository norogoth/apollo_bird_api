# apollo_bird_api
demonstrative use of graphQL using Apollo GraphQL's nice interface.

This delivers a variety of data about birds (source: I made it all up). You can run it on localhost and query it. Here is the scema for the data:

```
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
```

The query types are particularly useful at getting a variety of data. You may try something like 
```
query Query {
  getBird (id: 1) {
    name
    note
    climate {
      name
      temperatureRange {
        min
        max
      }
    }
  }
}
```
to receive a response like
```
{
  "data": {
    "getBird": {
      "name": "Roseate Spoonbill",
      "note": "this is pretty much the best bird",
      "climate": {
        "name": "tundra",
        "temperatureRange": {
          "min": -35,
          "max": 40
        }
      }
    }
  }
}
```
Granted, as Flordians ought to know, this data isn't correct but it at least demonstrates the functionality!
