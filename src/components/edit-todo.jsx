import { useState } from "react"
import PropTypes from 'prop-types';
import { AiFillSave } from 'react-icons/ai'
import { FaUndo } from 'react-icons/fa'

const EditTodo = ({ todo, onSave, undoChanges }) => {
    const [value, setValue] = useState(todo.value);

    const onSubmit = (e) => {
        e.preventDefault();
        onSave(value)
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form className="flex w-full justify-between items-center " onSubmit={onSubmit}>
            <input type="text" placeholder="Edit todo" value={value} className="border-b border-black-600 md:px-2 md:mr-2 outline-todo-blue-4" onChange={onChange} required />
            <div className='flex items-center gap-x-4'>
                <FaUndo className="text-sm text-blue-600 cursor-pointer" onClick={undoChanges} />
                <AiFillSave className="text-sm text-blue-600 cursor-pointer" onClick={() => onSave(value)} />
            </div>
        </form>
    )
}

EditTodo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    undoChanges: PropTypes.func.isRequired,
}

export default EditTodo