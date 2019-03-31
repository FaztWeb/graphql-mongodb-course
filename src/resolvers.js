// Local Data
import { tasks } from "./sample";

// Mongoose Model
import User from "./models/user";

export const resolvers = {
    Query: {
        hello(root, args, context, info) {
            return 'Hello GraphQL';
        },
        greet(root, { name }, context, info) {
            console.log(context)
            return `Hello ${name}`;
        },
        Tasks() {
            return tasks;
        },
        async Users() {
            return await User.find();
        },
        async getUser(_, {_id}) {
            return await User.findById(_id);
        }
    },
    Mutation: {
        createTask(_, { input }) {
            // console.log(input)
            const newId = tasks.length;
            input._id = newId;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            return await User.create(input);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        }
    }
};