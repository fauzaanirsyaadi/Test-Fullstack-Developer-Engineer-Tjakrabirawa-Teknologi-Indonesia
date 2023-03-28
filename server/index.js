const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Buat schema GraphQL
const schema = buildSchema(`
  type Query {
    user(id: Int!): User
    users(role: String!): [User]
  }

  type User {
    id: Int
    name: String
    email: String
    role: String
  }
`);

// Buat resolver untuk schema
const root = {
  user: ({ id }) => {
    // implementasi untuk mengambil data user dengan id tertentu
  },
  users: ({ role }) => {
    // implementasi untuk mengambil data user dengan role tertentu
  },
};

// Buat server Express.js
const app = express();

// Tambahkan middleware GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // untuk mengaktifkan GraphiQL UI
  })
);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
