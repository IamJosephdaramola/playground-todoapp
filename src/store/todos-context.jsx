import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../super-base-client';
import { useAuthContextData } from '../hooks';

const todosContext = createContext({});

const TodosProvider = ({ children }) => {
    const { user } = useAuthContextData()
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        if (!user) return;

        const { data } = await supabase.from('todos').select('*').eq('user_id', user.id);

        if (data) {
            setTodos(data)
        }
    }

    useEffect(() => {
        if (user) {
            fetchTodos()
        }
    }, [user])

    const onAddTodo = async (value) => {
        const newTodo = {
            value,
            user_id: user?.id
        };

        const { data, error } = await supabase.from('todos').insert(newTodo).select();

        if (error) {
            //    implement custom alert
            return;
        }

        if (data) {
            setTodos([...data, ...todos]);
        }
    };

    const onRemoveTodo = async (id) => {
        const { error } = await supabase.from('todos').delete().eq('id', id);

        if (error) {
            // custom error message
            return;
        }

        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);

    };

    const onUpdateTodo = async (id, newValue) => {

        const { error } = await supabase
            .from('todos')
            .update({ 'value': newValue })
            .eq('id', id)
            .select()

        if (error) {
            // custom error message
            return;
        }

        let updatedTodos = [...todos];

        updatedTodos = updatedTodos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    value: newValue,
                };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <todosContext.Provider
            value={{
                todos,
                onAddTodo,
                onRemoveTodo,
                onUpdateTodo,
            }}
        >
            {children}
        </todosContext.Provider>
    );
};
TodosProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export { todosContext, TodosProvider };
