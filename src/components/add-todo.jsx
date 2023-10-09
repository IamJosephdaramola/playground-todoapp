import { useState } from "react"
import { useTodosContextData } from "../hooks";


const AddTodo = () => {
    const { onAddTodo } = useTodosContextData();
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onAddTodo(value)
        setValue('')
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form className="flex items-center justify-center  p-2 rounded-sm gap-2" onSubmit={onSubmit}>
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
                    submit
                </button>
        </form>
    );
}

export default AddTodo