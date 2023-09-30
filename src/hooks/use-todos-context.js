import { useContext } from "react"
import { todosContext } from "../store"

const useTodosContextData = () => {
    const data = useContext(todosContext);


    return data;
}

export { useTodosContextData }