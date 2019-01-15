const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema} = graphql;
const _ = require('lodash');


//dummy data
const users=[
  {id : '10', firstName: 'Ali',  age: 20},
  {id : '19', firstName: 'Sajid',  age: 25},
  {id : '29', firstName: 'usama',  age: 19}
];

//Creating Schema
const UserType = new GraphQLObjectType ({
  name : 'User',
  fields:{
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user:{
      type: UserType,
      args:{id: {type: GraphQLString } },
      resolve(parentValue, args){
        return _.find(users, {id: args.id});
      }
    }
  }
})

//helper
module.exports = new GraphQLSchema({
  query : RootQuery
});