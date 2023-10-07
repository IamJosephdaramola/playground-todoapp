import { createContext, useReducer, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useAuthContextData } from '../../hooks';
import { supabase } from '../../super-base-client';
import { todoReducer, initialState, actionTypes } from './todos-reducer';

const todosContext = createContext({});

const TodosProvider = ({ children }) => {
    const { user } = useAuthContextData();
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const fetchTodos = async () => {
        if (!user) return;

        const { data } = await supabase
            .from('todos')
            .select('*')
            .eq('user_id', user.id);

        if (data) {
            dispatch({
                type: actionTypes.SET_TODO,
                payload: { data },
            });
        }
    };

    useEffect(() => {
        if (user) {
            fetchTodos();
        }
    }, [user]);

    const onAddTodo = async (value) => {
        const newTodo = {
            value,
            user_id: user?.id,
        };

        const { data, error } = await supabase
            .from('todos')
            .insert(newTodo)
            .select();

        if (error) {
            //    implement custom alert
            return;
        }

        if (data) {
            dispatch({ type: actionTypes.ADD_TODOS, payload: data });
        }
    };

    const onRemoveTodo = async (id) => {
        const { error } = await supabase.from('todos').delete().eq('id', id);

        if (error) {
            // custom error message
            return;
        }
        dispatch({ type: actionTypes.REMOVE_TODO, payload: { id } });
       
    };

    const onUpdateTodo = async (id, newValue) => {
        const { error } = await supabase
            .from('todos')
            .update({ value: newValue })
            .eq('id', id)
            .select();

        if (error) {
            // custom error message
            return;
        }
        dispatch({
            type: actionTypes.UPDATE_TODO,
            payload: { id, newValue },
        });
    };

    const value = useMemo(() => {
        return {
            todos: state.todos,
            onRemoveTodo,
            onAddTodo,
            onUpdateTodo,
        }
    }, [state])

    return (
        <todosContext.Provider
            value={value}
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
