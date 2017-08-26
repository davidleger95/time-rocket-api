import {
  GraphQLObjectType as _Object,
  GraphQLString as _String
} from 'graphql';

const UserType = new _Object({
  name: 'User',
  description: 'Generic User Model',
  fields: () => ({
    id: { type: _String },
    imageUrl: { type: _String },
    firstName: { type: _String },
    lastName: { type: _String },
    email: { type: _String },
    title: { type: _String },
    status: { type: _String },
    startDate: { type: _String }
  })
});

export default UserType;
