import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BiSolidTrash } from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai'
import { onRemoveTodo, onUpdateTodo } from '../store/todo/todos-thunks';
import EditTodo from './edit-todo';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, value } = todo;
    const [editMode, setEditMode] = useState(false)

    const onSave = (newValue) => {
        dispatch(onUpdateTodo({ todoId: id, newValue }))
        setEditMode(false)
    };

    const undoChanges = () => setEditMode(false)

    return (
        <ul className="flex justify-center ">
            <li className="flex justify-between items-center w-[65%] md:w-[38%] bg-todo-grey-2 font-semibold px-3 h-10 gap-x-4 mt-5">
                {editMode ? (
                    <EditTodo
                        todo={todo}
                        onSave={onSave}
                        undoChanges={undoChanges}
                    />
                ) : (
                    <Fragment>
                        <span>{value}</span>
                        <div className='flex gap-4'>
                            <AiFillEdit
                                className="text-blue-600 text-sm cursor-pointer"
                                onClick={() => setEditMode(true)}
                            />
                            <BiSolidTrash
                                className="text-rose-700 text-sm cursor-pointer"
                                    onClick={() => dispatch(onRemoveTodo(id))}
                            />
                        </div>
                    </Fragment>
                )}
            </li>
        </ul>
    );
}

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    }).isRequired,
}

export default Todo