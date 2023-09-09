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
        <form className="flex items-center" onSubmit={onSubmit}>
            <input type="text" placeholder="Edit todo" value={value} className="border-b border-black-600 px-2 mr-2" onChange={onChange} required />
            <div className='flex items-center gap-x-2'>
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