import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import { FaPlus } from 'react-icons/fa'

const NewTask = () => {
    const { addTask, setAddTask, handleSubmit } = useContext(DataContext)
    return (
        <form
            onSubmit={e => e.preventDefault()}
            className='add-form'
        >
            <label
                htmlFor='add-task'
                className='add-label'
            >
                Add Task:
            </label>
            <br />
            <input
                type="text"
                placeholder='Add task'
                id='add-task'
                className='add-input'
                autoFocus
                autoComplete='off'
                value={addTask}
                onChange={e => setAddTask(e.target.value)}
            />
            {addTask &&
                <button
                    className='add-button'
                    type='submit'
                    onClick={handleSubmit}
                >
                    <FaPlus />
                </button>}
        </form>
    )
}

export default NewTask