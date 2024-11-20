import React, { useContext } from 'react'
import Task from './Task'
import DataContext from '../context/DataContext'
import NewTask from './NewTask'
import SearchTask from './SearchTask'

const Main = () => {
    const { tasks } = useContext(DataContext)
    return (
        <main className='main'>
                <NewTask />
                {tasks.length ? (<SearchTask />) : null}
                <Task />
        </main>
    )
}

export default Main