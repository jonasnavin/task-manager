import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { FaTrashAlt } from 'react-icons/fa'

const TaskList = ({ task }) => {
    const { handleChange, handleDelete } = useContext(DataContext)
    return (
        <li>
            <input
                type="checkbox"
                className='check-list'
                id={task.id}
                checked={task.checked}
                onChange={() => handleChange(task.id)}
            />
            <label
                className='list'
                htmlFor={task.id}
            >
                {task.data}
            </label>
            <FaTrashAlt
                className='delete-button'
                role='button'
                onClick={() => handleDelete(task.id)}
            />
        </li>
    )
}

export default TaskList