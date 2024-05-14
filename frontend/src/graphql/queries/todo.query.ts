import { gql } from "@apollo/client";

export const GET_TODO = gql`
	query GetTodo($todoId: ID!) {
		todo(todoId: $todoId) {
            _id
            text
            userId
        }
	}
`;