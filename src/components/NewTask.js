import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const NewTask = () => {
    const { addTask, setAddTask, handleSubmit } = useContext(DataContext)
    return (
        <form
            onSubmit={e => e.preventDefault()}
            className='task-form'
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
                value={addTask}
                onChange={e => setAddTask(e.target.value)}
            />
            <button
                type='submit'
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    )
}

export default NewTask