import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { supabase } from '../../super-base-client';
import { authReducer, initialState, actionTypes } from './auth-reducer';

const authContext = createContext({});

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const getSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (data?.session) {
            dispatch({
                type: actionTypes.GET_SESSION,
                payload: { session: data.session },
            });
        }
    };

    useEffect(() => {
        getSession();
        const { data } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') {
                dispatch({
                    type: actionTypes.GET_SESSION,
                    payload: { session },
                });
            } else if (event === 'SIGNED_OUT') {
                dispatch({ type: actionTypes.LOGOUT });
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, []);

   const login = async (email, password) => {
       const { data, error } = await supabase.auth.signInWithPassword({
           email,
           password,
       });

       if (error) {
           return { error };
       }

       if (data) {
           dispatch({
               type: actionTypes.GET_SESSION,
               payload: { session: data.session },
           });
       }

       return {};
   };


    const logout = async () => {
        await supabase.auth.signOut();

        dispatch({ type: actionTypes.LOGOUT });
    };

    return (
        <authContext.Provider
            value={{
                getSession,
                authenticated: state.authenticated,
                logout,
                login,
                user: state.user,
            }}
        >
            {children}
        </authContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export { authContext, AuthProvider };
