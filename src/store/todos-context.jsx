import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { supabase } from '../super-base-client';
import reducer from './reducer';
import {
    LOGIN,
    LOG_OUT,
    ON_ADD_TODO,
    ON_REMOVE_TODO,
    ON_UPDATE_TODO,
    GET_SESSION,
} from './action';

const todosContext = createContext({});

const TodosProvider = ({ children }) => {
    const initialState = {
        todos: [],
        session: null,
        authenticated: false,
        user: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange((event, sess) => {
            if (event === 'SIGNED_IN') {
                dispatch({ type: LOGIN, payload: { session: sess } });
            } else if (event === 'SIGNED_OUT') {
                dispatch({ type: LOG_OUT });
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

    const getSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (data?.session) {
            dispatch({ type: GET_SESSION, payload: { session: data.session } });
        }
    };

    const login = async (email, password) => {
        const { session, user } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        dispatch({ type: LOGIN, payload: { session, user } });
    };

    const logout = async () => {
        await supabase.auth.signOut();
        dispatch({ type: LOG_OUT });
    };

    const onAddTodo = (value) => {
        const newTodo = {
            id: nanoid(),
            value,
        };
        dispatch({ type: ON_ADD_TODO, payload: { todo: newTodo } });
    };

    const onRemoveTodo = (id) => {
        dispatch({ type: ON_REMOVE_TODO, payload: { id } });
    };

    const onUpdateTodo = (id, newValue) => {
        dispatch({ type: ON_UPDATE_TODO, payload: { id, newValue } });
    };

    return (
        <todosContext.Provider
            value={{
                ...state,
                getSession,
                logout,
                login,
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
