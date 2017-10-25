# TimeRocket API

A GraphQL API for my timesheet app, TimeRocket.

This is a sample app I'm building for learning about GraphQL and associated tools.

## Coding Style

In building this app I may pick up a few coding styles that do not conform to the common practices. But hey, it might end up being a good idea! :P I'll log some of that stuff here.

### GraphQL Types

I thought the standard GraphQL types like `GraphQLString` and `GraphQLObjectType` were a bit verbose. As an alternative, I decided to rename GraphQL types on import to be shorter and more readable by replacing the `GraphQL` prefix with `_` and removing the `Type` postfix if there is one.

```js
// Old
import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

// New
import {
  GraphQLObjectType as _Object,
  GraphQLString as _String
} from 'graphql';
```

And usage:

```js
// Old
firstName: { type: GraphQLString }

// New
firstName: { type: _String }
```
