import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import user from './mock-data/user.json';

import UserType from './UserType';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => {
        return { ...user, id: args.id }
      }
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
});
