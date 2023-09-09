import Todo from "./todo";
import { useTodosContextData } from "../hooks/use-todos-context";

const TodosContainer = () => {
    const { todos } = useTodosContextData()

    return (
        <ul className="flex flex-col gap-1">
            {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </ul>
    )
}

export default TodosContainer