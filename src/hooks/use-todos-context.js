import { useContext } from "react"
import { todosContext } from "../store/todos-context"

const useTodosContextData = () => {
    const data = useContext(todosContext)


    return data;
}

export { useTodosContextData }