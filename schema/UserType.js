import {
  GraphQLObjectType as _Object,
  GraphQLString as _String
} from 'graphql';

const UserType = new _Object({
  name: 'User',
  description: 'Generic User Model',
  fields: () => ({
    _id: { type: GraphQLString },
    id: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    title: { type: GraphQLString },
    status: { type: GraphQLString },
    startDate: { type: GraphQLString },
    userRole: { type: GraphQLString }
    //timesheets: { type: TimesheetType } // arrayOf
  })
});

export default UserType;
