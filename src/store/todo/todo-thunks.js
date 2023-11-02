import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { supabase } from '../../super-base-client';
import { setTodos, addTodo, removeTodo, updateTodo } from './todo-slice';

const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async ({ user }, thunkApi) => {
        try {
            const { data, error } = await supabase
                .from('todos')
                .select('*')
                .eq('user_id', user.id);
            if (error) {
                toast.error(error.message);
                return;
            }
            if (data) {
                thunkApi.dispatch(setTodos(data));
            }
        } catch (error) {
            toast.error('Something went wrong');
        }
    },
);

const onAddTodo = createAsyncThunk(
    'todo/addTodos',
    async ({ value, user }, thunkApi) => {
        const newTodo = {
            value,
            user_id: user?.id,
        };
        try {
            const { data, error } = await supabase
                .from('todos')
                .insert([newTodo]);
            if (error) {
                toast.error(error.message);
            }
            if (data) {
                thunkApi.dispatch(addTodo(data));
            }
        } catch (error) {
            toast.error('sorry, something went wrong');
        }
    },
);

const onRemoveTodo = createAsyncThunk(
    'todo/onRemoveTodo',
    async ({ id }, thunkApi) => {
        const { error } = await supabase.from('todos').delete().eq('id', id);
        if (error) {
            toast.error(error.message);
            return;
        }
        thunkApi.dispatch(removeTodo());
    },
);

const onUpdateTodo = createAsyncThunk(
    'todo/onUpdateTodo',
    async ({ id, newValue }, thunkApi) => {
        const { error, data } = await supabase
            .from('todos')
            .update({ value: newValue })
            .eq('id', id)
            .select();
        if (error) {
            toast.error(error.message);
            return { error: error.message };
        }
        thunkApi.dispatch(updateTodo(data));
        return { data };
    },
);

export { fetchTodos, onAddTodo, onRemoveTodo, onUpdateTodo };
