import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'Generic User Model',
  fields: () => ({
    id: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    startDate: { type: GraphQLString }
  })
});

export default UserType;
