import { useState } from "react"
import { useTodosContextData } from "../hooks/use-todos-context";


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
        <div className="pt-28 md:pt-40 pb-10 grid place-items-center">
            <h1 className="text-2xl font-bold my-10 text-center md:text-3xl px-10">
                Let me be helpful with your todo list
            </h1>
            <form className="shadow-xl p-2 rounded-sm" onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Add todo"
                    value={value}
                    className=" sm:px-2 py-1 rounded-md  outline-none w-40 sm:w-96"
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
        </div>
    );
}

export default AddTodo