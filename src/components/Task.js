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
                )) : taskResult && !searchTask ? (
                    <p style={{marginTop: '8rem', textAlign: 'center'}}>No tasks to complete.</p>
                ) : (
                    <p style={{marginTop: '8rem', textAlign: 'center'}}>Match not found.</p>
                )
            }
        </ul>
    )
}

export default Task