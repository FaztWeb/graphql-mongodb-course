import express from 'express';
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

// Initializations
const app = express();
connect();

// Settings
app.set('port', process.env.PORT || 4000);

// Hello World Route
app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World'
    });
});

// GraphQl
// const schema = {};
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
        messageId: 1
    }
}))

// Start the server
app.listen(app.get('port'), () => {
    console.log('>>> Server on port', app.get('port'));
});
