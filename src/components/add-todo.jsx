import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuthContextData } from '../hooks';
import { onAddTodo } from '../store/todo/todo-thunks';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const { user } = useAuthContextData();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(onAddTodo({ value, user}));
        setValue('');
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <form
            className="flex items-center justify-center  p-2 rounded-sm gap-2"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Add todo"
                value={value}
                className="sm:px-2 py-1 rounded-md border w-40 sm:w-96"
                onChange={onChange}
                required
            />
            <button
                type="submit"
                className="rounded-md px-2 py-1 sm:px-8 bg-todo-blue-3 text-white"
            >
                Submit
            </button>
        </form>
    );
};

export default AddTodo;
