import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import TaskList from './TaskList'

const Task = () => {
    const { tasks, searchTask } = useContext(DataContext)
    const taskResult = tasks.filter(task => ((task.data).toLowerCase()).includes(searchTask.toLowerCase()))
    return (
        <ul className='task-list'>
            {
                taskResult.length ? taskResult.map(task => (
                    <TaskList key={task.id} task={task} />
                )) : (
                    <p>No tasks to complete.</p>
                )
            }
        </ul>
    )
}

export default Task