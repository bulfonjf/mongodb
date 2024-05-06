const todoTypeDef = `#graphql
  type Todo {
    _id: ID!
    text: String!
    userId: ID!
    user: [User!]
  }

  type Query {
    todo(todoId:ID!): Todo
  }
`;

export default todoTypeDef;
