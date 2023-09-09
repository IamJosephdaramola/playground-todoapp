import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";


const todosContext = createContext({});

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const onAddTodo = (value) => {
        const newTodo = {
            id: nanoid(),
            value
        }
        setTodos([newTodo, ...todos])
    }

    const onRemoveTodo = (id) => {
        const updatedTodos = todos.filter((todo => todo.id !== id));
        setTodos(updatedTodos)
    }

    const onUpdateTodo = (id, newValue) => {
        let updatedTodos = [...todos]

        updatedTodos = updatedTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    value: newValue
                }
            }
            return todo
        })

        setTodos(updatedTodos)
    }

    return <todosContext.Provider
        value={{ todos, onAddTodo, onRemoveTodo, onUpdateTodo }}
    >
        {children}
    </todosContext.Provider>

}
TodosProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}



export { todosContext, TodosProvider }