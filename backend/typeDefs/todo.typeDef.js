const todoTypeDef = `#graphql
  type Todo {
    _id: ID!
    text: String!
    userId: ID!
  }

  type Query {
    todo(todoId:ID!): Todo
    todos(userId:ID!): [Todo!]
  }
`;

export default todoTypeDef;
