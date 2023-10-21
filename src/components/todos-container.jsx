import { useSelector } from "react-redux";
import Todo from "./todo";
import { getTodos, getIsTodoLoading } from "../store/todo/todos-selectors";

const TodosContainer = () => {
    const todos = useSelector(getTodos);
    const loading = useSelector(getIsTodoLoading);

    if (loading) {
        return <div className="text-center">loading...</div>
    }

    return (
        <ul className="flex flex-col gap-1">
            {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
    )
}

export default TodosContainer