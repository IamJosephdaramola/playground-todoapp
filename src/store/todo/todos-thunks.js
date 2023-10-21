import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { supabase } from '../../super-base-client';
import { setTodos, setLoading, addTodo, removeTodo, updateTodo } from "./todos-slice";


const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const state = getState();
    const { user } = state.auth;

    if (!user) return;

    try {
        dispatch(setLoading({ loading: true }))
        const { data, error } = await supabase
            .from('todos')
            .select('*')
            .eq('user_id', user.id);

        if (error) {
            toast.error('Something went wrong');
        }

        if (data) {
            dispatch(setTodos({ todos: data }))
        }


    } catch (error) {
        toast.error('Something went wrong');
    } finally {
        dispatch(setLoading({ loading: false }))
    }
})

const onAddTodo = createAsyncThunk('todos/addTodo', async (value, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const state = getState();
    const { user } = state.auth;

    if (!user) return;

    try {
        const newTodo = {
            value,
            user_id: user?.id,
        };

        const { data, error } = await supabase
            .from('todos')
            .insert(newTodo)
            .select();

        if (error) {
            toast.error('Something went wrong');
        }

        if (data) {
            dispatch(addTodo({ todos: data }))
        }


    } catch (error) {
        toast.error('Something went wrong');
    }
})

const onRemoveTodo = createAsyncThunk('todos/removeTodo', async (todoId, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const state = getState();
    const { user } = state.auth;

    if (!user) return;

    try {

        const { error } = await supabase.from('todos').delete().eq('id', todoId)
            .eq('user_id', user.id)

        if (error) {
            toast.error('Something went wrong');
        } else {

            dispatch(removeTodo({ todoId }))
        }

    } catch (error) {
        toast.error('Something went wrong');
    }
})

const onUpdateTodo = createAsyncThunk('todos/updateTodo', async ({ newValue, todoId }, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const state = getState();
    const { user } = state.auth;

    if (!user) return;

    try {

        const { error } = await supabase
            .from('todos')
            .update({ value: newValue })
            .eq('id', todoId)
            .eq('user_id', user.id)
            .select();

        if (error) {
            toast.error('Something went wrong');
        } else {

            dispatch(updateTodo({ todoId, newValue }))
        }

    } catch (error) {
        toast.error('Something went wrong');
    }
})

export { fetchTodos, onAddTodo, onRemoveTodo, onUpdateTodo }