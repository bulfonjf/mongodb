import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { GET_TODO } from "../../graphql/queries/todo.query";

const TodoItem = () => {
    const { todoId } = useParams<{ todoId: string }>();
    
    const { loading, error, data } = useQuery(GET_TODO, {
        variables: { todoId: todoId },
    });

    console.log("Id param: ", todoId);
    console.log("Todo: ", data);
    
    if (error) return `Error! ${error.message}`;

    if (loading) {
        return <div>Loading...</div>;
    }

    const onDelete = () => {
        // TODO: Implement delete functionality
    };

    const onEdit = () => {
        // TODO: Implement edit functionality
    };

    const onSave = () => {
        // TODO: Implement save functionality
    };

    return (
        <div>
            <h3>{data.todo.text}</h3>
            <p>{data.todo.userId}</p>
            <p>{data.todo._id}</p>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onSave}>Save</button>
        </div>
    );
};

export default TodoItem;