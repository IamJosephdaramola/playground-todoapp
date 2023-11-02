import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Todo from './todo';
import { fetchTodos } from '../store/todo/todo-thunks';
import { useAuthContextData, useTodosContextData } from '../hooks';

const TodosContainer = () => {
    const dispatch = useDispatch();
    const { user} = useAuthContextData();
    const { todos } = useTodosContextData();

    useEffect(() => {
        dispatch(fetchTodos({ user }));
    }, [dispatch]);

    return (
        <ul className="flex flex-col gap-1">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodosContainer;
