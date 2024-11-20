import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { TbTrashXFilled } from 'react-icons/tb'

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
            <button
                className='delete-button'
                onClick={() => handleDelete(task.id)}
            >
                <TbTrashXFilled />
            </button>
        </li>
    )
}

export default TaskList