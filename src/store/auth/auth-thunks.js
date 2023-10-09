import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { supabase } from '../../super-base-client';
import { setSession, setLoading } from './auth-slice';

const getSession = createAsyncThunk('auth/getSession', async (_, thunkApi) => {
    const response = await supabase.auth.getSession();

    if (response.data?.session) {
        thunkApi.dispatch(setSession({ session: response.data?.session }))
    }

})

const login = createAsyncThunk('auth/login', async ({ email, password, navigate }, thunkApi) => {
    const { dispatch } = thunkApi;
    try {
        dispatch(setLoading({ loading: true }));

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            toast.error(error.message);
        }

        if (data?.session) {
            thunkApi.dispatch(setSession({ session: data?.session }))
            navigate('/')
            toast.success('Welcome to your todo app');
        }

    } catch (error) {
        toast.error('Something went wrong');
    } finally {
        dispatch(setLoading({ loading: false }));
    }

})

const signUp = createAsyncThunk('auth/signUp', async ({ details, navigate }, thunkApi) => {
    const { dispatch } = thunkApi;
    const { email, password, firstName, lastName } = details;

    try {
        dispatch(setLoading({ loading: true }));

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName.trim(),
                    last_name: lastName.trim()
                },
                emailRedirectTo: `${document.location.origin}/`,
            },
        });

        if (error) {
            toast.error(error.message);
            return;
        }

        if (data?.user?.identities?.length === 0) {
            toast.error("This user already exists")
            return;
        }

        navigate('/verify-email', { state: { email: data.user.email } });
        toast.success('Account created successfully');

    } catch (error) {
        toast.error('Something went wrong');
    } finally {
        dispatch(setLoading({ loading: false }));
    }


})

const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    const response = await supabase.auth.signOut();

    thunkApi.dispatch(setSession({ session: null }))
    return response
})

export { logout, getSession, login, signUp }