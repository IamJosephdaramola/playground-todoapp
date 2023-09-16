import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { supabase } from '../super-base-client';


const todosContext = createContext({});

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [session, setSession] = useState(null)
    const [authenticated, setAuthenticated] = useState(false)

    const getSession = async () => {
        const { data } = await supabase.auth.getSession()

        if (data?.session) {
            setSession(data.session)
            setAuthenticated(!!data.session.access_token)
        }
    }

    const logout = async () => {
        await supabase.auth.signOut()

        setSession(null);
        setAuthenticated(false)
    }

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
        value={{ todos, onAddTodo, onRemoveTodo, onUpdateTodo, session, getSession, authenticated, logout }}
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