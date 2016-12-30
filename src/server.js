const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { server } = require('./config');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(server.port, () => console.log(`Now browse to ${server.host}:${server.port}/graphiql`));
