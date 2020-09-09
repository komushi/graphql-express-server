const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Some fake data
const initBooks = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
    gender: 'Female'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    gender: 'Male'
  },
];

// The GraphQL schema in string form
const typeDefs = gql`
  type Query { 
    getAllBooks: [Book]
    getBooksByGender(gender: String): [Book]
  }
  type Book { title: String, author: String, gender: String }
`;

// The resolvers
const resolvers = {
  Query: { 
    getAllBooks: () => {
      return initBooks;
    },
    getBooksByGender: function (rootObj, {gender}) {
      return [initBooks[0]];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
 

// Initialize the app
const app = express();
server.applyMiddleware({ app });


// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphql to run queries!');
});