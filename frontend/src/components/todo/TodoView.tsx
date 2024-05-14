
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TodoView {
    title: string;
    description: string;
    date: Date | string;
    id: string;
}

const TodoItem = () => {
    const { todoId } = useParams<{ todoId: string }>();
    const [todo, setTodo] = useState<TodoView>({
        title: 'todo 1',
        description: 'todo description',
        date: '2021-09-01',
        id: 'id1',
    } as TodoView);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await fetch(`/api/todos/${todoId}`);
                const data = await response.json();
                setTodo(data);
            } catch (error) {
                console.error('Error fetching todo:', error);
            }
        };

        fetchTodo();
    }, [todoId]);

    if (!todo) {
        return <div>Loading...</div>;
    }

    const { title, description, date } = todo;

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
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date.toString()}</p>
            <p>{todoId}</p>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onSave}>Save</button>
        </div>
    );
};

export default TodoItem;