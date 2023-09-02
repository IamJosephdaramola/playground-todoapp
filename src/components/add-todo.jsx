import { useState } from "react"
import PropTypes from 'prop-types';

const AddTodo = ({ onAddTodo }) => {
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
        <form className="flex items-center my-4" onSubmit={onSubmit}>
            <input type="text" placeholder="Add todo" value={value} className="border border-black-600 px-2 py-1 rounded-md mr-4" onChange={onChange} />
            <button type="submit" className="rounded-md py-1 px-2 bg-blue-600 text-white">submit</button>
        </form>
    )
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired
}

export default AddTodo