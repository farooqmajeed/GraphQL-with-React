const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema} = graphql;
const axios = require('axios');
// const _ = require('lodash');



//dummy data
// const users=[
//   {id : '10', firstName: 'Ali',  age: 20},
//   {id : '19', firstName: 'Sajid',  age: 25},
//   {id : '29', firstName: 'usama',  age: 19}
// ];

//Creating Schema
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields:{
    id:{ type: GraphQLString },
    name:{ type: GraphQLString },
    description:{ type: GraphQLString }
  }
})
const UserType = new GraphQLObjectType ({
  name : 'User',
  fields:{
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company:{
      type:CompanyType,
      resolve( parentValue,args){
        return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then(resp => resp.data)
      }
    }
  }
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user:{
      type: UserType,
      args:{id: {type: GraphQLString } },
      resolve(parentValue, args){
        return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(resp => resp.data)
        // return _.find(users, {id: args.id});
        //Now get data from over db.json file which is our local sb server running on localhost:3000
        // .then(response =>console.log(response)) {data:{firstname: 'name}} bad news graphql not know nested property data 
      }
    },
    // company:{
    //   type:CompanyType,

    // }
  }
})

//helper
module.exports = new GraphQLSchema({
  query : RootQuery
});