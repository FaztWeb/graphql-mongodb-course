import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        hello: String!
        greet(name: String!): String!
        Tasks: [Task]
        Users: [User]
        getUser(_id: ID): User
    }

    type Task {
        _id: ID
        title: String!
        description: String
        number: Int
    }
    
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        updateUser(_id: ID!, input: UserInput): User
        deleteUser(_id: ID!): User
    }

    input TaskInput {
        title: String!
        description: String
        number: Int
    }

    input UserInput {
        firstname: String
        lastname: String
        age: Int
    }

`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})