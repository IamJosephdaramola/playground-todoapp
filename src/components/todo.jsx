import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BiSolidTrash } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import EditTodo from './edit-todo';

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
    const { id, value } = todo;
    const [editMode, setEditMode] = useState(false)

    const onSave = (updatedValue) => {
        onUpdateTodo(id, updatedValue)
        setEditMode(false)
    };

    const undoChanges = () => setEditMode(false)

    return (
        <li className='flex items-center gap-x-4'>
            {editMode ? (
                <EditTodo todo={todo} onSave={onSave} undoChanges={undoChanges} />
            ) : (
                <Fragment>
                    <span>{value}</span>
                    <AiFillEdit className='text-blue-600 text-sm cursor-pointer' onClick={() => setEditMode(true)} />
                    <BiSolidTrash className='text-rose-700 text-sm cursor-pointer' onClick={() => onRemoveTodo(id)} />
                </Fragment>
            )}
        </li>

    )
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired
}

export default Todo