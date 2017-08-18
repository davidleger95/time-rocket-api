import express from 'express';
import cors from 'cors';
import graphQLHTTP from 'express-graphql';

import schema from './schema';

const app = express();

app.use(cors());

app.use(graphQLHTTP({
  schema,
  graphiql: true
}));

app.listen(5000);
