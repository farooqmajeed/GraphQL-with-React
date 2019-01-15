const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;

//Creating Schema
const UserType = new GraphQLObjectType ({
  name = 'User',
  fields:{
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});