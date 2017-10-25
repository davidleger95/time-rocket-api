import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'timesheet',
  description: 'Generic User Model',
  fields: () => ({
    _id: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    startDate: { type: GraphQLString },
    userRole: { type: GraphQLString }
  })
});

export default UserType;
