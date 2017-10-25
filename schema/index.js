import {
  GraphQLSchema,
  GraphQLObjectType as _Object,
  GraphQLString as _String
} from 'graphql';

import user from './mock-data/user.json';

import UserType from './UserType';

const QueryType = new _Object({
  name: 'Query',
  description: '...',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: { type: _String }
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
